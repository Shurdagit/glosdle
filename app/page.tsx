"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ─── TYPES ─── */
type LetterState = "correct" | "present" | "absent" | "empty" | "filled";
type GameStatus = "playing" | "won" | "lost";

interface GuessRow {
  letters: string[];
  states: LetterState[];
  submitted: boolean;
}

interface GameState {
  guesses: GuessRow[];
  currentRow: number;
  currentCol: number;
  status: GameStatus;
  date: string;
}

interface WordData {
  word: string;
  yesterday: string;
  date: string;
  secondsUntilNext: number;
}

/* ─── CONSTANTS ─── */
const ROWS = 6;
const COLS = 5;
const STORAGE_KEY = "glosdle_state_v1";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

/* ─── HELPERS ─── */
function emptyRow(): GuessRow {
  return {
    letters: Array(COLS).fill(""),
    states: Array(COLS).fill("empty"),
    submitted: false,
  };
}

function emptyGame(date: string): GameState {
  return {
    guesses: Array.from({ length: ROWS }, emptyRow),
    currentRow: 0,
    currentCol: 0,
    status: "playing",
    date,
  };
}

function evaluateGuess(guess: string[], word: string): LetterState[] {
  const result: LetterState[] = Array(COLS).fill("absent");
  const wordArr = word.toUpperCase().split("");
  const guessArr = [...guess];
  const wordCount: Record<string, number> = {};

  // Räkna bokstäver i svaret
  for (const ch of wordArr) {
    wordCount[ch] = (wordCount[ch] || 0) + 1;
  }

  // Första pass: markera gröna
  for (let i = 0; i < COLS; i++) {
    if (guessArr[i] === wordArr[i]) {
      result[i] = "correct";
      wordCount[wordArr[i]]--;
    }
  }

  // Andra pass: markera gula
  for (let i = 0; i < COLS; i++) {
    if (result[i] === "correct") continue;
    const ch = guessArr[i];
    if (wordCount[ch] && wordCount[ch] > 0) {
      result[i] = "present";
      wordCount[ch]--;
    }
  }

  return result;
}

function buildKeyStates(
  guesses: GuessRow[]
): Record<string, LetterState> {
  const priority: Record<LetterState, number> = {
    correct: 3,
    present: 2,
    absent: 1,
    filled: 0,
    empty: 0,
  };
  const map: Record<string, LetterState> = {};

  for (const row of guesses) {
    if (!row.submitted) continue;
    for (let i = 0; i < COLS; i++) {
      const letter = row.letters[i];
      const state = row.states[i];
      if (!letter) continue;
      const current = map[letter];
      if (!current || priority[state] > priority[current]) {
        map[letter] = state;
      }
    }
  }
  return map;
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

/* ─── TOAST HOOK ─── */
function useToast() {
  const [toasts, setToasts] = useState<{ id: number; msg: string }[]>([]);
  const counter = useRef(0);

  const show = useCallback((msg: string) => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  }, []);

  return { toasts, show };
}

/* ─── MAIN COMPONENT ─── */
export default function GamePage() {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [game, setGame] = useState<GameState | null>(null);
  const [shakingRow, setShakingRow] = useState<number | null>(null);
  const [flippingRow, setFlippingRow] = useState<number | null>(null);
  const [flippingStates, setFlippingStates] = useState<LetterState[]>([]);
  const [bouncingRow, setBouncingRow] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [validWords, setValidWords] = useState<Set<string>>(new Set());
  const { toasts, show: showToast } = useToast();

  /* ── Ladda ordlista ── */
  useEffect(() => {
    import("@/lib/words").then(({ VALID_GUESSES }) => {
      setValidWords(VALID_GUESSES);
    });
  }, []);

  /* ── Hämta dagens ord från API ── */
  useEffect(() => {
    fetch("/api/word")
      .then((r) => r.json())
      .then((data: WordData) => {
        setWordData(data);
        setCountdown(data.secondsUntilNext);

        // Ladda eller initiera spelstate
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            const parsed: GameState = JSON.parse(saved);
            // Om sparat datum stämmer med idag – återställ spelet
            if (parsed.date === data.date) {
              setGame(parsed);
              // Visa resultatmodal om spelet är klart
              if (parsed.status !== "playing") {
                setTimeout(() => setShowResultModal(true), 500);
              }
              return;
            }
          } catch {
            // Om JSON är trasig, börja om
          }
        }
        // Nytt spel
        setGame(emptyGame(data.date));
      })
      .catch(() => {
        // Fallback om API inte svarar
        const today = new Date().toISOString().split("T")[0];
        setGame(emptyGame(today));
        showToast("Kunde inte hämta dagens ord – försök ladda om sidan.");
      });
  }, [showToast]);

  /* ── Spara state i localStorage ── */
  useEffect(() => {
    if (game) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
    }
  }, [game]);

  /* ── Countdown-timer ── */
  useEffect(() => {
    if (!countdown) return;
    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  /* ── Tangentbordsinput ── */
  const handleKey = useCallback(
    (key: string) => {
      if (!game || !wordData) return;
      if (game.status !== "playing") return;
      if (flippingRow !== null) return; // Vänta tills flip-animation är klar

      const upperKey = key.toUpperCase();

      if (upperKey === "ENTER") {
        submitGuess();
        return;
      }

      if (upperKey === "BACKSPACE" || upperKey === "⌫") {
        setGame((prev) => {
          if (!prev) return prev;
          if (prev.currentCol === 0) return prev;
          const newGuesses = prev.guesses.map((r, i) =>
            i === prev.currentRow
              ? {
                  ...r,
                  letters: r.letters.map((l, j) =>
                    j === prev.currentCol - 1 ? "" : l
                  ),
                  states: r.states.map((s, j) =>
                    j === prev.currentCol - 1 ? "empty" : s
                  ) as LetterState[],
                }
              : r
          );
          return { ...prev, guesses: newGuesses, currentCol: prev.currentCol - 1 };
        });
        return;
      }

      // Bokstavsknapp
      const isLetter = /^[A-ZÅÄÖ]$/.test(upperKey);
      if (!isLetter) return;

      setGame((prev) => {
        if (!prev) return prev;
        if (prev.currentCol >= COLS) return prev;
        const newGuesses = prev.guesses.map((r, i) =>
          i === prev.currentRow
            ? {
                ...r,
                letters: r.letters.map((l, j) =>
                  j === prev.currentCol ? upperKey : l
                ),
                states: r.states.map((s, j) =>
                  j === prev.currentCol ? "filled" : s
                ) as LetterState[],
              }
            : r
        );
        return { ...prev, guesses: newGuesses, currentCol: prev.currentCol + 1 };
      });
    },
    [game, wordData, flippingRow] // eslint-disable-line
  );

  /* ── Skicka gissning ── */
  const submitGuess = useCallback(() => {
    if (!game || !wordData) return;
    const row = game.guesses[game.currentRow];
    const guess = row.letters.join("");

    // Validering: 5 bokstäver
    if (guess.length < COLS) {
      showToast("För kort – fyll i alla 5 bokstäver!");
      setShakingRow(game.currentRow);
      setTimeout(() => setShakingRow(null), 600);
      return;
    }

    // Validering: finns i ordlistan
    if (validWords.size > 0 && !validWords.has(guess)) {
      showToast("Okänt ord – försök igen!");
      setShakingRow(game.currentRow);
      setTimeout(() => setShakingRow(null), 600);
      return;
    }

    // Beräkna resultat
    const newStates = evaluateGuess(row.letters, wordData.word);
    const isWin = newStates.every((s) => s === "correct");
    const isLast = game.currentRow === ROWS - 1;

    // Starta flip-animation
    setFlippingRow(game.currentRow);
    setFlippingStates(newStates);

    // Efter flip är klar – uppdatera state
    setTimeout(() => {
      setFlippingRow(null);
      setFlippingStates([]);

      setGame((prev) => {
        if (!prev) return prev;
        const newGuesses = prev.guesses.map((r, i) =>
          i === prev.currentRow
            ? { ...r, letters: row.letters, states: newStates, submitted: true }
            : r
        );

        let newStatus: GameStatus = "playing";
        if (isWin) newStatus = "won";
        else if (isLast) newStatus = "lost";

        return {
          ...prev,
          guesses: newGuesses,
          currentRow: prev.currentRow + 1,
          currentCol: 0,
          status: newStatus,
        };
      });

      // Vinst/förlust-reaktioner
      if (isWin) {
        setBouncingRow(game.currentRow);
        const winMessages = [
          "Lysande! 🌟",
          "Fantastiskt! 🎉",
          "Briljant! ✨",
          "Mästerligt! 👑",
          "Imponerande! 🔥",
          "Klockrent! 💎",
        ];
        showToast(winMessages[game.currentRow] || "Bra jobbat!");
        setTimeout(() => {
          setBouncingRow(null);
          setShowResultModal(true);
        }, 1200);
      } else if (isLast && !isWin) {
        showToast(`Rätt svar: ${wordData.word}`);
        setTimeout(() => setShowResultModal(true), 1500);
      }
    }, COLS * 120 + 200); // Flip tar COLS * 120ms
  }, [game, wordData, validWords, showToast]);

  /* ── Fysiskt tangentbord ── */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "Enter") handleKey("ENTER");
      else if (e.key === "Backspace") handleKey("BACKSPACE");
      else if (/^[a-zA-ZåäöÅÄÖ]$/.test(e.key)) handleKey(e.key);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKey]);

  /* ── Compute key states ── */
  const keyStates = game ? buildKeyStates(game.guesses) : {};

  /* ── Render cell ── */
  const renderCell = (
    rowIndex: number,
    colIndex: number
  ) => {
    if (!game) return null;
    const row = game.guesses[rowIndex];
    const letter = row.letters[colIndex];
    const isFlipping = flippingRow === rowIndex;
    const isBouncing = bouncingRow === rowIndex;

    let cellState: LetterState = row.states[colIndex];

    // Under flip-animation: använd temporärt "filled" tills flippen avslöjar färgen
    let animClass = "";
    if (isFlipping) {
      animClass = "flip";
      cellState = "filled";
    } else if (row.submitted) {
      cellState = row.states[colIndex];
    }

    if (isBouncing) animClass = "bounce";

    return (
      <div
        key={colIndex}
        className={`cell ${cellState !== "empty" ? cellState : ""} ${animClass}`}
        style={
          isFlipping || isBouncing
            ? { animationDelay: `${colIndex * 120}ms` }
            : undefined
        }
      >
        {letter}
      </div>
    );
  };

  /* ─── LOADING ─── */
  if (!game || !wordData) {
    return (
      <div className="game-wrapper" style={{ justifyContent: "center" }}>
        <div style={{
          color: "rgba(245,240,232,0.5)",
          fontFamily: "var(--font-game)",
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "40vh",
        }}>
          Laddar…
        </div>
      </div>
    );
  }

  const isGameOver = game.status !== "playing";

  /* ─── RENDER ─── */
  return (
    <div className="game-wrapper">
      {/* ── HEADER ── */}
      <header className="game-header">
        {/* Tom platshållare vänster för symmetri */}
        <div style={{ width: 38 }} />

        <h1 className="header-logo">GLOSDLE</h1>

        {/* Info-knapp till höger */}
        <button
          className="icon-btn"
          onClick={() => setShowModal(true)}
          aria-label="Spelregler"
          title="Spelregler"
        >
          ?
        </button>
      </header>

      {/* ── LAYOUT: spelbox + sidoknapp ── */}
      <div className="play-area">

        {/* Tubdle-knapp: floating till vänster på desktop, under footer på mobil */}
        <div className="tubdle-sidebar">
          <a
            href="https://tubdle.se"
            target="_blank"
            rel="noopener noreferrer"
            className="tubdle-btn"
            aria-label="Spela Tubdle"
          >
            <svg
              className="tubdle-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="10" rx="2.5" fill="currentColor" opacity="0.9"/>
              <rect x="5" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
              <rect x="10" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
              <rect x="15" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
              <circle cx="7" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
              <circle cx="17" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
              <line x1="12" y1="7" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <line x1="9" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            </svg>
            <span className="tubdle-label">SPELA TUBDLE</span>
          </a>
        </div>

        {/* ── GAME PANEL ── */}
        <div className="play-area-main">
          <main className="game-panel">
            {/* Toast-notiser */}
            <div className="toast-container">
              {toasts.map((t) => (
                <div key={t.id} className="toast">{t.msg}</div>
              ))}
            </div>

            {/* Status */}
            {isGameOver && (
              <div className={`status-message ${game.status}`}>
                {game.status === "won"
                  ? `Du klarade det på rad ${game.currentRow}! 🎉`
                  : `Rätt svar var: ${wordData.word}`}
              </div>
            )}

            {/* Grid */}
            <div className="grid-container">
              {game.guesses.map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid-row ${shakingRow === rowIndex ? "shake" : ""}`}
                >
                  {Array.from({ length: COLS }, (_, colIndex) =>
                    renderCell(rowIndex, colIndex)
                  )}
                </div>
              ))}
            </div>

            {/* Virtuellt tangentbord */}
            <div className="keyboard-container">
              {KEYBOARD_ROWS.map((row, ri) => (
                <div key={ri} className="keyboard-row">
                  {row.map((key) => {
                    const state = keyStates[key];
                    const isWide = key === "ENTER" || key === "⌫";
                    return (
                      <button
                        key={key}
                        className={`key ${isWide ? "wide" : ""} ${state || ""}`}
                        onClick={() => handleKey(key)}
                        aria-label={key === "⌫" ? "Radera" : key === "ENTER" ? "Skicka" : key}
                      >
                        {key === "ENTER" ? "ENT" : key}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </main>

          {/* ── FOOTER ── */}
          <footer className="game-footer">
            <div className="footer-card">
              <div>
                <div className="footer-label">Gårdagens ord</div>
                <div className="footer-value">{wordData.yesterday}</div>
              </div>
              <div className="footer-divider" />
              <div style={{ textAlign: "right" }}>
                <div className="footer-label">Nästa ord om</div>
                <div className="footer-value" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {formatTime(countdown)}
                </div>
              </div>
            </div>

            {/* Tubdle-knapp på mobil (visas under footer) */}
            <div className="tubdle-mobile">
              <a
                href="https://tubdle.se"
                target="_blank"
                rel="noopener noreferrer"
                className="tubdle-btn"
                aria-label="Spela Tubdle"
              >
                <svg
                  className="tubdle-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="20" height="10" rx="2.5" fill="currentColor" opacity="0.9"/>
                  <rect x="5" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <rect x="10" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <rect x="15" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <circle cx="7" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
                  <circle cx="17" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
                  <line x1="12" y1="7" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  <line x1="9" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                </svg>
                <span className="tubdle-label">SPELA TUBDLE</span>
              </a>
            </div>
          </footer>
        </div>{/* /play-area-main */}
      </div>{/* /play-area */}

      {/* ── HJÄLP-MODAL ── */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Stäng"
            >
              ✕
            </button>
            <h2 className="modal-title">Hur man spelar</h2>

            <p style={{
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "18px"
            }}>
              Gissa det hemliga svenska ordet på <strong style={{ color: "var(--text-primary)" }}>5 bokstäver</strong>.
              Du har <strong style={{ color: "var(--text-primary)" }}>6 försök</strong> på dig.
              Ett nytt ord varje dag vid midnatt.
            </p>

            <div className="modal-divider" />

            <div className="rule-item">
              <div className="rule-chip correct">R</div>
              <p className="rule-text">
                <strong style={{ color: "var(--text-primary)" }}>Grön</strong> – Bokstaven finns i ordet och är på <em>rätt plats</em>.
              </p>
            </div>
            <div className="rule-item">
              <div className="rule-chip present">A</div>
              <p className="rule-text">
                <strong style={{ color: "var(--text-primary)" }}>Gul</strong> – Bokstaven finns i ordet men är på <em>fel plats</em>.
              </p>
            </div>
            <div className="rule-item">
              <div className="rule-chip absent">F</div>
              <p className="rule-text">
                <strong style={{ color: "var(--text-primary)" }}>Grå</strong> – Bokstaven <em>finns inte</em> med i det hemliga ordet.
              </p>
            </div>

            <div className="modal-divider" />

            <p style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              textAlign: "center",
              letterSpacing: "0.04em"
            }}>
              Dina gissningar sparas automatiskt.<br />
              Inkluderar Å, Ä och Ö på tangentbordet.
            </p>
          </div>
        </div>
      )}

      {/* ── RESULTAT-MODAL ── */}
      {showResultModal && (
        <div className="modal-overlay" onClick={() => setShowResultModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowResultModal(false)}
              aria-label="Stäng"
            >
              ✕
            </button>

            <h2 className="modal-title">
              {game.status === "won" ? "🎉 Bra jobbat!" : "😔 Nästa gång!"}
            </h2>

            {game.status === "won" ? (
              <p style={{
                textAlign: "center",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                marginBottom: "20px"
              }}>
                Du löste dagens GLOSDLE på{" "}
                <strong style={{ color: "var(--correct)", fontSize: "1.2rem" }}>
                  {game.currentRow}
                </strong>{" "}
                {game.currentRow === 1 ? "försök" : "försök"}!
              </p>
            ) : (
              <p style={{
                textAlign: "center",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                marginBottom: "20px"
              }}>
                Rätt svar var:{" "}
                <strong style={{ color: "#f87171", fontSize: "1.3rem", letterSpacing: "0.08em" }}>
                  {wordData.word}
                </strong>
              </p>
            )}

            <div className="modal-divider" />

            {/* Miniatyr av spelresultatet */}
            <div style={{ marginBottom: "20px" }}>
              {game.guesses
                .filter((r) => r.submitted)
                .map((row, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: "4px",
                    justifyContent: "center",
                    marginBottom: "4px"
                  }}>
                    {row.states.map((state, j) => (
                      <div key={j} style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "4px",
                        background:
                          state === "correct" ? "var(--correct)" :
                          state === "present" ? "var(--present)" :
                          "var(--absent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}>
                        {row.letters[j]}
                      </div>
                    ))}
                  </div>
                ))}
            </div>

            <div className="modal-divider" />

            {/* Nästa ord */}
            <div style={{ textAlign: "center" }}>
              <div className="footer-label" style={{ marginBottom: "6px" }}>
                Nästa ord om
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.05em",
                fontVariantNumeric: "tabular-nums",
              }}>
                {formatTime(countdown)}
              </div>
            </div>

            <div className="modal-divider" />

            {/* Tubdle-promo */}
            <div style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                marginBottom: "12px",
                letterSpacing: "0.02em",
                lineHeight: 1.5,
              }}>
                Kan du gissa dagens tunnelbanestation?
              </p>
              <a
                href="https://tubdle.se"
                target="_blank"
                rel="noopener noreferrer"
                className="tubdle-btn"
                style={{ display: "inline-flex" }}
              >
                <svg
                  className="tubdle-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="20" height="10" rx="2.5" fill="currentColor" opacity="0.9"/>
                  <rect x="5" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <rect x="10" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <rect x="15" y="9.5" width="4" height="3.5" rx="1" fill="rgba(10,14,26,0.7)"/>
                  <circle cx="7" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
                  <circle cx="17" cy="18.5" r="2" fill="currentColor" opacity="0.75"/>
                  <line x1="12" y1="7" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  <line x1="9" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                </svg>
                <span className="tubdle-label">SPELA TUBDLE</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}