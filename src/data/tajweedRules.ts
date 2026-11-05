import { TajweedRule } from '../types/quran';

export const TAJWEED_RULES: TajweedRule[] = [
  {
    id: "idhhâr",
    title: "Al-Idhhâr Halqî (La Clarté)",
    arabicTitle: "الإِظْهَار الحَلْقِي",
    category: "noon_tanween",
    shortDesc: "Prononciation claire et distincte du Noun Sâkinah ou Tanween sans nasillement.",
    explanation: "Lorsque le Noun avec Soukoûn (نْ) ou le Tanwîn (ـً ـٍ ـٌ) est suivi de l'une des 6 lettres de la gorge, on le prononce de manière parfaitement claire et naturelle, sans allongement ni nasillement superflu.",
    color: "#0284c7", // Sky blue
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    letters: ["ء (Hamza)", "هـ (Hâ)", "ع ('Ayn)", "ح (Hâ')", "غ (Ghayn)", "خ (Khâ')"],
    examples: [
      {
        arabic: "مَنْ ءَامَنَ",
        surahRef: "Al-Baqarah: 62",
        transliteration: "Man âmana",
        explanation: "Le 'Noun' de 'Man' est prononcé clairement devant la Hamza."
      },
      {
        arabic: "أَنْعَمْتَ عَلَيْهِمْ",
        surahRef: "Al-Fâtiha: 7",
        transliteration: "An'amta 'alayhim",
        explanation: "Le 'Noun' de 'An'amta' est prononcé nettement devant le 'Ayn."
      },
      {
        arabic: "كُفُوًا أَحَدٌ",
        surahRef: "Al-Ikhlâs: 4",
        transliteration: "Kufuwan ahad",
        explanation: "Le Tanween de 'Kufuwan' est clair devant la Hamza de 'Ahad'."
      }
    ]
  },
  {
    id: "idghâm_ghunnah",
    title: "Al-Idghâm bi-Ghunnah (Fusion avec Nasillement)",
    arabicTitle: "الإِدْغَام بِغُنَّة",
    category: "noon_tanween",
    shortDesc: "Fusion du Noun/Tanween dans la lettre suivante avec 2 temps de nasillement.",
    explanation: "Lorsque le Noun Sâkinah ou le Tanwîn rencontre l'une des 4 lettres réunies dans le mot 'YAMNOU' (ي - ن - م - و), le son 'N' disparaît pour se fondre dans la lettre suivante avec un nasillement harmonieux de 2 temps (Ghunnah).",
    color: "#16a34a", // Emerald green
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    letters: ["ي (Yâ')", "ن (Noûn)", "م (Mîm)", "و (Wâw)"],
    examples: [
      {
        arabic: "مَن يَقُولُ",
        surahRef: "Al-Baqarah: 8",
        transliteration: "May-yaqoûl (se prononce avec résonance nasale)",
        explanation: "Le Noun s'assimile dans le Yâ' avec 2 temps de Ghunnah."
      },
      {
        arabic: "مِن وَالٍ",
        surahRef: "Ar-Ra'd: 11",
        transliteration: "Miw-wâlin",
        explanation: "Le Noun fusionne dans le Wâw."
      },
      {
        arabic: "خَيْرًا يَرَهُ",
        surahRef: "Az-Zalzalah: 7",
        transliteration: "Khayray-yarah",
        explanation: "Le Tanween fusionne dans le Yâ'."
      }
    ]
  },
  {
    id: "idghâm_bila_ghunnah",
    title: "Al-Idghâm bilâ Ghunnah (Fusion sans Nasillement)",
    arabicTitle: "الإِدْغَام بِغَيْرِ غُنَّة",
    category: "noon_tanween",
    shortDesc: "Assimilation totale et nette dans le Lâm ou le Râ sans vibration nasale.",
    explanation: "Si le Noun Sâkinah ou le Tanwîn est suivi des lettres L (ل) ou R (ر), le son 'N' disparaît totalement et la lettre suivante est doublée (avec Shaddah), sans aucun nasillement.",
    color: "#0d9488", // Teal
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    letters: ["ل (Lâm)", "ر (Râ')"],
    examples: [
      {
        arabic: "مِن رَّبِّهِمْ",
        surahRef: "Al-Baqarah: 5",
        transliteration: "Mir-rabbihim (et non min rabbihim)",
        explanation: "Le Noun fusionne immédiatement dans le Râ'."
      },
      {
        arabic: "هُدًى لِّلْمُتَّقِينَ",
        surahRef: "Al-Baqarah: 2",
        transliteration: "Hudal-lil-muttaqîn",
        explanation: "Le Tanween fusionne sans pause dans le Lâm."
      }
    ]
  },
  {
    id: "iqlâb",
    title: "Al-Iqlâb (La Transformation)",
    arabicTitle: "الإِقْلَاب",
    category: "noon_tanween",
    shortDesc: "Transformation du Noun/Tanween en un son Mîm doux devant la lettre Bâ'.",
    explanation: "Lorsque le Noun Sâkinah ou le Tanwîn est suivi de la lettre Bâ' (ب), il se transforme phonétiquement en un Mîm (م) nasillé pendant 2 temps avec un contact léger des lèvres. Dans le Coran, un petit 'م' est écrit au-dessus.",
    color: "#d97706", // Amber
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    letters: ["ب (Bâ')"],
    examples: [
      {
        arabic: "مِنۢ بَعْدِ",
        surahRef: "Al-Baqarah: 27",
        transliteration: "Mim-ba'di (lèvres douces avec 2 temps de nasillement)",
        explanation: "Le Noun devient un Mîm doux devant la lettre Bâ'."
      },
      {
        arabic: "عَلِيمٌۢ بِذَاتِ الصُّدُورِ",
        surahRef: "Ali 'Imrân: 154",
        transliteration: "'Alîmum-bidhâti...",
        explanation: "Le Tanween se métamorphose en Mîm."
      }
    ]
  },
  {
    id: "ikhfâ",
    title: "Al-Ikhfâ' Haqîqî (La Dissimulation)",
    arabicTitle: "الإِخْفَاء الحَقِيقِي",
    category: "noon_tanween",
    shortDesc: "Dissimulation subtile du Noun à mi-chemin entre clarté et fusion avec Ghunnah.",
    explanation: "Devant les 15 lettres restantes (ص, ذ, ث, ك, ج, ش, ق, س, د, ط, ز, ف, ت, ض, ظ), on dissimule la langue près du point de sortie de la lettre suivante tout en émettant un nasillement mélodieux de 2 temps.",
    color: "#e11d48", // Rose
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    letters: ["ص", "ذ", "ث", "ك", "ج", "ش", "ق", "س", "د", "ط", "ز", "ف", "ت", "ض", "ظ"],
    examples: [
      {
        arabic: "مِن شَرِّ",
        surahRef: "Al-Falaq: 2",
        transliteration: "Min sharri (nasillement dissimulé devant Shîn)",
        explanation: "La langue se prépare au 'Ch' avec Ghunnah de 2 temps."
      },
      {
        arabic: "كُنتُمْ",
        surahRef: "Al-Baqarah: 23",
        transliteration: "Kuntum (dissimulation devant Tâ')",
        explanation: "Noun dissimulé au cœur du mot."
      },
      {
        arabic: "أَنفُسَهُمْ",
        surahRef: "Al-Baqarah: 9",
        transliteration: "Anfusahum",
        explanation: "Dissimulation devant la lettre Fâ'."
      }
    ]
  },
  {
    id: "qalqalah",
    title: "Al-Qalqalah (L'Écho / Le Rebond)",
    arabicTitle: "القَلْقَلَة",
    category: "qalqalah",
    shortDesc: "Rebond sonore dynamique sur les 5 lettres 'QUTB JADD' (ق ط ب ج د) avec Soukoun.",
    explanation: "Ces 5 lettres possèdent une telle force d'occlusion que lorsqu'elles sont avec Soukoûn (ou à l'arrêt du verset), on produit un rebond sec et vibrant pour libérer le son sans rajouter de voyelle.",
    color: "#8b5cf6", // Purple
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    letters: ["ق (Qâf)", "ط (Tâ')", "ب (Bâ')", "ج (Jîm)", "د (Dâl) — Mémo: 'قُطْبُ جَدّ'"],
    examples: [
      {
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝",
        surahRef: "Al-Ikhlâs: 1",
        transliteration: "Qul Huwa-llâhu Ahad[d] (rebond sur le Dâl final à l'arrêt)",
        explanation: "Rebond puissant sur le Dâl lors de la pause."
      },
      {
        arabic: "فِي كَبَدٍ ۝",
        surahRef: "Al-Balad: 4",
        transliteration: "Fî kabad[d]",
        explanation: "Rebond de fin de verset."
      },
      {
        arabic: "مَا كَسَبَ ۝",
        surahRef: "Al-Masad: 2",
        transliteration: "Mâ kasab[b]",
        explanation: "Rebond sur la lettre Bâ' à l'arrêt."
      }
    ]
  },
  {
    id: "madd_wajib",
    title: "Al-Madd Al-Wâjib Muttasil (Prolongation Obligatoire)",
    arabicTitle: "المَدّ الوَاجِب المُتَّصِل",
    category: "madd",
    shortDesc: "Prolongation de 4 à 5 temps quand la lettre de Madd et la Hamza sont dans le même mot.",
    explanation: "Repéré par un symbole ondulé (~) au-dessus de la voyelle longue (ا, و, ي). Si la Hamza (ء) fait partie du même mot, on étire la récitation pendant 4 ou 5 temps de pulsation régulière.",
    color: "#ea580c", // Orange
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
    letters: ["~ ا (Alif)", "~ و (Wâw)", "~ ي (Yâ') suivis de ء dans le même mot"],
    examples: [
      {
        arabic: "إِذَا جَآءَ نَصْرُ اللَّهِ",
        surahRef: "An-Nasr: 1",
        transliteration: "Idhâ jâââ'a nasru-llâh",
        explanation: "Madd de 4 à 5 temps sur 'Jâ'a'."
      },
      {
        arabic: "وَالسَّمَآءِ",
        surahRef: "At-Târiq: 1",
        transliteration: "Was-samâââ'i",
        explanation: "Prolongation de 4-5 temps dans le même mot."
      }
    ]
  },
  {
    id: "madd_jaiz",
    title: "Al-Madd Al-Jâ'iz Munfasil (Prolongation Permise)",
    arabicTitle: "المَدّ الجَائِز المُنْفَصِل",
    category: "madd",
    shortDesc: "Prolongation de 4 à 5 temps lorsque la Hamza se situe au début du mot suivant.",
    explanation: "La lettre de prolongation (Alif, Waw ou Ya avec ~) termine un mot, et le mot suivant commence par une Hamza. On l'allonge de 4 à 5 temps (ou 2 temps selon certaines lectures).",
    color: "#f59e0b", // Amber gold
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    letters: ["Lettre de Madd en fin de mot + Hamza au début du mot suivant"],
    examples: [
      {
        arabic: "إِنَّآ أَعْطَيْنَاكَ الْكَوْثَرَ",
        surahRef: "Al-Kawthar: 1",
        transliteration: "Innâââ a'taynâka-l-kawthar",
        explanation: "Madd séparé entre 'Innâ' et 'A'taynâka'."
      },
      {
        arabic: "يَآ أَيُّهَا النَّاسُ",
        surahRef: "An-Nisâ': 1",
        transliteration: "Yâââ ayyuhan-nâs",
        explanation: "Madd Munfasil très fréquent dans le Coran."
      }
    ]
  },
  {
    id: "madd_lazim",
    title: "Al-Madd Al-Lâzim (Prolongation Indispensable 6 temps)",
    arabicTitle: "المَدّ اللَّازِم",
    category: "madd",
    shortDesc: "Prolongation maximale de 6 temps stricts lorsque la lettre de Madd est suivie d'une Shaddah ou d'un Soukoun d'origine.",
    explanation: "C'est la prolongation la plus longue et solennelle du Coran. Elle dure obligatoirement 6 temps complets sans déviation.",
    color: "#c026d3", // Fuchsia
    badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    letters: ["Madd suivi d'une Shaddah ou d'un Soukoun fixe"],
    examples: [
      {
        arabic: "وَلَا الضَّآلِّينَ ۝",
        surahRef: "Al-Fâtiha: 7",
        transliteration: "Wa lad-dââââââllîn",
        explanation: "Madd Lâzim Kalimî Muthaqqal de 6 temps avant la Shaddah sur le Lâm."
      },
      {
        arabic: "الْحَآقَّةُ",
        surahRef: "Al-Hâqqah: 1",
        transliteration: "Al-Hââââââqqah",
        explanation: "6 temps complets de récitation."
      }
    ]
  },
  {
    id: "tafkhim",
    title: "At-Tafkhîm & At-Tarqîq (Lourdeur & Douceur)",
    arabicTitle: "التَّفْخِيم وَالتَّرْقِيق",
    category: "tafkhim",
    shortDesc: "Maîtrise des lettres lourdes (emphatiques) et légères pour préserver la beauté phonétique.",
    explanation: "Les 7 lettres de 'Khussa Daghtin Qizh' (خ ص ض غ ط ق ظ) sont toujours prononcées avec la bouche pleine et le fond de langue relevé. Les autres lettres sont légères, avec des règles spécifiques pour le Râ (ر) et le nom d'Allah (اللَّه).",
    color: "#4f46e5", // Indigo
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    letters: ["خ, ص, ض, غ, ط, ق, ظ — Mnémo: خُصَّ ضَغْطٍ قِظْ"],
    examples: [
      {
        arabic: "الصِّرَاطَ الْمُسْتَقِيمَ",
        surahRef: "Al-Fâtiha: 6",
        transliteration: "As-Sirâta-l-mustaqîm",
        explanation: "Sâd et Tâ' sont lourdes, tandis que Sîn de 'Mustaqîm' est légère et fine."
      },
      {
        arabic: "بِسْمِ اللَّهِ (léger) vs شَهِدَ اللَّهُ (lourd)",
        surahRef: "Usage quotidien",
        transliteration: "Bismi-llâh vs Shahida-llâhu",
        explanation: "Le Lâm d'Allah est allégé après une Kasra, et alourdi après une Fatha ou Damma."
      }
    ]
  }
];
