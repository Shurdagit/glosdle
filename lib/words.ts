// Svenska 5-bokstavsord – ordlista för Svenska Wordle
// Innehåller både gissningsbara ord (ANSWERS) och giltiga gissningsord (VALID_GUESSES)

export const ANSWERS: string[] = [
  "ABORT", "AFFÄR", "AGERA", "AKTIE", "ALARM", "ALBUM", "ALLRA", "ALPIN", "ALTAN", "ALLVAR",
  "ANDAS", "ANKEL", "ANNAN", "ANNAT", "ANTAL", "ANTIK", "APRIL", "ARENA", "ARTON", "ASKEN",
  "ASTMA", "ATLAS", "ATLET", "AVGAS", "AVSKY", "AVTAL", "AVUND", "AXELN", "BACKA", "BAKIS",
  "BANAN", "BANDY", "BANKA", "BARNS", "BARSK", "BASTU", "BEBIS", "BEFÄL", "BEIGE", "BESÖK",
  "BETYG", "BILDA", "BITAR", "BJUDA", "BJÖRK", "BJÖRN", "BLEKA", "BLICK", "BLIND", "BLINK",
  "BLIXT", "BLOCK", "BLOND", "BLUES", "BLUFF", "BLÅSA", "BLÅST", "BLÖTA", "BOCKA", "BONDE",
  "BONUS", "BORDE", "BORST", "BREDA", "BROMS", "BROTT", "BRUNN", "BRUNT", "BRYTA", "BRÅKA",
  "BRÅTE", "BRÄDE", "BRÄNN", "BRÖST", "BUKEN", "BULLE", "BUREN", "BYGGA", "BYXOR", "BÄCKA",
  "BÄGGE", "BÄLTA", "BÄNKA", "BÄSTA", "BÖRDA", "BÖRJA", "BÖTER", "CHIPS", "CHOCK", "CYKEL",
  "CYKLA", "DAGAR", "DAGGA", "DALAR", "DALEN", "DANSA", "DATOR", "DATUM", "DELTA", "DEMON",
  "DIKTA", "DISKO", "DJUPA", "DJUPT", "DOCKA", "DOFTA", "DOLDA", "DOMÄN", "DRAKE", "DRAMA",
  "DRICK", "DRIFT", "DROPP", "DRÖJA", "DRÖMA", "DRÖMT", "DUKAT", "DUMMA", "DUMPA", "DUNKA","DUNKA","DUSCH", "DYKER",
  "DYNGA", "DYRKA", "DÅLIG", "DÄMPA", "EFTER", "ELAKA", "ELDAR", "ENKEL", "ENKLA", "ENORM",
  "ENTRÉ", "EPISK", "EXAKT", "EXTRA", "FABEL", "FACIT", "FAKTA", "FALLA", "FALSK", "FARSA",
  "FATAL", "FATTA", "FEBER", "FESTA", "FIKON", "FILMA", "FINAL", "FINNA", "FISKA", "FJORD",
  "FJÄLL", "FJÄRR", "FLINK", "FLOCK", "FLORA", "FLUGA", "FLYGA", "FLYKT", "FLÄCK", "FLÄKT",
  "FLÄSK", "FLÖDE", "FLÖJT", "FOKUS", "FOLIE", "FORUM", "FOTON", "FOTOT", "FRAKT", "FRANK",
  "FRONT", "FRUKT", "FRÄCK", "FRÄSA", "FULLT", "FUNKA", "FUSKA", "FYLLA", "FÅNGA", "FÄKTA",
  "FÄLLA", "FÄRSK", "FÖRBI", "FÖRST", "GALEN", "GAMLA", "GARVA", "GENOM", "GENUS", "GIFTA",
  "GILLA", "GISSA", "GIVEN", "GIVIT", "GLADA", "GLÖGG", "GLÖMT", "GODIS", "GRABB", "GRANN",
  "GRIND", "GRIPA", "GRODA", "GRUPP", "GRYTA", "GRÅTA", "GRÅTT", "GRÖNA", "GRÖNT", "GUBBE",
  "GUIDA", "GUNGA", "HACKA", "HALKA", "HAMNA", "HAMRA", "HASTA", "HATAR", "HELST", "HEMMA",
  "HISSA", "HITTA", "HJORT", "HJÄLP", "HJÄRN", "HJÄRT", "HOBBY", "HOPPA", "HOSTA", "HOTAD",
  "HUMLA", "HUSEN", "HUSET", "HUVUD", "HYFSA", "HYLLA", "HÅLLA", "HÅRDA", "HÄLSA", "HÄNGA",
  "HÖGER", "INFÖR", "INGEN", "INGET", "INNAN", "JAGAR", "JEANS", "JOBBA", "JOGGA", "JUBEL",
  "JUBLA", "JÄKLA", "JÄMNA", "JÄRNA", "KAFFE", "KALLA", "KAMIN", "KANNA", "KARTA", "KASTA",
  "KAVLA", "KAXIG", "KEDJA", "KLAGA", "KLAPP", "KLART", "KLICK", "KLIPP", "KLOAK", "KLOKA",
  "KLOSS", "KLUMP", "KLÄDD", "KNARK", "KNIPA", "KNYTA", "KOFTA", "KOMET", "KOMMA", "KONST",
  "KORSA", "KORTA", "KOSTA", "KRAMP", "KRISA", "KRITA", "KROPP", "KRUKA", "KRYPA", "KRÄKA",
  "KRÄVA", "KUNDE", "KUNNA", "KURVA", "KVARG", "KVAST", "KVICK", "KVIST", "KVÄLL", "KYLAN",
  "KYRKA", "KÄLLA", "KÄMPA", "KÄNGA", "KÄNNA", "KÄRNA", "KÖPTE", "KÖRDE", "LAGRA", "LAKAN",
  "LAMPA", "LAPPA", "LASER", "LASTA", "LEDIG", "LEKEN", "LEVER", "LIGAN", "LIKNA", "LINJE",
  "LISTA", "LITEN", "LJUGA", "LJUST", "LOJAL", "LOKAL", "LOPPA", "LUCKA", "LUGNA", "LUKTA",
  "LUNKA", "LURAD", "LURAR", "LYCKA", "LYFTA", "LÅNGA", "LÅNGT", "LÄMNA", "LÄNGD", "LÄNGE",
  "LÄNKA", "LÄTTA", "LÖNAR", "LÖPER", "LÖSEN", "LÖSER", "MAKTA", "MAMMA", "MANKE", "MASSA",
  "MATCH", "MATEN", "MEJLA", "MENAR", "MERIT", "METER", "METOD", "MIKRO", "MILDA", "MINNA",
  "MINNS", "MINST", "MINUS", "MISSA", "MJUKA", "MJUKT", "MJÖLK", "MOBBA", "MOBIL", "MODIG",
  "MODUL", "MOGEN", "MOLNA", "MORAL", "MORSA", "MOTIV", "MUSIK", "MYGGA", "MYTEN", "MÅNAD",
  "MÅSTE", "MÄKTA", "MÖTET", "NAIVA", "NAKNA", "NEDRE", "NINJA", "NORSK", "NUDEL", "NUMRA",
  "NYANS", "NYHET", "NÅDDE", "NÄMNA", "NÄMND", "NÄSAN", "NÄSTA", "OFFRA", "OLIKA", "ORDEN",
  "OREDA", "ORENA", "ORGAN", "ORMEN", "OSTEN", "PACKA", "PAKET", "PANEL", "PANIK", "PANNA",
  "PASTA", "PAUSA", "PENNA", "PIANO", "PILOT", "PIZZA", "PLANA", "PLANK", "PLATT", "PLUGG",
  "POKAL", "POLIS", "PRATA", "PRINS", "PRISA", "PROVA", "PRÄST", "PUMPA", "PUSTA", "PUTSA",
  "PÄRLA", "PÄRON", "RADIO", "RAKET", "RAMLA", "RAPPA", "REDAN", "REGNA", "REJÄL", "RIMMA",
  "RINGA", "ROCKA", "ROLIG", "ROMAN", "RUMPA", "RUSAR", "RUSKA", "RYKTE", "RYMMA", "RÄDDA",
  "RÄKNA", "RÄVEN", "RÖKER", "RÖSTA", "SAKER", "SAKNA", "SAMLA", "SAMMA", "SATSA", "SEDAN",
  "SERIE", "SERVA", "SIDAN", "SIKTA", "SIMMA", "SITTA", "SJUKA", "SJUKT", "SKADA",
  "SKALA", "SKARP", "SKATT", "SKENA", "SKINA", "SKOJA", "SKOLA", "SKOTT", "SKRYT", "SKURA",
  "SKYGG", "SKYLT", "SKÄGG", "SKÄLL", "SKÄMT", "SKÖNA", "SKÖNT", "SKÖTA", "SLAPP", "SLICK",
  "SLIPA", "SLITA", "SLOTT", "SLUMP", "SLUTA", "SLÅSS", "SMAKA", "SMART", "SMIDA", "SMINK",
  "SMITA", "SMYGA", "SNABB", "SNARK", "SNEDA", "SNOBB", "SNOKA", "SOFFA", "SOLID", "SOPPA",
  "SPANA", "SPARK", "SPELA", "SPETS", "SPION", "SPOLA", "SPORT", "SPRIT", "STARK", "STEGA",
  "STEKA", "STICK", "STIGA", "STOCK", "STOLT", "STORA", "STORM", "STORT", "STUGA", "STUND",
  "STÄDA", "STÖKA", "SUMMA", "SURFA", "SVARA", "SVART", "SVETT", "SVIKA", "SVÄLT", "SVÄRD",
  "SVÄVA", "SYNDA", "SYNAS", "SÅDAN", "SÄGER", "SÄLJA", "SÄNKA", "SÄTTA", "SÖDER", "SÖKER",
  "SÖMN",  "TACKA", "TAGGA", "TAKET", "TALAR", "TAPPA", "TESTA", "TIDIG", "TIGGA", "TIMME",
  "TIPSA", "TITTA", "TJATA", "TJOCK", "TJUGO", "TJUVA", "TJÄNA", "TOPPA", "TRAMS", "TRICK",
  "TRIVS", "TROTS", "TRYCK", "TRÄNA", "TRÖJA", "TRÖTT", "TUSAN", "TVEKA", "TYCKA", "TYSTA",
  "TÅGET", "TÅRAR", "TÄCKA", "TÄLTA", "TÄNKA", "TÖMMA", "UNDER", "UNIKT", "VAKEN", "VAKNA",
  "VAPEN", "VARAN", "VARIT", "VARNA", "VECKA", "VILDA", "VILJA", "VILKA", "VINKA", "VISST",
  "VRIDA", "VÄCKA", "VÄGEN", "VÄLJA", "VÄSKA", "VÄXLA", "ÅLDER", "ÅRETS", "ÅSNAN", "ÄLSKA",
  "ÄNDRA", "ÄPPLE", "ÖNSKA", "ÖPPEN", "ÖSTER", "ÖVRIG"
];

// Rensa duplicerade och ogiltiga ord
const cleanedAnswers = [...new Set(ANSWERS.filter(w => w.length === 5))];

export const DAILY_WORDS: string[] = cleanedAnswers;

// Alla giltiga gissningsord (inkluderar svarsorden)
export const VALID_GUESSES: Set<string> = new Set([
  ...DAILY_WORDS, // Se till att detta matchar vad du har kallat svarslistan
  
  // Omfattande lista med giltiga svenska ord från SAOL/ordboken (A-Ö)
  "ABORT", "ADEPT", "AFFÄR", "AGERA", "AGENT", "AKTAD", "AKTIV", "ALARM", "ALBUM", "ALGEN", 
  "ALLAN", "ALLRA", "ALLAS", "ALPIN", "ALTAN", "ALVAR", "ANDAS", "ANDRA", "ANGEL", "ANKAR", 
  "ANKEL", "ANNAN", "ANNAT", "ANROP", "ANTAL", "ANTIK", "APRIL", "ARENA", "ARMAR", "ARMEN", 
  "ARTON", "ASKEN", "ASTMA", "ATLAS", "ATLET", "AVSÅG", "AVSER", "AVSTÅ", "AVTAL", "AVUND", "AXELN",
  
  "BACKA", "BADAR", "BAKAR", "BAKAT", "BAKIS", "BAKOM", "BAKRE", "BALEN", "BANAN", "BANDY", 
  "BANOR", "BANKA", "BARNS", "BARSK", "BASTU", "BEBIS", "BEDJA", "BEFÄL", "BEHOV", "BEIGE", 
  "BERED", "BERGS", "BESÖK", "BETYG", "BEVIS", "BILAR", "BILEN", "BITER", "BITIT", "BJUDA", 
  "BJÖRK", "BJÖRN", "BLAND", "BLANK", "BLEKA", "BLICK", "BLIND", "BLINK", "BLIXT", "BLOCK", 
  "BLOND", "BLUES", "BLUFF", "BLUND", "BLYGD", "BLÅSA", "BLÅST", "BLÖTA", "BOCKA", "BOKAR", 
  "BOKAS", "BOKEN", "BOLLA", "BOLMA", "BONDE", "BONUS", "BORDA", "BORDE", "BORRA", "BORTA", 
  "BOTAR", "BRAVO", "BREDA", "BREDD", "BRETT", "BROMS", "BROTT", "BRUNA", "BRUNN", "BRUNT", 
  "BRYDD", "BRYGG", "BRYNA", "BRYTA", "BRÅKA", "BRÅTE", "BRÄDE", "BRÄNN", "BRÖST", "BUKEN", 
  "BULLE", "BUREN", "BURKA", "BYGGA", "BYGGD", "BYXAN", "BYXOR", "BÄCKA", "BÄGGE", "BÄLTA", 
  "BÄNKA", "BÄSTA", "BÖRDA", "BÖRJA", "BÖTER",
  
  "CHIPS", "CHOCK", "CYKEL", "CYKLA",
  
  "DAGAR", "DAGEN", "DAGGA", "DALAR", "DALEN", "DAMIG", "DANSA", "DARRA", "DATOR", "DATUM", 
  "DELAR", "DELAT", "DELTA", "DEMON", "DERAS", "DIKTA", "DISCO", "DISKO", "DJUPA", "DJUPT", 
  "DOCKA", "DOFTA", "DOLDA", "DOMÄN", "DRAKE", "DRAMA", "DRICK", "DRIFT", "DROPP", "DRYGA", 
  "DRYGT", "DRÄPA", "DRÖJA", "DRÖMA", "DRÖMT", "DUKAR", "DUKAT", "DUMMA", "DUMPA", "DUNKA", 
  "DUSCH", "DYKAR", "DYKER", "DYNGA", "DYRKA", "DÅLIG", "DÄCKA", "DÄMPA", "DÖDAR", "DÖDEN", 
  "DÖLJA", "DÖMER", "DÖRRA",
  
  "EFTER", "ELAKA", "ELDAR", "ELDAS", "ELDIG", "ELLER", "ENKEL", "ENKLA", "ENORM", "ENTRÉ", 
  "EPISK", "EVIGA", "EXAKT", "EXTRA",
  
  "FABEL", "FACIT", "FADDA", "FAJTA", "FAKTA", "FALLA", "FALSK", "FARSA", "FATAL", "FATTA", 
  "FEBER", "FEMTE", "FESTA", "FIKON", "FILMA", "FINAL", "FINNA", "FINNS", "FISKA", "FISKE", 
  "FJORD", "FJOLL", "FJÄLL", "FJÄRR", "FLERA", "FLEST", "FLINK", "FLOCK", "FLORA", "FLUGA", 
  "FLYGA", "FLYKT", "FLÄCK", "FLÄKT", "FLÄSK", "FLÖDE", "FLÖJT", "FOKUS", "FOLIE", "FORMA", 
  "FORUM", "FOTEN", "FOTON", "FOTOT", "FRAKT", "FRANK", "FRONT", "FRUKT", "FRYSA", "FRYST", 
  "FRÄCK", "FRÄSA", "FULLT", "FUNKA", "FUSKA", "FYLLA", "FÅGEL", "FÅNGA", "FÄKTA", "FÄLLA", 
  "FÄRGE", "FÄRSK", "FÖLJA", "FÖNST", "FÖRBI", "FÖRRA", "FÖRST",
  
  "GALEN", "GAMLA", "GAMMA", "GARVA", "GATAN", "GAVEL", "GENOM", "GENUS", "GIFTA", "GILLA", 
  "GIPSA", "GISSA", "GIVEN", "GIVIT", "GJORT", "GLADA", "GLASA", "GLATT", "GLIDA", "GLÖGG", 
  "GLÖMA", "GLÖMT", "GNAGA", "GODIS", "GOLVE", "GRABB", "GRANN", "GRIND", "GRIPA", "GRODA", 
  "GROTT", "GRUND", "GRUPP", "GRYTA", "GRÅTA", "GRÅTT", "GRÄNS", "GRÄSA", "GRÖNA", "GRÖNT", 
  "GUBBE", "GUIDA", "GUNGA", "GÄRNA", "GÄSTA", "GÖMDA",
  
  "HACKA", "HAGLA", "HALKA", "HALVA", "HALVT", "HAMNA", "HAMRA", "HASTA", "HATAR", "HELGA", 
  "HELST", "HEMMA", "HETTA", "HINNA", "HISSA", "HITTA", "HJORT", "HJÄLP", "HJÄRN", "HJÄRT", 
  "HOBBY", "HOPPA", "HOSTA", "HOTAD", "HUMLA", "HUNNA", "HUSEN", "HUSET", "HUVUD", "HYFSA", 
  "HYLLA", "HYRAS", "HYSER", "HYTTA", "HÅLLA", "HÅRDA", "HÅRET", "HÄLSA", "HÄMTA", "HÄNDA", 
  "HÄNGA", "HÄRJA", "HÄRMA", "HÄXAN", "HÖGER", "HÖJDA", "HÖRDA", "HÖRST",
  
  "IDIOT", "INFÖR", "INGEN", "INGET", "INNAN", "INSÅG", "INSER", "INVID",
  
  "JAGAR", "JEANS", "JOBBA", "JOGGA", "JUBEL", "JUBLA", "JÄKLA", "JÄMNA", "JÄMTE", "JÄRNA", "JÄTTE",
  
  "KAFFE", "KAKAN", "KAKOR", "KALLA", "KALLT", "KAMIN", "KANIN", "KANNA", "KANSK", "KARTA", 
  "KASSA", "KASTA", "KAVLA", "KAXIG", "KEDJA", "KILAD", "KILAR", "KIPPA", "KLAGA", "KLAPP", 
  "KLARA", "KLART", "KLASS", "KLICK", "KLIPP", "KLIVA", "KLOCK", "KLOKA", "KLOKT", "KLOAK", 
  "KLOSS", "KLUMP", "KLÄDD", "KLÄMD", "KNAPP", "KNARK", "KNIPA", "KNYTA", "KOBRA", "KOFTA", 
  "KOKAR", "KOKAS", "KOKAT", "KOLJA", "KOLLA", "KOMET", "KOMMA", "KONST", "KONTO", "KOPPA", 
  "KORSA", "KORTA", "KOSTA", "KRAMA", "KRAMP", "KRETS", "KRISA", "KRITA", "KROPP", "KRUBB", 
  "KRUKA", "KRYPA", "KRÄKA", "KRÄVA", "KUDDE", "KUNDE", "KUNNA", "KURVA", "KUTAR", "KVARG", 
  "KVAST", "KVICK", "KVIGA", "KVIST", "KVITT", "KVÄLL", "KYLAN", "KYRKA", "KÄLLA", "KÄMPA", 
  "KÄNGA", "KÄNNA", "KÄRNA", "KÖPER", "KÖPTE", "KÖRDE",
  
  "LAGAR", "LAGAS", "LAGAT", "LAGEN", "LAGRA", "LAKAN", "LAMPA", "LAPPA", "LASER", "LASTA", 
  "LEDIG", "LEGAT", "LETAR", "LEVER", "LIGAN", "LIKNA", "LINJE", "LINNE", "LISTA", "LITEN", 
  "LJUGA", "LJUSA", "LJUST", "LOCKA", "LOJAL", "LOKAL", "LOPPA", "LUCKA", "LUGNA", "LUKTA", 
  "LUNKA", "LURAD", "LURAR", "LYCKA", "LYFTA", "LYFTS", "LYSER", "LÅNAR", "LÅNGA", "LÅNGT", 
  "LÅSER", "LÄGER", "LÄMNA", "LÄNGD", "LÄNGE", "LÄNKA", "LÄSER", "LÄTTA", "LÖFTE", "LÖNAR", 
  "LÖPER", "LÖSEN", "LÖSER",
  
  "MACHO", "MAKTA", "MAMMA", "MANGE", "MANKE", "MASSA", "MATCH", "MATEN", "MATTA", "MAXAR", 
  "MEJLA", "MENAR", "MERIT", "METER", "METOD", "MIKRO", "MILDA", "MILJÖ", "MINNA", "MINNS", 
  "MINST", "MINUS", "MISSA", "MJUKA", "MJUKT", "MJÖLK", "MOBBA", "MOBIL", "MODIG", "MODUL", 
  "MOGEN", "MOLNA", "MORAL", "MORSA", "MOTIV", "MOTOR", "MUSIK", "MYGGA", "MYNTA", "MYTEN", 
  "MÅLAR", "MÅNAD", "MÅNGA", "MÅSTE", "MÄKTA", "MÄNGD", "MÄRKA", "MÄTER", "MÖRKA", "MÖRKT", 
  "MÖTAS", "MÖTER", "MÖTET",
  
  "NAGEL", "NAKEN", "NAKNA", "NAPPA", "NATUR", "NEDAN", "NEDRE", "NICKA", "NJUTA", "NOLLA", 
  "NORSK", "NOTER", "NUDEL", "NUMRA", "NYANS", "NYHET", "NYLIG", "NYNNA", "NYTTA", "NÅDDE", 
  "NÅGON", "NÅGOT", "NÅGRA", "NÄMNA", "NÄMND", "NÄRMA", "NÄSAN", "NÄSTA", "NÖJDA", "NÖTTA",
  
  "OANAD", "OBILD", "OCKSÅ", "ODLAR", "ODLAT", "OLIKA", "ORDEN", "ORDNA", "OREDA", "ORENA", 
  "ORGAN", "ORMEN", "ORTEN", "OSTEN",
  
  "PACKA", "PAKET", "PALLA", "PANNA", "PAPPA", "PARAT", "PARTI", "PASTA", "PAUSA", "PENNA", 
  "PIANO", "PIGGA", "PILAR", "PILOT", "PIPPA", "PIZZA", "PLANA", "PLANK", "PLAST", "PLATT", 
  "PLATS", "PLUGG", "POJKE", "POKAL", "POLIS", "POSTA", "PRATA", "PRICK", "PRIMA", "PRINS", 
  "PRISA", "PROVA", "PRÄST", "PUMPA", "PUNKT", "PUSTA", "PUTSA", "PÄRLA", "PÄRON",
  
  "RADIO", "RAGGA", "RAKET", "RAMLA", "RAMMA", "RAPAR", "RAPPA", "RASAR", "RASTA", "REDAN", 
  "REGEL", "REGNA", "REJÄL", "RENSA", "RESAR", "RIMMA", "RINGA", "RITAR", "ROCKA", "ROLIG", 
  "ROMAN", "ROPAR", "ROTAD", "RUBIN", "RUGGA", "RULLA", "RUMPA", "RUSAR", "RUSIG", "RUSKA", 
  "RUTAN", "RYGGA", "RYKTE", "RYMMA", "RÄCKA", "RÄDDA", "RÄKNA", "RÄNTA", "RÄTTA", "RÄVEN", 
  "RÖKER", "RÖRAS", "RÖSTA",
  
  "SAKER", "SAKNA", "SALSA", "SALTA", "SAMLA", "SAMMA", "SANNA", "SATSA", "SEDAN", "SEGEL", 
  "SEGER", "SEGRA", "SEKEL", "SENAR", "SERIE", "SERVA", "SIDAN", "SIKTA", "SILKE", "SIMMA", 
  "SISTA", "SITTA", "SJUKA", "SJUKT", "SJUNK", "SJUNG", "SJÖSS", "SKADA", "SKALA", "SKAPA", 
  "SKARP", "SKATT", "SKENA", "SKICK", "SKINA", "SKINN", "SKIVA", "SKOJA", "SKOLA", "SKOPA", 
  "SKOTT", "SKRIV", "SKRYT", "SKULL", "SKURA", "SKYDD", "SKYGG", "SKYLD", "SKYLT", "SKÄGG", 
  "SKÄLL", "SKÄMT", "SKÄRM", "SKÖNA", "SKÖNT", "SKÖRD", "SKÖTA", "SLAKT", "SLAPP", "SLAVA", 
  "SLICK", "SLIPA", "SLITA", "SLOTT", "SLUMP", "SLUTA", "SLÄNG", "SLÅSS", "SLÄKT", "SLÄPP", 
  "SLÖJA", "SMAKA", "SMALA", "SMART", "SMIDA", "SMINK", "SMITA", "SMYGA", "SMÄRT", "SNABB", 
  "SNARK", "SNART", "SNEDA", "SNOBB", "SNOKA", "SNYGG", "SOFFA", "SOLEN", "SOLID", "SOPPA", 
  "SOVER", "SPANA", "SPARK", "SPELA", "SPETS", "SPIKA", "SPINN", "SPION", "SPIRA", "SPOLA", 
  "SPORT", "SPRAK", "SPRIT", "SPÅRA", "STARK", "STAVA", "STEGA", "STEKA", "STICK", "STIGA", 
  "STOCK", "STOLT", "STORA", "STORM", "STORT", "STRID", "STRÄV", "STUGA", "STUND", "STYRA", 
  "STÅTA", "STÄDA", "STÄLL", "STÄNG", "STÖKA", "STÖLD", "STÖNA", "STÖRT", "SUMMA", "SUPER", 
  "SURFA", "SVALA", "SVALT", "SVAGA", "SVARA", "SVART", "SVETT", "SVIKA", "SVÅRA", "SVÅRT", 
  "SVÄLT", "SVÄRD", "SVÄVA", "SYNDA", "SYNAS", "SÅDAN", "SÅRAR", "SÄGER", "SÄKER", "SÄLJA", 
  "SÄNKA", "SÄTTA", "SÖDER", "SÖKER", "SÖMNA",
  
  "TACKA", "TAGGA", "TAKET", "TALAR", "TAPPA", "TAVLA", "TEMPO", "TEORI", "TESTA", "TIDEN", 
  "TIDIG", "TIGGA", "TIMMA", "TIMME", "TIPSA", "TITTA", "TJATA", "TJOCK", "TJUGO", "TJUVA", 
  "TJÄNA", "TOKIG", "TOMMA", "TOPPA", "TRAMS", "TRAPP", "TRICK", "TRIVS", "TROTS", "TRYCK", 
  "TRÄNA", "TRÄNG", "TRÄFF", "TRÖJA", "TRÖST", "TRÖTT", "TUNGA", "TUNGT", "TUSAN", "TUSEN", 
  "TVEKA", "TVÅNG", "TVÄTT", "TYCKA", "TYSTA", "TÅGEN", "TÅGET", "TÅRAR", "TÄCKA", "TÄLTA", 
  "TÄNKA", "TÖMMA", "TÖRST",
  
  "UNDER", "UNGEF", "UNIKA", "UNIKT", "UPPGE", "URSÄK", "URVAL", "UTFÖR",
  
  "VAKEN", "VAKNA", "VARAN", "VARAV", "VARIT", "VARJE", "VARMA", "VARMT", "VARNA", "VECKA", 
  "VILDA", "VILJA", "VILKA", "VILLA", "VINKA", "VINNA", "VINST", "VISAR", "VISSA", "VISST", 
  "VREDE", "VRIDA", "VUXEN", "VÄCKA", "VÄGEN", "VÄLJA", "VÄNDA", "VÄRDE", "VÄRLD", "VÄRME", 
  "VÄRNA", "VÄRRE", "VÄSKA", "VÄXLA",
  
  "YRKEN", "YTTRE",
  "ZONEN",
  "ÅLDER", "ÅRETS", "ÅSIKT", "ÅSNAN",
  
  "ÄGARE", "ÄLDRE", "ÄLSKA", "ÄMNEN", "ÄNDRA", "ÄPPLE",
  "ÖNSKA", "ÖPPEN", "ÖPPNA", "ÖVRIG", "ÖDSLA","ÖSTER"
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