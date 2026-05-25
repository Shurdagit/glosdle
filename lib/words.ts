// Svenska 5-bokstavsord – ordlista för Svenska Wordle
// Innehåller både gissningsbara ord (ANSWERS) och giltiga gissningsord (VALID_GUESSES)

export const ANSWERS: string[] = [
  "ABORT", "AFFÄR", "AFTON", "AGERA", "AGENT", "AKTIE", "AKTIV", "AKTÖR", "ALARM", "ALBUM",
  "ALERT", "ALIBI", "ALLRA", "ALLVAR", "ALPIN", "ALTAN", "ANBUD", "ANDAS", "ANDEL", "ANDRA",
  "ANING", "ANKAR", "ANKEL", "ANLAG", "ANNAN", "ANNAT", "ANTAL", "ANTIK", "APRIL", "APTIT",
  "AREAL", "ARENA", "ARKIV", "ARMOD", "ARTIG", "ARTON", "ARTÄR", "ASIAT", "ASKEN", "ASKET",
  "ASTER", "ASTMA", "ATLAS", "ATLET", "AVGAS", "AVSKY", "AVTAL", "AVUND", "AXELN", "AXLAR",
  "BACKA", "BACKE", "BACON", "BAGGE", "BAKIS", "BAKOM", "BAKRE", "BAKÅT", "BALJA", "BANAL",
  "BANAN", "BANDY", "BANKA", "BARNS", "BARON", "BARSK", "BASTU", "BASUN", "BEBIS", "BEFÄL",
  "BEHAG", "BEHOV", "BEIGE", "BERÖM", "BESÖK", "BETYG", "BEVIS", "BIBEL", "BILDA", "BINDA",
  "BINGO", "BINÄR", "BITAR", "BITSK", "BJUDA", "BJÖRK", "BJÖRN", "BLAND", "BLANK", "BLEKA",
  "BLICK", "BLIND", "BLINK", "BLIXT", "BLOCK", "BLOND", "BLOSS", "BLUES", "BLUFF", "BLÖJA",
  "BLÖTA", "BOCKA", "BOLAG", "BONDE", "BONUS", "BORDE", "BORST", "BORTA", "BRAND", "BRANT",
  "BRASA", "BREDA", "BREDD", "BRIST", "BRITT", "BROMS", "BRONS", "BROTT", "BRUNN", "BRUNT",
  "BRYGD", "BRYTA", "BRÅKA", "BRÅTE", "BRÄDE", "BRÄNN", "BRÖST", "BUKEN", "BULLE", "BUNKE",
  "BUREN", "BUSIG", "BUSKE", "BUTIK", "BYGGA", "BYGGE", "BYXOR", "BÄCKA", "BÄGGE", "BÄLTA",
  "BÄNKA", "BÄSTA", "BÄBIS", "BÄLTE", "BÄVER", "BÖDEL", "BÖRDA", "BÖRJA", "BÖSSA", "BÖTER",
  "CELLO", "CHANS", "CHARK", "CHARM", "CHECK", "CHIPS", "CHOCK", "CIDER", "CIRKA", "CITAT",
  "CIVIL", "CLOWN", "CURRY", "CYKEL", "CYKLA", "DAGAR", "DAGGA", "DALAR", "DALEN", "DANSA",
  "DATOR", "DATUM", "DEBUT", "DELAR", "DELTA", "DEMON", "DENNA", "DERAS", "DESSA", "DESTO",
  "DETTA", "DIKTA", "DIMMA", "DISKO", "DJUPA", "DJUPT", "DJÄRV", "DOCKA", "DOFTA", "DOLDA",
  "DOMÄN", "DRAKE", "DRAMA", "DRICK", "DRIFT", "DRINK", "DRIVA", "DROPP", "DRUVA", "DRYCK",
  "DRYGT", "DRÄKT", "DRÖJA", "DRÖMA", "DRÖMT", "DUKAT", "DUMMA", "DUMPA", "DUNKA", "DUSCH",
  "DVÄRG", "DYKER", "DYNGA", "DYRKA", "DÅLIG", "DÄMPA", "EFTER", "ELAKA", "ELDAR", "ELFTE",
  "ELLER", "ENKEL", "ENKLA", "ENORM", "ENSAM", "ENTRÉ", "EPISK", "EXAKT", "EXTRA", "FABEL",
  "FACIT", "FADER", "FAKTA", "FALLA", "FALSK", "FARSA", "FASAD", "FATAL", "FATTA", "FEBER",
  "FEMMA", "FEMTE", "FESTA", "FICKA", "FIGUR", "FIKON", "FILMA", "FINAL", "FINNA", "FINNS",
  "FINSK", "FISKA", "FISKE", "FJORD", "FJÄLL", "FJÄRR", "FLERA", "FLICK", "FLINK", "FLOCK",
  "FLORA", "FLUGA", "FLYGA", "FLYKT", "FLÄCK", "FLÄKT", "FLÄSK", "FLÖDE", "FLÖJT", "FOKUS",
  "FOLIE", "FORUM", "FOTON", "FOTOT", "FRACK", "FRAKT", "FRANK", "FRISK", "FRONT", "FROST",
  "FRUGA", "FRUKT", "FRÄCK", "FRÄSA", "FRÅGA", "FULLT", "FUNKA", "FUSKA", "FYLLA", "FYSIK",
  "FÅGEL", "FÅNGA", "FÅNGE", "FÅNIG", "FÄKTA", "FÄLLA", "FÄRSK", "FÖLJD", "FÖRBI", "FÖRRA",
  "FÖRST", "FÖRUT", "GALEN", "GALGE", "GAMLA", "GARVA", "GENOM", "GENRE", "GENUS", "GEVÄR",
  "GIFTA", "GILLA", "GIRIG", "GISSA", "GIVEN", "GIVIT", "GJORT", "GLADA", "GLANS", "GLASS",
  "GLATT", "GLIMT", "GLÖGG", "GLÖMT", "GNÄLL", "GODIS", "GRABB", "GRANN", "GREPP", "GRILL",
  "GRIND", "GRIPA", "GRODA", "GRUND", "GRUPP", "GRYTA", "GRÅTA", "GRÅTT", "GRÄNS", "GRÖNA",
  "GRÖNT", "GUBBE", "GUIDA", "GUIDE", "GUMMA", "GUMMI", "GUNGA", "GURKA", "GÄDDA", "GÄRNA",
  "HACKA", "HAGEL", "HALKA", "HALLÅ", "HALVA", "HAMNA", "HAMRA", "HASTA", "HATAR", "HAVRE",
  "HEDER", "HELIG", "HELST", "HEMMA", "HEMSK", "HENNE", "HERRE", "HETER", "HETTA", "HIMLA",
  "HINNA", "HISSA", "HITTA", "HJORT", "HJÄLM", "HJÄLP", "HJÄRN", "HJÄRT", "HOBBY", "HONOM",
  "HOPPA", "HOSTA", "HOTAD", "HUMLA", "HUMOR", "HURRA", "HUSEN", "HUSET", "HUVUD", "HYFSA",
  "HYLLA", "HÅLLA", "HÅRDA", "HÄLSA", "HÄMND", "HÄNGA", "HÖGER", "HÖGRE", "HÖGST", "HÖRNA",
  "IDIOT", "IFALL", "IFRÅN", "IGÅNG", "IHJÄL", "IKAPP", "ILSKA", "IMMUN", "INFÖR", "INGEN",
  "INGET", "INGÅR", "INKÖP", "INNAN", "INSER", "INSJÖ", "INSÅG", "INTYG", "IRONI", "ISBIT",
  "ISHAV", "ISTID", "JACKA", "JAGAR", "JAPAN", "JEANS", "JOBBA", "JOGGA", "JOKER", "JUBEL",
  "JUBLA", "JÄKLA", "JÄMNA", "JÄRNA", "KAFFE", "KAKAO", "KALLA", "KAMIN", "KANAL", "KANEL",
  "KANIN", "KANNA", "KANON", "KARTA", "KASSA", "KASSE", "KASTA", "KAVAJ", "KAVLA", "KAXIG",
  "KEDJA", "KILLE", "KINES", "KIOSK", "KLACK", "KLAGA", "KLART", "KLASS", "KLICK", "KLIPP",
  "KLOAK", "KLOKA", "KLOSS", "KLUBB", "KLUMP", "KLÄDD", "KNAPP", "KNARK", "KNEKT", "KNIPA",
  "KNYTA", "KOFTA", "KOFOT", "KOMMA", "KONST", "KONTO", "KOPIA", "KORSA", "KORTA", "KOSTA",
  "KRAFT", "KRAGE", "KRAMP", "KRANS", "KRETS", "KRING", "KRISA", "KRITA", "KROCK", "KRONA",
  "KROPP", "KRUKA", "KRYPA", "KRÄKA", "KRÄVA", "KUDDE", "KULLE", "KUNDE", "KUNNA", "KURVA",
  "KUSIN", "KVARG", "KVARN", "KVART", "KVAST", "KVICK", "KVIST", "KVÄLL", "KYLAN", "KYRKA",
  "KÄLLA", "KÄMPA", "KÄMPE", "KÄNGA", "KÄNNA", "KÄPP", "KÄRNA", "KÖPTE", "KÖRDE", "KÖPER",
  "LAGER", "LAGOM", "LAGRA", "LAKAN", "LAMPA", "LAPPA", "LASER", "LASTA", "LEDER", "LEDIG",
  "LEKEN", "LEJON", "LEKER", "LEVER", "LIGAN", "LIKNA", "LILJA", "LIMPA", "LINJE", "LISTA",
  "LITEN", "LITER", "LITET", "LJUGA", "LJUST", "LOGIK", "LOJAL", "LOKAL", "LOPPA", "LUCKA",
  "LUGNA", "LUKTA", "LUNCH", "LUNGA", "LUNKA", "LURAD", "LURAR", "LYCKA", "LYFTA", "LYKTA",
  "LYRIK", "LÅNGA", "LÅNGT", "LÄDER", "LÄGRE", "LÄGST", "LÄMNA", "LÄNGD", "LÄNGE", "LÄNGS",
  "LÄNKA", "LÄTTA", "LÖFTE", "LÖNAR", "LÖPER", "LÖSEN", "LÖSER", "MACKA", "MAGER", "MAJOR",
  "MAMMA", "MANKE", "MANUS", "MASSA", "MATCH", "MATEN", "MATTA", "MEDAN", "MEDEL", "MEJLA",
  "MELON", "MENAR", "MERIT", "METER", "METOD", "MIDJA", "MIKRO", "MILDA", "MILJÖ", "MINNA",
  "MINNE", "MINNS", "MINST", "MINUS", "MINUT", "MISSA", "MJUKA", "MJUKT", "MJÖLK", "MOBBA",
  "MOBIL", "MODER", "MODIG", "MODUL", "MOGEN", "MOLNA", "MOPED", "MORAL", "MOROT", "MORSA",
  "MOTIV", "MOTOR", "MUSIK", "MYGGA", "MYTEN", "MÄKTA", "MÄNGD", "MÄRKE", "MÅNAD", "MÅNGA",
  "MÅSTE", "MÖBEL", "MÖTET", "MÖTER", "NACKE", "NAGEL", "NAIVA", "NAKEN", "NAKNA", "NALLE",
  "NATUR", "NAVEL", "NEDAN", "NEDRE", "NETTO", "NINJA", "NJURE", "NORSK", "NUDEL", "NUMRA",
  "NYANS", "NYHET", "NYTTA", "NÅDDE", "NÅGON", "NÅGOT", "NÅGRA", "NÄMNA", "NÄMND", "NÄSAN",
  "NÄSTA", "OCEAN", "OCKSÅ", "ODJUR", "OFFER", "OFFRA", "OGIFT", "OGRÄS", "OHYRA", "OLIKA",
  "OMBUD", "ONANI", "OPERA", "ORDEN", "ORDER", "OREDA", "ORENA", "ORGAN", "ORGEL", "ORKAN",
  "ORMEN", "ORSAK", "OSTEN", "PACKA", "PAKET", "PANEL", "PANIK", "PANNA", "PAPPA", "PARTI",
  "PARTY", "PASTA", "PAUSA", "PENIS", "PENNA", "PIANO", "PILOT", "PIZZA", "PLAGG", "PLANA",
  "PLANK", "PLAST", "PLATT", "PLUGG", "POJKE", "POKAL", "POKER", "POLIS", "PONNY", "PORTO",
  "POÄNG", "PRATA", "PRESS", "PRINS", "PRISA", "PROVA", "PRÄST", "PSYKE", "PUDEL", "PULKA",
  "PUMPA", "PUNKT", "PUSTA", "PUTSA", "PÄRLA", "PÄRON", "RADIO", "RAKET", "RAMLA", "RAPPA",
  "REDAN", "REGEL", "REGIM", "REGNA", "REJÄL", "RENAR", "RESER", "RETUR", "RIMMA", "RINGA",
  "RITAR", "ROBOT", "ROCKA", "ROLIG", "ROMAN", "RUMPA", "RUSAR", "RUSKA", "RUTIN", "RYKTE",
  "RYMMA", "RÄCKA", "RÄDDA", "RÄKNA", "RÄNTA", "RÄTTA", "RÄVEN", "RÖKER", "RÖSTA", "SADEL",
  "SAKER", "SAKNA", "SAKTA", "SALDO", "SALUT", "SALVA", "SAMBO", "SAMLA", "SAMMA", "SANKT",
  "SATAN", "SATSA", "SEDAN", "SEDEL", "SEGEL", "SEGER", "SEKEL", "SENAP", "SENAT", "SERIE",
  "SERVA", "SIDAN", "SIDEN", "SIKTA", "SIKTE", "SILKE", "SIMMA", "SINNE", "SIRAP", "SISTA",
  "SITTA", "SJUKA", "SJUKT", "SJÄLV", "SKADA", "SKALA", "SKARP", "SKATT", "SKOLA", "SKOTT",
  "SKYLT", "SKÄGG", "SKÄLL", "SKÄMT", "SKÖNA", "SKÖNT", "SLOTT", "SLUMP", "SLUTA", "SMART",
  "SMINK", "SNABB", "SOFFA", "SOPPA", "SPARK", "SPELA", "SPORT", "SPRIT", "STARK", "STIGA",
  "STOCK", "STOLT", "STORA", "STORM", "STORT", "STUGA", "STUND", "STÄDA", "SUMMA", "SVARA",
  "SVART", "SVETT", "SVÄRD", "SÅDAN", "SÄGER", "SÄLJA", "SÄNKA", "SÄTTA", "SÖDER", "SÖKER",
  "SÖMN", "TACKA", "TAGGA", "TAKET", "TALAR", "TAPPA", "TESTA", "TIDIG", "TIMME", "TITTA",
  "TJOCK", "TJUGO", "TRYCK", "TRÄNA", "TRÖJA", "TRÖTT", "TUSAN", "TVEKA", "TYCKA", "TÅGET",
  "TÅRAR", "TÄCKA", "TÄNKA", "TÖMMA", "UNDER", "VAKEN", "VAKNA", "VAPEN", "VARAN", "VARIT",
  "VARNA", "VECKA", "VILJA", "VILKA", "VINKA", "VISST", "VÄCKA", "VÄGEN", "VÄLJA", "VÄSKA",
  "VÄXLA", "ÅLDER", "ÅRETS", "ÄLSKA", "ÄNDRA", "ÄPPLE", "ÖNSKA", "ÖPPEN", "ÖSTER", "ÖVRIG"

];

// Rensa duplicerade och ogiltiga ord
const cleanedAnswers = [...new Set(ANSWERS.filter(w => w.length === 5))];

export const DAILY_WORDS: string[] = cleanedAnswers;

// Alla giltiga gissningsord (inkluderar svarsorden)
export const VALID_GUESSES: Set<string> = new Set([
  ...DAILY_WORDS,
  // Extra giltiga svenska ord som kan gissas men inte är svar
"ACCIS", "ADLAR", "AGNAR", "AKRYL", "AKTER", "ALBAN", "ALIKA", "ALKOV", "AMPEL", "ANSAR",
  "ANSTÅ", "AORTA", "APART", "ARSEL", "ARSLE", "ASAR", "AVART", "AVBÖN", "AVENY", "AVGER",
  "AVGÅR", "AVGÖR", "AVLAR", "AVLAT", "AVLED", "AVSER", "AVSÅG", "AVTAR", "AXION", "BAMBY",
  "BANAR", "BANER", "BASAR", "BASIS", "BASTA", "BATIK", "BEBOR", "BEDER", "BEFÄR", "BEGÅR",
  "BENAR", "BENIG", "BERSÅ", "BERÖR", "BETAR", "BEVÅG", "BIDAR", "BILAR", "BINGE", "BISAK",
  "BITER", "BITTI", "BLACK", "BLASK", "BLAST", "BLECK", "BLOTT", "BLUND", "BLYGD", "BLASA",
  "BOBIN", "BOETT", "BOKAR", "BONAD", "BOHAG", "BOHEM", "BONAR", "BOOTS", "BOREN", "BOTAR",
  "BOXAS", "BRAGD", "BRANN", "BRASS", "BRAST", "BRINK", "BRITS", "BRYNE", "BRYSK", "BRÄDA",
  "BRÄDD", "BRÅCK", "BUKIG", "BULLA", "BURIT", "BUSAR", "BYGEL", "BYLTE", "BYTER", "BÄRSA",
  "BÄVAN", "BÄVAR", "BÖJER", "BÖKIG", "BÖLAR", "BÖLJA", "BÖVEL", "CERAT", "CHOKE", "CLIPS",
  "CRAWL", "CREDO", "CYSTA", "DABBA", "DADEL", "DAGAS", "DAGER", "DAGIS", "DANAR", "DANSK",
  "DEBET", "DEGAR", "DEGEL", "DEKAL", "DEKIS", "DEKOR", "DENIM", "BENIM", "DEVIS", "DIGER",
  "DILLE", "DISIG", "DITAT", "DOLDE", "DOPAR", "DRACK", "DRAGG", "DRESS", "DRILL", "DRIVE",
  "DUELL", "DUETT", "DUGER", "DUKAR", "DUNGE", "DVALA", "DYLIK", "DÄRAN", "DÄROM", "DÄRPÅ",
  "DÄVEN", "DÅSAR", "DÅSIG", "DÖDAR", "DÖMER", "DÖPER", "EGGAR", "EJDER", "EKSEN", "ELOGE",
  "EMALJ", "ENHET", "ENKÄT", "ENRUM", "ENSAK", "ENVAR", "ENVIS", "ENZYM", "ERFAR", "ETAPP",
  "ETISK", "ETSAR", "EXTAS", "FADÄS", "FAGER", "FAMÖS", "FANNS", "FANER", "FARIN", "FARIT",
  "FASAN", "FASON", "FASTA", "FASAR", "FAUNA", "FAVÖR", "FEJAR", "FELAR", "FERIE", "FETMA",
  "FIBER", "FIKAR", "FIKUS", "FILAR", "FILUR", "FINKA", "FINNE", "FIRAR", "FIRMA", "FISER",
  "FITTA", "FIXAR", "FJANT", "FJÄRD", "FJÄRT", "FJÄSK", "FLABB", "FLACK", "FLAGA", "FLAGG",
  "FLINT", "FLIRT", "FLISA", "FLOTT", "FLUOR", "FOAJE", "FLÄNG", "FLÄRD", "FLÄTA", "FLÖRT",
  "FLÖTE", "FNASK", "FNATT", "FODER", "FOGAR", "FOGDE", "FOTAR", "FRANS", "FRIAR", "FRIST",
  "FRÖJD", "FULLO", "FURIR", "FYLLD", "FYLLO", "FÄRDE", "FÄRJA", "FÄRRE", "FÄSTE", "FÖLJE",
  "FÖRTI", "FÖSER", "GAGNA", "GALAX", "GRUVA", "GAPAR", "GARDE", "GASOL", "GAVEL", "GEBIT",
  "GEHÖR", "GEMEN", "GEMÄL", "GETTO", "GIFTE", "GINST", "GIRAR", "GIVER", "GLAPP", "GLOSA",
  "GLUGG", "GLÄNT", "GNABB", "GOSIG", "GOSSE", "GREVE", "GRODD", "GROGG", "GROLL", "GRÄLL",
  "GRÄND", "GUNST", "GÄNGA", "GÖDER", "HABIL", "HAGGA", "HAJAR", "HALAR", "HALVÖ", "HAMBO",
  "HANNE", "HAREM", "HARPA", "HASAR", "HASCH", "HEJAR", "HEKTO", "HETTE", "HICKA", "HINDU",
  "HITOM", "HITRE", "HITAT", "HJORD", "HOLME", "HOTAR", "HUGAD", "HUMAN", "HUMLA", "HUMLE",
  "HURSÅ", "HURTS", "HUSSE", "HYDDA", "HYENA", "HYGGE", "HYLSA", "HYNDA", "HYSCH", "HYSER",
  "HYSKA", "HYTTA", "HYVEL", "HÄDAR", "HÄFTA", "HÄFTE", "HÄKTE", "HÄLFT", "HÄNGE", "HÄPEN",
  "HÄRAD", "HÄRAV", "HÄROM", "HÄRVA", "HÄTSK", "HÄTTA", "HÄVER", "HÅGAD", "HÅNAR", "HÅRIG",
  "HÖJER", "HÖLJE", "IDEAL", "IDIOM", "IDKAR", "IDYLL", "IFATT", "IMAGE", "IMMIG", "INDEX",
  "INGER", "INUTI", "INVAL", "INVID", "INVIT", "IRRAR", "ISARK", "ISBAR", "ISGRÅ", "ISIGA",
  "ISKUB", "ISLAM", "ISMAN", "ISPIK", "ISSJÖ", "ISTER", "IVRA", "IVRIG", "JABBA", "JAFSA",
  "JAGAD", "JAMMA", "JAMSA", "JANKA", "JARLA", "JARRA", "JASA", "JAVAN", "JAZZA", "JEHU",
  "JIDDA", "JIGGA", "JINGO", "JIPPO", "JOCKA", "JODDA", "JODLA", "JOINT", "JOLLE", "KANAR",
  "KANYL", "KAPAR", "KAPPA", "KARAT", "KARDA", "KAVAT", "KAVEL", "KELAR", "KIKAR", "KILAR",
  "KISAR", "KISEL", "KISSE", "KISTA", "KIVAS", "KLADD", "KLAFF", "KLANG", "KLANT", "KLASE",
  "KLAVE", "KLIAR", "KLIMP", "KLUNK", "KLYKA", "KLÅDA", "KNALL", "KNOGE", "KNOPP", "KNORR",
  "KNOTA", "KNOTT", "KNUFF", "KNYCK", "KNYST", "KNYTE", "KNÄAR", "KNÄCK", "KOBBE", "KODAR",
  "KOKAR", "KOLIK", "KOLJA", "KOLLI", "KOLLO", "KOLON", "KOMET", "KORAR", "KOSSA", "KOTTE",
  "KOVAN", "KPIST", "KRAFS", "KRAKE", "KRAMS", "KRASS", "KRETI", "KROAT", "KRUPP", "KRYSS",
  "KRÄKS", "KRÄPP", "KRÅKA", "KUBAN", "KUGGE", "KULEN", "KULÖR", "KUPOL", "KURIR", "KURRA",
  "KUTAR", "KUTYM", "KUVAR", "KUVÖS", "KVARK", "KVIGA", "KVIRR", "KVITT", "KVÄVE", "KVÄVS",
  "KYFFE", "KYLER", "KYLIG", "KYNNE", "KYSSA", "KÅDA", "KÅPA", "KÄFT", "KÄFTA", "KÄGLA",
  "KÄKAR", "KÄLKE", "KÄNDE", "KÄNNS", "KÄRRA", "KÄRVA", "KÄRVE", "KÅSÖR", "KÖLAR", "KÖNAD",
  "KÖRAS", "KÖRDA", "KÖRER", "KÖRIG", "KÖRNA", "LABBA", "LABIL", "LADDA", "LAFSA", "LAGAR",
  "LAGGA", "LAGUN", "LAJVA", "LAKEJ", "LALLA", "LAMMA", "LANAR", "LANGA", "LANKA", "LAPAR",
  "LARMA", "LARVA", "LASAR", "LASSO", "LATER", "LATIN", "LAVIN", "LEGAL", "LEGAT", "LEJER",
  "LEKIS", "LETAR", "LEVAT", "LEVDE", "LIDER", "LIKÖR", "LILLA", "LINNE", "LIPAR", "LIRAR",
  "LIVAD", "LJUNG", "LOBBY", "LOSKA", "LOTTA", "LOVAR", "LUCIA", "LUCKA", "LUDEN", "LUDER",
  "LUNTA", "LURIG", "LUSTA", "LUTAR", "LYDDE", "LYDER", "LYDIG", "LYMFA", "LYNNE", "LYSER",
  "LÄCKA", "LÄKER", "LÄNGA", "LÄRKA", "LÄSÅR", "LÅNAR", "LÖDER", "LÖMSK", "MAJ:T", "MAKAR",
  "MALAJ", "MALÖR", "MANAR", "MANER", "MANET", "MANNA", "MARIG", "MARIN", "MASKA", "MATAR",
  "MATTE", "MATTO", "MEJAR", "MEKAR", "MENED", "MENIG", "MESTA", "METAR", "MIMIK", "MISTE",
  "MISÄR", "MIXER", "MJUGG", "MJÄLL", "MOCKA", "MODEM", "MOLAR", "MORSE", "MORSK", "MOSAR",
  "MOSKÉ", "MOSSA", "MOSSE", "MOTAR", "MOTTO", "MULEN", "MUMIE", "MURAR", "MUTAR", "MYGEL",
  "MYLLA", "MYNTA", "MYSER", "MYSIG", "MYSLI", "MÄTER", "MÅLAR", "MÅNDE", "MÄNNE", "MÖGEL",
  "NAMNE", "NAPPA", "NARIG", "NASAL", "NASSE", "NEDAT", "NEGER", "NEKAR", "NIGER", "NISCH",
  "NISSE", "NOLLA", "NOMAD", "NOSAR", "NOTAM", "NOTIS", "NOVIS", "NUBBE", "NUCKA", "NUMRA",
  "NUNNA", "NUPIT", "NYLLE", "NYLON", "NYPER", "NYPON", "NYSER", "NYVAL", "NÄMEN", "NÄPEN",
  "NÄPPE", "NÄRKE", "NÄSTE", "NÅDIG", "NÄVÄL", "NÖDIG", "NÖTER", "OANAD", "OBLAT", "OBLID",
  "OBLYG", "OBYGD", "OCKER", "ODLAR", "ODAGA", "OENIG", "OENSE", "OJUST", "OJÄMN", "OKLAR",
  "OKTAV", "OKÄND", "OLAGA", "OLJAR", "OLJUD", "OLLON", "OLUST", "OLÖST", "OMAKA", "OMGER",
  "OMILD", "OMVAL", "OMVÄG", "OPIUM", "OPTIK", "ORDAR", "OREDA", "ORENA", "ORGIE", "ORKAR",
  "ORMEN", "OROAR", "ORÄTT", "ORÖRD", "OSAGD", "OSAMS", "OSANN", "OSTEN", "OSUND", "OTACK",
  "OTAKT", "OTALT", "OTUKT", "OVANA", "OVISS", "OÄKTA", "OÄVEN", "PACKE", "PADDA", "PAJAR",
  "PAJAS", "PARAD", "PARAR", "PASSÉ", "PATOS", "PEDAL", "PEKAR", "PERUK", "PETAR", "PETIG",
  "PIKAR", "PIKET", "PINAR", "PINNE", "PIPER", "PIPPI", "PIRAT", "PIROG", "PISKA", "PJÄXA",
  "PLANA", "PLASK", "PLATA", "PLIKT", "PLING", "PLOMB", "PLUMP", "PLÅGA", "POESI", "POLIO",
  "POLKA", "POLSK", "POMPA", "PONKE", "PORÖS", "POTTA", "PRAKT", "PRICK", "PRIMA", "PROPP",
  "PROPÅ", "PROSA", "PROST", "PRYAR", "PRÄNT", "PRÅNG", "PSALM", "PUDER", "PUMPS", "PUPPA",
  "PYSER", "PYTON", "PÅBRÅ", "PÅBUD", "PÅFÖR", "PÅGÅR", "PÅLAR", "PÅLLE", "PÅTAR", "PÅVER",
  "PÅÖKT", "PÖBEL", "PÖLSA", "PÖSER", "PÖSIG", "RACER", "RADAR", "RADDA", "RADIE", "RADON",
  "RAKAR", "RALLY", "RAMSA", "RANKA", "RAPAR", "RASAR", "RATAR", "RAVIN", "REBUS", "REDER",
  "REDIG", "REELL", "REFUG", "REKYL", "RELIK", "REMSA", "REPAR", "REPIG", "REPRO", "RESON",
  "RESÅR", "RETAS", "REVAR", "REVIR", "RIBBA", "RIDER", "RIFFI", "RIGID", "RISIG", "RISPA",
  "RIVAL", "RIVER", "RIVIG", "RIVIT", "RODDE", "RODEL", "RODER", "ROPAR", "ROSAR", "ROSIG",
  "ROTAR", "ROTEL", "ROUGE", "RUGGE", "RULLE", "RUMBA", "RUMÄN", "RUNDA", "RUSCH", "RUSIG",
  "RUTER", "RUTIG", "RUTIT", "RUVAR", "RYKER", "RYNKA", "RYSER", "RYSKA", "RYTER", "RÄCKE",
  "RÄFSA", "RÄFST", "RÄNNA", "RÅDER", "RÅDIG", "RÅGAD", "RÅMAR", "RÅNAR", "RÅRIS", "RÖJER",
  "RÖKIG", "RÖNER", "RÖRIGA", "RÖVAR", "SABEL", "SABLA", "SAFIR", "SALIG", "SALIV", "SAMBA",
  "SANNA", "SATIN", "SATIR", "SATTE", "SCARF", "SCHAH", "SCHAL", "SCOUT", "SEANS", "SEBRA",
  "SELAR", "SEMLA", "SENIG", "SENIL", "SERUM", "SERVE", "SESAM", "SEXIG", "SHEJK", "SILAR",
  "SINAR", "SINOM", "SIPPA", "SIREN", "SJYST", "SJÖNG", "SJÖNK", "SJÖSS", "SKABB", "SKENA",
  "SKINA", "SKOJA", "SKRYT", "SKURA", "SKYGG", "SKÄLL", "SLAPP", "SLICK", "SLIPA", "SLITA",
  "SLÅSS", "SMAKA", "SMIDA", "SMITA", "SMYGA", "SNARK", "SNEDA", "SNOBB", "SNOKA", "SOLID",
  "SPANA", "SPETS", "SPION", "SPOLA", "STEGA", "STEKA", "STICK", "STÖKA", "SURFA", "SVIKA",
  "SVÄLT", "SVÄVA", "SYNDA", "SYNAS", "TAGGA", "TAPPA", "TIGGA", "TIPSA", "TJATA", "TJUVA",
  "TJÄNA", "TOPPA", "TRAMS", "TRICK", "TRIVS", "TROTS", "UNIKT", "VÄSEN", "VÄSER", "VÄSKA",
  "VÄTER", "VÄVER", "VÄXEL", "VÄXER", "VÅGAD", "VÅGAR", "VÅGIG", "VÅNDA", "VÅRAN", "VÅRAS",
  "VÅRTA", "YMNIG", "YMPAR", "YNGEL", "YNGRE", "YNGST", "YPPAR", "YPPIG", "YRKAR", "YRSEL",
  "YSTER", "YTLIG", "YTTER", "YTTRE", "ZEBRA", "ZENIT", "ÄCKEL", "ÄGARE", "ÄLTAR", "ÄMNAR",
  "ÄNGEL", "ÄPPLE", "ÄRVER", "ÄTBAR", "ÄTLIG", "ÅBÄKE", "ÅKERI", "ÅLDER", "ÅRLIG", "ÅRTAL",
  "ÅSIKT", "ÅTRÅR", "ÅTTIO", "ÖLAND", "ÖMKAN", "ÖMKAR", "ÖMMAR", "ÖMSAR", "ÖMSOM", "ÖPPEN",
  "ÖRFIL", "ÖRING", "ÖSTER", "ÖSTRA", "ÖVERS", "ÖVRIG", "VIRAR", "VIRIL", "VIRKE", "VIRUS",
  "VISAR", "VISIT", "VISSO", "VISST", "VISUM", "VITAL", "VIVRE", "VIVÖR", "VOKAL", "VOLYM",
  "VOVVE", "VREDE", "VRIST", "VRÅNG", "VURPA", "VUXEN", "VUXIT", "VÄDER", "VÄDUR", "VÄGER",
  "VÄLVD", "VÄRDE", "VÄRJA", "VÄRLD", "VÄRME", "VÄRRE", "VÄRST", "VÄSEN", "VÄSER", "VÄSKA",
  "VÄTER", "VÄVER", "VÄXEL", "VÄXER", "UTMED", "UTOPI", "UTROP", "UTSER", "UTTAG", "UTTAL",
  "UTVÄG", "VADAR", "VAGGA", "VAJAR", "VAJER", "VAKAR", "VAKEN", "VALDE", "VALLA", "VALÖR",
  "VANDE", "VANTE", "VAPEN", "VARAR", "VARAV", "VARIT", "VARJE", "VARPÅ", "VARSE", "VAXAR",
  "VECKA", "VELAR", "VELAT", "VELIG", "VEMOD", "VETAT", "VEVAR", "VIDEO", "VIGER", "VIGÖR",
  "VIKER", "VILAR", "VILDE", "VILJA", "VILLA", "VILLE", "VILSE", "VINER", "VINGE", "VINST",
  "VINYL", "VIPPA","TUTAR", "TVANG", "TVING", "TVIST", "TVÄRS", "TVÄRT", "TVÄTT", "TYCKE",
  "TYCKS", "TYDER", "TYFUS", "TYGEL", "TYKEN", "TYNAR", "TYNGD", "TYSKA", "TÄCKE", "TÄNKT",
  "TÄPPA", "TÄRNA", "TÄTAR", "TÅGAR", "TÅLIG", "TÅRAS", "TÅRTA", "TÖJER", "TÖRNE", "TÖRST",
  "UGGLA", "UMGÅS", "UNDAN", "UNDER", "UNDRE", "UNION", "UNKEN", "UNNAR", "UPPÅT", "URTID",
  "URVAL", "UTBUD", "UTDÖD", "UTFÖR", "UTGER", "UTGÅR", "UTGÖR", "UTHUS", "UTHYR", "UTKIK",
"TORVA", "TOTAL", "TOTAR", "TRAKT", "TRALL", "TRAMP", "TRAMS", "TRANA", "TRANS", "TRASA",
"TRAST", "TRATT", "TRAVE", "TREND", "TRICK", "TRIKÅ", "TRIND", "TRIPP", "TRIST", "TRIVS",
"TROLL", "TROMB", "TROSA", "TROSS", "TROTS", "TRUCK", "TRUMF", "TRUPP", "TRYCK", "TRYGG",
"TRYNE", "TRÄDA", "TRÄFF", "TRÄSK", "TRÄTA", "TRÅNG", "TRÖJA", "TRÖST", "TRÖTT", "TUGGA",
"TUMME", "TUMÖR", "TUNGA", "TUNNA", "TURNÉ", "TUSAN", "TUSCH", "TUSEN",
"TACKA", "TAGEL", "TAGEN", "TAGER", "TAGIT", "TALAN", "TALAR", "TALJA", "TANGO", "TANIG",
"TANKE", "TAPET", "TAPPT", "TAVLA", "TEFAT", "TEGEL", "TELEX", "TEMPO", "TENOR", "TENTA",
"TEORI", "TIARA", "TIDIG", "TIGER", "TILJA", "TILLS", "TIMER", "TIMME", "TINAR", "TINNE",
"TITEL", "TJACK", "TJAFS", "TJECK", "TJOCK", "TJUGO", "TJÄLE", "TJÄRA", "TJÄRN", "TOBAK",
"TOKIG", "TOLVA", "TOMAT", "TOMTE", "TONAR", "TORKA", "TORSK", "TORSO","STRUL", "STRUT",
"STRYK", "STRÄV", "STRÅK", "STRÖG", "STRÖK", "STRÖM", "STRÖP", "STRÖR", "STUBB", "STUDS",
 "STUGA", "STUMP", "STUND", "STYCK", "STYGG", "STYGN", "STYNG", "STYRE", "STYVT", "STÅND",
 "STÅNG", "STÅTT", "STÖLD", "STÖRT", "STÖTT", "SUCCE", "SUCCÉ", "SUGEN", "SUGER", "SUGGA",
 "SUGIT", "SULFA", "SULKY", "SUMMA", "SUPER", "SUPUT", "SURAR", "SUSAR", "SUSEN", "SVADA",
 "SVALA", "SVALE", "SVALG", "SVALL", "SVALT", "SVAMP", "SVANK", "SVANS", "SVARS", "SVART",
 "SVARV", "SVEDA", "SVETT", "SVIKT", "SVING", "SVINN", "SVÄNG", "SVÄRD", "SVÄRM", "SYFTE",
 "SYLTA", "SYNAR", "SYNES", "SYNOD", "SYNÅL", "SYREN", "SYRRA", "SYRSA", "SÄGEN", "SÄGER",
 "SÄKER", "SÄLTA", "SÄMJA", "SÄMRE", "SÄMST", "SÄNKA", "SÅDAN", "SÅDÄR", "SÅGAR", "SÅLDE",
 "SÅRAD", "SÅRAR", "SÅRIG", "SÅSOM", "SÅVÄL", "SÖDER", "SÖDRA", "SÖKER", "SÖNER", "SÖRJA",
 "SÖTMA", "TABBE", "TABLÅ","SNODD", "SNOPP", "SNUDD", "SNURR", "SNUSK", "SNUTT", "SNUVA",
 "SNYFT", "SNYGG", "SNÄLL", "SNÄPP", "SNÖAR", "SNÖIG", "SNÖRE", "SOARÉ", "SOBER", "SOCKA",
  "SOFFA", "SOLAR", "SOLID", "SOLIG", "SONAR", "SOPAR", "SOPOR", "SOPPA", "SORTI", "SOSSE"
  , "SOTAR", "SOTIG", "SOUND", "SOVER", "SPADE", "SPALT", "SPANN", "SPARK", "SPARV", "SPASM",
   "SPENE", "SPETS", "SPETT", "SPILL", "SPION", "SPIRA", "SPJUT", "SPOLE", "SPORT", "SPOTT",
   "SPRAY", "SPRED", "SPREJ", "SPRIT", "SPRÅK", "SPRÖD", "SPRÖT", "SPURT", "SPÄCK", "SPÄND",
   "SPÄRR", "SPÅNG", "SPÅTT", "SPÖAR", "SPÖKE", "STACK", "STAKE", "STALL", "STANK", "STANS",
   "STARE", "STARK", "STARR", "START", "STASS", "STATY", "STEGE", "STEPP", "STICK", "STIFT",
   "STILL", "STING", "STINN", "STINS", "STINT", "STJÄL", "STOCK", "STOFF", "STOFT", "STOLT",
   "STOPP", "STORK", "STORM", "STORY", "STRAM", "STRAX", "STRED", "STRID", "STROF",
   "RÖJER", "RÖKER", "RÖKIG", "RÖNER", "RÖRIG", "RÖVAR", "SABEL", "SABLA", "SADEL", "SAFIR",
   "SAKTA", "SALDO", "SALIG", "SALIV", "SALUT", "SALVA", "SAMBA", "SAMBO", "SAMMA", "SANKT",
   "SANNA", "SATAN", "SATIN", "SATIR", "SATTE", "SCARF", "SCHAH", "SCHAL", "SCOUT", "SEANS",
   "SEBRA", "SEDAN", "SEDEL", "SEGEL", "SEGER", "SEKEL", "SELAR", "SEMLA", "SENAP", "SENAT",
    "SENIG", "SENIL", "SERIE", "SERUM", "SERVE", "SESAM", "SEXIG", "SHEJK", "SIDEN", "SIKTE",
     "SILAR", "SILKE", "SINAR", "SINNE", "SINOM", "SIPPA", "SIRAP", "SIREN", "SISTA", "SJUKA",
      "SJYST", "SJÄLV", "SJÖNG", "SJÖNK", "SJÖSS", "SKABB", "SKADA", "SKAFT", "SKALA", "SKALD",
      "SKALK", "SKALL", "SKALP", "SKALV", "SKANS", "SKARA", "SKARE", "SKARF", "SKARP", "SKARV",
       "SKATA", "SKATT", "SKEDE", "SKENA", "SKEPP", "SKETT", "SKICK", "SKIDA", "SKIFT", "SKIKT",
        "SKILD", "SKILS", "SKILT", "SKINN", "SKISS", "SKIVA", "SKJUL", "SKOCK", "SKOLA", "SKOLK",
        "SKOPA", "SKORV", "SKOTT", "SKRAJ", "SKRAL", "SKRED", "SKREK", "SKREV", "SKRIK", "SKRIN",
        "SKROT", "SKROV", "SKRUD", "SKRUV", "SKRYT", "SKRÄN", "SKRÄP", "SKULD", "SKULL", "SKURK",
        "SKUTA", "SKUTT", "SKVAL", "SKYDD", "SKYGG", "SKYLT", "SKYMF", "SKYMT", "SKYTT", "SKÄGG",
        "SKÄLM", "SKÄMD", "SKÄMS", "SKÄMT", "SKÄNK", "SKÄRM", "SKÅNE", "SKÖKA", "SKÖLD", "SKÖRD",
        "SKÖRT", "SKÖTE", "SLADD", "SLAKT", "SLANG", "SLANK", "SLANT", "SLAPP", "SLARV", "SLASK",
        "SLEJF", "SLIDA", "SLINT", "SLIPS", "SLITS", "SLOGS", "SLOTT", "SLUMP", "SLURK", "SLUSK",
        "SLUSS", "SLYNA", "SLÄDE", "SLÄTT", "SLÅSS", "SLÖAR", "SLÖJA", "SLÖJD", "SMACK", "SMALL",
        "SMALT", "SMART", "SMIDE", "SMINK", "SMISK", "SMITT", "SMOLK", "SMORT", "SMULA", "SMUTS",
        "SMUTT", "SMÅTT", "SMÖRJ", "SNACK", "SNAGG", "SNAPS", "SNARA", "SNART", "SNASK", "SNIBB",
        "SNITT", "SNOBB","PANNA", "PAPPA", "PARAD", "PARAR", "PARTI", "PARTY", "PASSÉ", "PASTA",
        "PATOS", "PEDAL", "PEKAR", "PENIS", "PENNA", "PERUK", "PETAR", "PETIG", "PIANO", "PIKAR",
        "PIKET", "PILOT", "PINAR", "PINNE", "PIPER", "PIPPI", "PIRAT", "PIROG", "PISKA", "PIZZA",
         "PJÄXA", "PLAGG", "PLANK", "PLASK", "PLAST", "PLATT", "PLATÅ", "PLIKT", "PLING", "PLOMB",
         "PLUGG", "PLUMP", "PLÅGA", "POESI", "POJKE", "POKAL", "POKER", "POLAR", "POLIO", "POLIS",
         "POLKA", "POLSK", "POMPA", "PONKE", "PONNY", "PORTO", "PORÖS", "POTTA", "POÄNG", "PRAKT",
         "PRESS", "PRICK", "PRIMA", "PRINS", "PROPP", "PROPÅ", "PROSA", "PROST", "PRYAR", "PRÄNT",
         "PRÄST", "PRÅNG", "PSALM", "PSYKE", "PUDEL", "PUDER", "PULKA", "PUMPA", "PUMPS", "PUNKT",
         "PUPPA", "PUTAR", "PYSER", "PYTON", "PÄRLA", "PÄRON", "PÅBRÅ", "PÅBUD", "PÅFÖR", "PÅGÅR",
         "PÅLAR", "PÅLLE", "PÅTAR", "PÅVER", "PÅÖKT", "PÖBEL", "PÖLSA", "PÖSER", "PÖSIG", "RACER",
         "RADAR", "RADDA", "RADIE", "RADIO", "RADON", "RAKAR", "RAKET", "RALLY", "RAMSA", "RANKA",
         "RAPAR", "RASAR", "RATAR", "RAVIN", "REBUS", "REDAN", "REDER", "REDIG", "REELL", "REFUG",
         "REGEL", "REGIM", "REJÄL", "REKYL", "RELIK", "REMSA", "RENAR", "REPAR", "REPIG", "REPRO",
         "RESER", "RESON", "RESÅR", "RETAS", "RETUR", "REVAR", "REVIR", "RIBBA", "RIDER", "RIFFI",
         "RIGID", "RINGA", "RISIG", "RISPA", "RITAR", "RIVAL", "RIVER", "RIVIG", "RIVIT", "ROBOT",
         "RODDE", "RODEL", "RODER", "ROLIG", "ROMAN", "ROPAR", "ROSAR", "ROSIG", "ROTAR", "ROTEL",
         "ROUGE", "RUGGE", "RULLE", "RUMBA", "RUMPA", "RUMÄN", "RUNDA", "RUSAR", "RUSCH", "RUSIG",
         "RUTER", "RUTIG", "RUTIN", "RUTIT", "RUVAR", "RYKER", "RYKTE", "RYNKA", "RYSER", "RYSKA",
         "RYTER", "RÄCKA", "RÄCKE", "RÄFSA", "RÄFST", "RÄNNA", "RÄNTA", "RÅDER", "RÅDIG", "RÅGAD",
         "RÅMAR", "RÅNAR", "RÅRIS", "RÅTTA","MESTA", "METAR", "METER", "METOD", "MIDJA", "MILJÖ",
         "MIMIK", "MINNE", "MINNS", "MINST", "MINUS", "MINUT", "MISTE", "MISÄR", "MIXER", "MJUGG",
         "NACKE", "NAGEL", "NAKEN", "NALLE", "NAMNE", "NAPPA", "NARIG", "NASAL", "NASSE", "NATUR",
         "NAVEL", "NEDAN", "NEDRE", "NEDÅT", "NEGER", "NEKAR", "NETTO", "NIGER", "NISCH", "NISSE",
         "NJURE", "NOLLA", "NOMAD", "NORSK", "NOSAR", "NOTAM", "NOTIS", "NOVIS", "NUBBE", "NUCKA",
         "NUNNA", "NUPIT", "NYANS", "NYHET", "NYLLE", "NYLON", "NYPER", "NYPON", "NYSER", "NYTTA",
         "NYVAL", "NÄMEN", "NÄMND", "NÄPEN", "NÄPPE", "NÄRKE", "NÄSTA", "NÄSTE", "NÅDDE", "MJÄLL",
         "MJÖLK", "MOCKA", "MODEM", "MODER", "MODIG", "MODUL", "MOGEN", "MOLAR", "MOPED", "MORAL",
         "MOROT", "MORSA", "MORSE", "MORSK", "MOSAR", "MOSKÉ", "MOSSA", "MOSSE", "MOTAR", "MOTIV",
         "MOTOR", "MOTTO", "MULEN", "MUMIE", "MURAR", "MUSIK", "MUTAR", "MYGEL", "MYGGA", "MYLLA",
         "MYNTA", "MYSER", "MYSIG", "MYSLI", "MÄKTA", "MÄNGD", "MÄRKE", "MÄTER", "MÅLAR", "MÅNAD",
         "MÅNDE", "MÅNGA", "MÅNNE", "MÅSTE", "MÅTTO", "MÖBEL", "MÖGEL", "MÖTER", "NÅDIG", "NÅGON",
         "NÅGOT", "NÅGRA", "NÄVÄL", "NÖDIG", "NÖTER", "OANAD", "OBLAT", "OBLID", "OBLYG", "OBYGD",
         "OCEAN", "OCKER", "OCKSÅ", "ODJUR", "ODLAR", "ODÅGA", "OENIG", "OENSE", "OFFER", "OGIFT",
         "OGRÄS", "OHYRA", "OJUST", "OJÄMN", "OKLAR", "OKTAV", "OKÄND", "OLAGA", "OLIKA", "OLJAR",
         "OLJUD", "OLLON", "OLUST", "OLÖST", "OMAKA", "OMBUD", "OMGER", "OMILD", "OMVAL", "OMVÄG",
         "ONANI", "OPERA", "OPIUM", "OPTIK", "ORDAR", "ORDEN", "ORDER", "OREDA", "ORGAN", "ORGEL",
         "ORGIE", "ORKAN", "ORKAR", "OROAR", "ORSAK", "ORÄTT", "ORÖRD", "OSAGD", "OSAMS", "OSANN",
         "OSUND", "OTACK", "OTAKT", "OTALT", "OTUKT", "OVANA", "OVISS", "OÄKTA", "OÄVEN", "PACKE",
         "PADDA", "PAJAR", "PAJAS", "PAKET", "PANEL", "PANIK", "KVARN", "KVART", "KVAST", "KVICK",
         "KVIGA", "KVIRR", "KVIST", "KVITT", "KVÄLL", "KVÄVE", "KVÄVS", "KYFFE", "KYLER", "KYLIG",
         "KYNNE", "KYRKA", "KYSSA", "KÅDA", "KÅPA", "KÄFT", "KÄFTA", "KÄGLE", "KÄKAR", "KÄLKE", "KÄLLA",
         "KÄMPE", "KÄNDE", "KÄNGA", "KÄNNS", "KÄPPA", "KÄRNA", "KÄRRA", "KÄRVA", "KÄRVE", "KÅSÖR", "KÖLAR",
         "KÖLD", "KÖNAD", "KÖPER", "KÖRDE", "KÖRAS", "KÖRDA", "KÖRER", "KÖRIG", "KÖRNA", "LABBA", "LABIL",
         "LADDA", "LAFSA", "LAGAR", "LAGER", "LAGGA", "LAGOM", "LAGRA", "LAGUN", "LAJVA", "LAKAN", "LAKEJ",
         "LALLA", "LAMMA", "LAMPA", "LANAR", "LANGA", "LANKA", "LAPAR", "LAPPA", "LARMA", "LARVA", "LASAR",
         "LASER", "LASSO", "LATER", "LATIN", "LAVIN", "LEDER", "LEDIG", "LEGAL", "LEGAT", "LEJER", "LEJON",
         "LEKER", "LEKIS", "LETAR", "LEVAT", "LEVDE", "LEVER", "LIDER", "LIKÖR", "LILJA", "LILLA", "LIMPA",
         "LINDA", "LINJE", "LINNE", "LIPAR", "LIRAR", "LISTA", "LITER", "LITEN", "LITET", "LIVAD", "LJUNG",
         "LOBBY", "LOGIK", "LOJAL", "LOKAL", "LOPPA", "LOSKA", "LOTTA", "LOVAR", "LUCIA", "LUCKA", "LUDEN",
         "LUDER", "LUNCH", "LUNGA", "LUNTA", "LURAR", "LURIG", "LUSTA", "LUTAR", "LYCKA", "LYDDE", "LYDER",
         "LYDIG", "LYKTA", "LYMFA", "LYNNE", "LYRIK", "LYSER", "LÄCKA", "LÄDER", "LÄGRE", "LÄGST", "LÄKER",
         "LÄNGA", "LÄNGD", "LÄNGE", "LÄNGS", "LÄRKA", "LÄSÅR", "LÅNAR", "LÅNGT", "LÖDER", "LÖFTE", "LÖMSK",
         "LÖPER", "LÖSEN", "LÖSER", "MACKA", "MAGER", "MAJ:T", "MAJOR", "MAKAR", "MALAJ", "MALÖR", "MAMMA",
         "MANAR", "MANER", "MANET", "MANNA", "MANUS", "MARIG", "MARIN", "MASKA", "MASSA", "MATAR", "MATCH",
         "MATTA", "MATTE", "MEDAN", "MEDEL", "MEJAR", "MEKAR", "MELON", "MENAR", "MENED", "MENIG", "MERIT",
         "INGEN", "INGER", "INGET", "INGÅR", "INKÖP", "INNAN", "INSER", "INSJÖ", "INSYN", "INSÅG", "INTET", "INTIG", "INTYG", "INUIT", "INUTI", "INVAL", "INVID", "INVIT", "IRONI", "IRRAR", "ISARK", "ISBAR", "ISBIT", "ISGRÅ", "ISHAV", "ISIGA", "ISKUB", "ISLAM", "ISMAN", "ISPIK", "ISSJÖ", "ISTER", "ISTID", "IVRA", "IVRIG", "JABBA", "JACKA", "JAFSA", "JAGAD", "JAGAR", "JAMMA", "JAMSA", "JANKA", "JAPAN", "JARLA", "JARRA", "JASÅ", "JAVAN", "JAZZA", "JEANS", "JEHU", "JIDDA", "JIGGA", "JINGO", "JIPPO", "JOBBA", "JOCKA", "JODDA", "JODLA", "JOGGA", "JOINT", "JOKER", "JOLLE", "KAKAO", "KANAR", "KANEL", "KANIN", "KANNA", "KANON", "KANOT", "KANYL", "KAPAR", "KAPPA", "KARAT", "KARDA", "KARTA", "KASSA", "KASSE", "KAVAJ", "KAVAT", "KAVEL", "KAXIG", "KEDJA", "KELAR", "KIKAR", "KILAR", "KILLE", "KINES", "KIOSK", "KISAR", "KISEL", "KISSE", "KISTA", "KIVAS", "KLACK", "KLADD", "KLAFF", "KLANG", "KLANT", "KLAPP", "KLASE", "KLASS", "KLAVE", "KLIAR", "KLICK", "KLIMP", "KLIPP", "KLOAK", "KLOSS", "KLUBB", "KLUMP", "KLUNK", "KLYKA", "KLÅDA", "KNALL", "KNAPP", "KNARK", "KNEKT", "KNIPA", "KNOGE", "KNOPP", "KNORR", "KNOTA", "KNOTT", "KNUFF", "KNYCK", "KNYST", "KNYTE", "KNÄAR", "KNÄCK", "KOBBE", "KODAR", "KOFOT", "KOFTA", "KOKAR", "KOLIK", "KOLJA", "KOLLI", "KOLLO", "KOLON", "KOMET", "KOMMA", "KONST", "KONTO", "KOPIA", "KORAR", "KORTA", "KOSSA", "KOTTE", "KOVAN", "KPIST", "KRAFS", "KRAFT", "KRAGE", "KRAKE", "KRAMP", "KRAMS", "KRANS", "KRASS", "KRETI", "KRETS", "KRING", "KRITA", "KROAT", "KROCK", "KRONA", "KROPP", "KRUKA", "KRUPP", "KRYSS", "KRÄKS", "KRÄPP", "KRÅKA", "KUBAN", "KUDDE", "KUGGE", "KULEN", "KULLE", "KULÖR", "KUNDE", "KUNNA", "KUPOL", "KURIR", "KURRA", "KURVA", "KUSIN", "KUTAR", "KUTYM", "KUVAR", "KUVÖS", "KVARG", "KVARK",
         "FÅNIG", "GALLA", "GALÄR", "FÖLJD", "FÖLJE", "FÖRBI", "FÖRRA", "FÖRST", "FÖRTI", "FÖRUT", "FÖSER", "GAGNA", "GALAX", "GALEN", "GALGE", "GRUPP", "GRUVA", "GAPAR", "GARDE", "GASOL", "GAVEL", "GEBIT", "GEHÖR", "GEMEN", "GEMÅL", "GENOM", "GENRE", "GENUS", "GETTO", "GEVÄR", "GIFTE", "GINST", "GIRAR", "GIVER", "GIVIT", "GJORT", "GLANS", "GLAPP", "GLASS", "GLATT", "GLIMT", "GLOSA", "GLUGG", "GLÄNT", "GLÖGG", "GNABB", "GNÄLL", "GODIS", "GOSIG", "GOSSE", "GRABB", "GRANN", "GREPP", "GREVE", "GRILL", "GRIND", "GRODA", "GRODD", "GROGG", "GROLL", "GRUND", "HETAT", "GRYTA", "GRÄLL", "GRÄND", "GRÄNS", "GUBBE", "GUIDE", "GUMMA", "GUMMI", "GUNGA", "GUNST", "GURKA", "GÄDDA", "GÄNGA", "GÄRNA", "GÖDER", "HABIL", "HACKA", "HAGEL", "HAGGA", "HAJAR", "HALAR", "HALKA", "HALLÅ", "HALVA", "HALVÖ", "HAMBO", "HANNE", "HAREM", "HARPA", "HASAR", "HASCH", "HATAR", "HAVRE", "HEDER", "HEJAR", "HEKTO", "HELIG", "HELST", "HEMMA", "HEMSK", "HEMÅT", "HENNE", "HERDE", "HERRE", "HETER", "HETTA", "HETTE", "HICKA", "HIMLA", "HINDU", "HINNA", "HITOM", "HITRE", "HITÅT", "HJORD", "HJORT", "HJÄLM", "HJÄLP", "HOBBY", "HOLME", "HONOM", "HOSTA", "HOTAR", "HUGAD", "HUMAN", "HUMLA", "HUMLE", "HUMOR", "HURRA", "HURSÅ", "HURTS", "HUSSE", "HUVUD", "HYDDA", "HYENA", "HYGGE", "HYLLA", "HYLSA", "HYNDA", "HYSCH", "HYSER", "HYSKA", "HYTTA", "HYVEL", "HÄDAR", "HÄFTA", "HÄFTE", "HÄKTE", "HÄLFT", "HÄLSA", "HÄMND", "INTAR", "KANAL", "HÄNGE", "HÄPEN", "HÄRAD", "HÄRAV", "HÄROM", "HÄRVA", "HÄTSK", "HÄTTA", "HÄVER", "HÅGAD", "HÅNAR", "HÅRIG", "HÖGER", "HÖGRE", "HÖGST", "HÖJER", "HÖLJE", "HÖRNA", "IDEAL", "IDIOM", "IDIOT", "IDKAR", "IDYLL", "IFALL", "IFATT", "IFRÅN", "IGÅNG", "IHJÄL", "IKAPP", "ILSKA", "IMAGE", "IMMIG", "IMMUN", "INDEX", "INFÖR",
         "DIMMA", "DISIG", "DISKO", "DITÅT", "DJUPT", "DJÄRV", "DOCKA", "DOLDE", "DOMÄN", "DOPAR", "DRACK", "DRAGG", "DRAKE", "DRAMA", "DRESS", "DRIFT", "DRILL", "DRINK", "DRIVA", "DRIVE", "DROPP", "DRUVA", "DRYCK", "DRYGT", "DRÄKT", "DRÄNG", "DUELL", "DUETT", "DUGER", "DUKAR", "DUNGE", "DUSCH", "DVALA", "DVÄRG", "DYKER", "DYLIK", "DYNGA", "DÄRAN", "DÄROM", "DÄRPÅ", "DÄVEN", "DÅLIG", "DÅSAR", "DÅSIG", "DÖDAR", "DÖMER", "DÖPER", "EFTER", "EGGAR", "EJDER", "EKSEN", "ELDAR", "ELFTE", "ELLER", "ELOGE", "EMALJ", "ENHET", "ENKEL", "ENKÄT", "ENORM", "ENRUM", "ENSAK", "ENSAM", "ENTRE", "ENVAR", "ENVIS", "ENZYM", "EPISK", "ERFAR", "ETAPP", "ETISK", "ETSAR", "EXAKT", "EXTAS", "EXTRA", "FABEL", "FACIT", "FADER", "FADÄS", "FAGER", "FAKTA", "FALSK", "FAMÖS", "FANNS", "FANER", "FARIN", "FARIT", "FARSA", "FASAD", "FASAN", "FASON", "FASTA", "FASAR", "FATAL", "FAUNA", "FAVÖR", "FEBER", "FEJAR", "FELAR", "FEMMA", "FEMTE", "FERIE", "FETMA", "FIBER", "FICKA", "FIGUR", "FIKAR", "FIKON", "FIKUS", "FILAR", "FILUR", "FINAL", "FINKA", "FINNE", "FINNS", "FINSK", "FIRAR", "FIRMA", "FISER", "FISKE", "FITTA", "FIXAR", "FJANT", "FJORD", "FJÄLL", "FJÄRD", "FJÄRT", "FJÄSK", "FLABB", "FLACK", "FLAGA", "FLAGG", "FLERA", "FLINK", "FLINT", "FLIRT", "FLISA", "FLOCK", "FLORA", "FLOTT", "FLUGA", "FLUOR", "FOAJE", "FLYKT", "FLÄKT", "FLÄNG", "FLÄRD", "FLÄSK", "FLÄTA", "FLÖDE", "FLÖJT", "FLÖRT", "FLÖTE", "FNASK", "FNATT", "FODER", "FOGAR", "FOGDE", "FOKUS", "FOLIE", "FORUM", "FOTAR", "FRACK", "FRAKT", "FRANK", "FRANS", "FRIAR", "FRISK", "FRIST", "FRONT", "FROST", "FRUGA", "FRUKT", "FRÅGA", "FRÖJD", "FULLO", "FURIR", "FYLLA", "FYLLD", "FYLLO", "FYSIK", "FÄLLA", "FÄRDE", "FÄRJA", "FÄRRE", "FÄRSK", "FÄSTE", "FÅGEL", "FÅNGA", "FÅNGE",
         "BLAND", "BLANK", "BLASK", "BLAST", "BLECK", "BLICK", "BLIND", "BLIXT", "BLOCK", "BLOND", "BLOSS", "BLOTT", "BLUES", "BLUFF", "BLUND", "BLYGD", "BLÅSA", "BLÖJA", "BLÖTA", "BOBIN", "BOETT", "BOKAR", "BOLAG", "BONAD", "BOHAG", "BOHEM", "BONAR", "BONDE", "BONUS", "BOOTS", "BORDE", "BOREN", "BORST", "BORTA", "BOTAR", "BOXAS", "BRAGD", "BRAND", "BRANN", "BRANT", "BRASA", "BRASS", "BRAST", "BRAVO", "BREDD", "BRINK", "BRIST", "BRITS", "BRITT", "BROMS", "BRONS", "BROSK", "BROTT", "BRUNN", "BRYGD", "BRYNE", "BRYSK", "BRÄDA", "BRÄDD", "BRÄDE", "BRÅCK", "BRÅTE", "BRÖST", "BUKIG", "BULLA", "BULLE", "BUNKE", "BURIT", "BUSAR", "BUSIG", "BUSKE", "BUTIK", "BYGEL", "BYGGE", "BYLTE", "BYTER", "BÄBIS", "BÄLTE", "BÄRSA", "BÄVAN", "BÄVAR", "BÄVER", "BÖDEL", "BÖJER", "BÖKIG", "BÖLAR", "BÖLJA", "BÖRDA", "BÖSSA", "BÖTER", "BÖVEL", "CELLO", "CERAT", "CHANS", "CHARK", "CHARM", "CHECK", "CHIPS", "CHOCK", "CHOKE", "CIDER", "CIRKA", "CITAT", "CIVIL", "CLIPS", "CLOWN", "CRAWL", "CREDO", "CURRY", "CYKEL", "CYSTA", "DABBA", "DADEL", "DAGAS", "DAGER", "DAGIS", "DALAR", "DANAR", "DANSK", "DATOR", "DATUM", "DEBET", "DEBUT", "DEGAR", "DEGEL", "DEKAL", "DEKIS", "DEKOR", "DELAR", "DELTA", "DEMON", "DENIM", "BENIM", "DENNA", "DERAS", "DESSA", "DESTO", "DETTA", "DEVIS", "DIGER", "DILLE",
         "VÄSEN", "ÖRING", "ABORT", "ACCIS", "ADLAR", "AFFÄR", "AFTON", "AGENT", "AGNAR", "AKRYL", "AKTER", "AKTIE", "AKTIV", "AKTÖR", "ALARM", "ALBAN", "ALBUM", "ALERT", "ALIAS", "ALIBI", "ALIKA", "ALKOV", "ALLRA", "ALPIN", "ALTAN", "AMMAR", "AMPEL", "ANBUD", "ANDAN", "ANDAS", "ANDEL", "ANDRA", "ANFÖR", "ANGAV", "ANGER", "ANGÖR", "ANING", "ANKAR", "ANKEL", "ANLAG", "ANNAN", "ANNEX", "ANRIK", "ANSAR", "ANSER", "ANSTÅ", "ANSÅG", "ANTAL", "ANTAR", "ANTIK", "ANTOG", "AORTA", "APART", "APRIL", "APTIT", "AREAL", "ARENA", "ARKAD", "ARKIV", "ARMOD", "ARSEL", "ARSLE", "ARTIG", "ARTON", "ARTÄR", "ASIAT", "ASKAR", "ASKET", "ASTER", "ASTMA", "ATLAS", "ATLET", "AVART", "AVBÖN", "AVENY", "AVGAS", "AVGER", "AVGÅR", "AVGÖR", "AVLAR", "AVLAT", "AVLED", "AVSER", "AVSKY", "AVSÅG", "AVTAL", "AVTAR", "AVUND", "AXION", "AXLAR", "BACKE", "BACON", "BADAR", "BAGGE", "BAKAR", "BAKOM", "BAKRE", "BAKÅT", "BALJA", "BAMBY", "BANAL", "BANAN", "BANAR", "BANDY", "BANER", "BARON", "BARSK", "BASAR", "BASIS", "BASTA", "BASTU", "BASUN", "BATIK", "BEBOR", "BEDER", "BEFÄR", "BEGÅR", "BEHAG", "BEHOV", "BEIGE", "BENAR", "BENIG", "BERSÅ", "BERÖM", "BERÖR", "BESÖK", "BETAR", "BETYG", "BEVIS", "BEVÅG", "BIBEL", "BIDAR", "BILAR", "BINDA", "BINGE", "BINGO", "BINÄR", "BISAK", "BITER", "BITSK", "BITTI", "BJÖRK", "BJÖRN", "BLACK",
         "KISTA", "KENY", "ÅKRAT", "ÅKRAR", "TENTA", "TÄNDA", "SKJUT", "POÄNG", "PENIS", "KLAVE", "KRAMA", "DANSA", "HOPPA", "TROSA", "KLIAR", "SKROT", "SÄMST", "GISSA", "GLOSA", "FLORA", "LOVAT", "LÄDER", "LIDER", "LUDER"
]);

/**
 * Enkel seedad pseudo-random (mulberry32) – ger samma tal för samma seed.
 */
function seededRandom(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher-Yates shuffle med given seed – returnerar en ny array, rör inte originalet.
 */
function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  const rand = seededRandom(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Hämtar dagens ord baserat på datum (deterministisk men ordningen i listan spelar ingen roll).
 * Shufflar hela listan med årets seed, sedan plockar dag-i-år som index.
 */
export function getDailyWord(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const start = new Date(`${year}-01-01`);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  // Seed = år * 1000 + dag-i-år → unikt per dag, repeterbart
  const seed = year * 1000 + dayOfYear;
  const shuffled = shuffleWithSeed(DAILY_WORDS, seed);
  return shuffled[dayOfYear % shuffled.length];
}

/**
 * Hämtar gårdagens ord
 */
export function getYesterdayWord(dateStr: string): string {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  const yesterday = date.toISOString().split("T")[0];
  return getDailyWord(yesterday);
}

/**
 * Validerar om ett ord är en giltig gissning
 */
export function isValidGuess(word: string): boolean {
  return VALID_GUESSES.has(word.toUpperCase());
}