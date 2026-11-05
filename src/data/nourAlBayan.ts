import { NourLesson } from '../types/quran';

export const NOUR_AL_BAYAN_LESSONS: NourLesson[] = [
  {
    id: "nour_1",
    number: 1,
    title: "Leçon 1 : Les 28 Lettres Épousant leurs Noms (حُرُوفُ الهِجَاءِ)",
    arabicTitle: "حُرُوفُ الهِجَاءِ المُفْرَدَة",
    ruleExplanation: "Première étape du livre Nour Al-Bayan : maîtriser le nom pur de chaque lettre arabe isolée avant de lui appliquer les voyelles. Chaque lettre doit être nommée avec précision.",
    lettersList: [
      "أَلِف", "بَاء", "تَاء", "ثَاء", "جِيم", "حَاء", "خَاء",
      "دَال", "ذَال", "رَاء", "زَاي", "سِين", "شِين", "صَاد",
      "ضَاد", "طَاء", "ظَاء", "عَيْن", "غَيْن", "فَاء", "قَاف",
      "كَاف", "لَام", "مِيم", "نُون", "هَاء", "وَاو", "يَاء"
    ],
    words: [
      { arabic: "أَلِف", transliteration: "Alif", meaningFr: "Première lettre", breakdown: ["أَ", "لِـ", "ـف"] },
      { arabic: "بَاء", transliteration: "Bâ'", meaningFr: "Lettre Bâ", breakdown: ["بـَ", "ا", "ء"] },
      { arabic: "تَاء", transliteration: "Tâ'", meaningFr: "Lettre Tâ", breakdown: ["تـَ", "ا", "ء"] },
      { arabic: "ثَاء", transliteration: "Thâ'", meaningFr: "Lettre Thâ (interdentale)", breakdown: ["ثـَ", "ا", "ء"] },
      { arabic: "جِيم", transliteration: "Jîm", meaningFr: "Lettre Jîm", breakdown: ["جـِ", "يـ", "ـم"] },
      { arabic: "حَاء", transliteration: "Hâ'", meaningFr: "Lettre Hâ (milieu de gorge)", breakdown: ["حـَ", "ا", "ء"] },
      { arabic: "خَاء", transliteration: "Khâ'", meaningFr: "Lettre Khâ (lourde)", breakdown: ["خـَ", "ا", "ء"] },
      { arabic: "دَال", transliteration: "Dâl", meaningFr: "Lettre Dâl", breakdown: ["دَ", "ا", "ل"] }
    ],
    practiceSentence: {
      arabic: "أَلِف بَاء تَاء ثَاء جِيم حَاء خَاء",
      transliteration: "Alif, Bâ', Tâ', Thâ', Jîm, Hâ', Khâ'",
      translationFr: "Première série des lettres selon la méthode Nour Al-Bayan."
    }
  },
  {
    id: "nour_2",
    number: 2,
    title: "Leçon 2 : La Fatha et Mots de 3 Lettres (حَرَكَةُ الفَتْحِ)",
    arabicTitle: "حَرَكَةُ الفَتْحِ وَكَلِمَاتُهَا",
    ruleExplanation: "La Fatha (ـَ) est un trait oblique au-dessus de la consonne. Elle produit le son bref 'a'. On commence la lecture des mots simples de trois lettres sans aucune prolongation.",
    words: [
      { arabic: "دَرَسَ", transliteration: "Da - Ra - Sa", meaningFr: "Il a étudié", breakdown: ["دَ", "رَ", "سَ"] },
      { arabic: "كَتَبَ", transliteration: "Ka - Ta - Ba", meaningFr: "Il a écrit", breakdown: ["كَـ", "ـتَـ", "ـبَ"] },
      { arabic: "وَجَدَ", transliteration: "Wa - Ja - Da", meaningFr: "Il a trouvé", breakdown: ["وَ", "جَـ", "ـدَ"] },
      { arabic: "زَرَعَ", transliteration: "Za - Ra - 'A", meaningFr: "Il a semé", breakdown: ["زَ", "رَ", "عَ"] },
      { arabic: "قَرَأَ", transliteration: "Qa - Ra - 'A", meaningFr: "Il a lu", breakdown: ["قَـ", "ـرَ", "أَ"] },
      { arabic: "بَلَغَ", transliteration: "Ba - La - Gha", meaningFr: "Il a atteint", breakdown: ["بَـ", "ـلَـ", "ـغَ"] },
      { arabic: "جَمَعَ", transliteration: "Ja - Ma - 'A", meaningFr: "Il a rassemblé", breakdown: ["جَـ", "ـمَـ", "ـعَ"] },
      { arabic: "صَدَقَ", transliteration: "Sa - Da - Qa", meaningFr: "Il a dit vrai", breakdown: ["صَـ", "ـدَ", "قَ"] }
    ],
    practiceSentence: {
      arabic: "زَرَعَ وَ حَصَدَ فـَنَجَحَ",
      transliteration: "Zara'a wa hasada fa-najaha",
      translationFr: "Il a semé, puis il a récolté, alors il a réussi."
    }
  },
  {
    id: "nour_3",
    number: 3,
    title: "Leçon 3 : La Kasra et Alternance Fatha/Kasra (حَرَكَةُ الكَسْرِ)",
    arabicTitle: "حَرَكَةُ الكَسْرِ وَتَمَارِينُهَا",
    ruleExplanation: "La Kasra (ـِ) est un trait placé sous la lettre produisant le son bref 'i'. Nour Al-Bayan entraîne l'élève à basculer souplement de l'ouverture (Fatha) vers l'abaissement (Kasra).",
    words: [
      { arabic: "سَمِعَ", transliteration: "Sa - Mi - 'A", meaningFr: "Il a entendu", breakdown: ["سَـ", "ـمِـ", "ـعَ"] },
      { arabic: "عَلِمَ", transliteration: "'A - Li - Ma", meaningFr: "Il a su / appris", breakdown: ["عَـ", "ـلِـ", "ـمَ"] },
      { arabic: "شَرِبَ", transliteration: "Sha - Ri - Ba", meaningFr: "Il a bu", breakdown: ["شَـ", "ـرِ", "بَ"] },
      { arabic: "رَحِمَ", transliteration: "Ra - Hi - Ma", meaningFr: "Il a fait miséricorde", breakdown: ["رَ", "حِـ", "ـمَ"] },
      { arabic: "حَمِدَ", transliteration: "Ha - Mi - Da", meaningFr: "Il a loué", breakdown: ["حَـ", "ـمِـ", "ـدَ"] },
      { arabic: "فَرِحَ", transliteration: "Fa - Ri - Ha", meaningFr: "Il s'est réjoui", breakdown: ["فَـ", "ـرِ", "حَ"] },
      { arabic: "غَضِبَ", transliteration: "Gha - Di - Ba", meaningFr: "Il s'est mis en colère", breakdown: ["غَـ", "ـضِـ", "ـبَ"] },
      { arabic: "عَقِلَ", transliteration: "'A - Qi - La", meaningFr: "Il a raisonné", breakdown: ["عَـ", "ـقِـ", "ـلَ"] }
    ],
    practiceSentence: {
      arabic: "عَلِمَ فـَعَمِلَ فـَرَبِحَ",
      transliteration: "'Alima fa-'amila fa-rabiha",
      translationFr: "Il a appris, puis il a œuvré, alors il a gagné."
    }
  },
  {
    id: "nour_4",
    number: 4,
    title: "Leçon 4 : La Damma et les 3 Mouvements Réunis (حَرَكَةُ الضَّمِّ)",
    arabicTitle: "حَرَكَةُ الضَّمِّ مَعَ الفَتْحِ وَالكَسْرِ",
    ruleExplanation: "La Damma (ـُ) arrondit les lèvres vers le son 'ou'. À ce stade de Nour Al-Bayan, l'étudiant lit des mots conjugués au passif réunissant les trois voyelles fondamentales (ـُ ـِ ـَ).",
    words: [
      { arabic: "كُتِبَ", transliteration: "Ku - Ti - Ba", meaningFr: "Il a été prescrit", breakdown: ["كُـ", "ـتِـ", "ـبَ"] },
      { arabic: "خُلِقَ", transliteration: "Khu - Li - Qa", meaningFr: "Il a été créé", breakdown: ["خُـ", "ـلِـ", "ـقَ"] },
      { arabic: "جُمِعَ", transliteration: "Ju - Mi - 'A", meaningFr: "Il a été réuni", breakdown: ["جُـ", "ـمِـ", "ـعَ"] },
      { arabic: "فُتِحَ", transliteration: "Fu - Ti - Ha", meaningFr: "Il a été ouvert", breakdown: ["فُـ", "ـتِـ", "ـحَ"] },
      { arabic: "رُزِقَ", transliteration: "Ru - Zi - Qa", meaningFr: "Il a été pourvu", breakdown: ["رُ", "زِ", "قَ"] },
      { arabic: "ذُكِرَ", transliteration: "Dhu - Ki - Ra", meaningFr: "Il a été mentionné", breakdown: ["ذُ", "كِـ", "ـرَ"] },
      { arabic: "ضُرِبَ", transliteration: "Du - Ri - Ba", meaningFr: "Il a été frappé (décrit)", breakdown: ["ضُـ", "ـرِ", "بَ"] },
      { arabic: "بُعِثَ", transliteration: "Bu - 'I - Tha", meaningFr: "Il a été suscité / envoyé", breakdown: ["بُـ", "ـعِـ", "ـثَ"] }
    ],
    practiceSentence: {
      arabic: "خُلِقَ الإِنسَانُ فِي كَبَدٍ",
      transliteration: "Khuliqa-l-insânu fî kabad",
      translationFr: "L'homme a certes été créé pour une vie d'efforts."
    }
  },
  {
    id: "nour_5",
    number: 5,
    title: "Leçon 5 : Les Prolongations Naturelles (حُرُوفُ المَدِّ الثَّلَاثَة)",
    arabicTitle: "المَدُّ بِالأَلِفِ وَاليَاءِ وَالوَاوِ",
    ruleExplanation: "Les voyelles longues allongent la récitation de deux temps réguliers (Alif précédé de Fatha, Ya précédé de Kasra, Waw précédé de Damma). Nour Al-Bayan met l'accent sur la distinction nette entre voyelle brève et prolongation.",
    words: [
      { arabic: "قَالَ", transliteration: "Qâla (Madd Alif)", meaningFr: "Il a dit", breakdown: ["قـَ", "ا", "لَ"] },
      { arabic: "كَانَ", transliteration: "Kâna (Madd Alif)", meaningFr: "Il était", breakdown: ["كـَ", "ا", "نَ"] },
      { arabic: "قِيلَ", transliteration: "Qîla (Madd Ya)", meaningFr: "Il a été dit", breakdown: ["قـِ", "يـ", "ـلَ"] },
      { arabic: "دِينِ", transliteration: "Dîni (Madd Ya)", meaningFr: "Religion / Jugement", breakdown: ["دِ", "يـ", "ـنِ"] },
      { arabic: "يَقُولُ", transliteration: "Yaqûlu (Madd Waw)", meaningFr: "Il dit", breakdown: ["يـَ", "قُـ", "و", "لُ"] },
      { arabic: "نُورُ", transliteration: "Nûru (Madd Waw)", meaningFr: "Lumière", breakdown: ["نـُ", "و", "رُ"] },
      { arabic: "صَابِرِينَ", transliteration: "Sâbirîn (Double Madd)", meaningFr: "Les patients", breakdown: ["صَـ", "ا", "بِـ", "رِ", "يـ", "ـنَ"] },
      { arabic: "غَفُورٌ", transliteration: "Ghafûr (Madd Waw)", meaningFr: "Pardonneur", breakdown: ["غـَ", "فـُ", "و", "رٌ"] }
    ],
    practiceSentence: {
      arabic: "قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ",
      transliteration: "Qâla-llâhu hâdhâ yawmu yanfa'u-s-sâdiqîna sidquhum",
      translationFr: "Allah dit : 'Voilà le jour où leur sincérité profitera aux véridiques.'"
    }
  },
  {
    id: "nour_6",
    number: 6,
    title: "Leçon 6 : Le Soukoûn et la Syllabe Fermée (السُّكُون)",
    arabicTitle: "حُكْمُ السُّكُونِ وَقِرَاءَةُ المَقْطَعِ",
    ruleExplanation: "Le Soukoûn (ـْ) marque l'absence de voyelle. Une lettre avec soukoûn ne peut jamais être prononcée seule : elle s'attache toujours à la lettre voyellée qui la précède pour former une syllabe complète.",
    words: [
      { arabic: "قُلْ", transliteration: "Qul", meaningFr: "Dis !", breakdown: ["قُـ", "ـلْ"] },
      { arabic: "هَلْ", transliteration: "Hal", meaningFr: "Est-ce que... ?", breakdown: ["هَـ", "ـلْ"] },
      { arabic: "يَعْلَمُ", transliteration: "Ya'lamu", meaningFr: "Il sait", breakdown: ["يـَ", "عْـ", "ـلـَ", "ـمُ"] },
      { arabic: "يَفْعَلُ", transliteration: "Yaf'alu", meaningFr: "Il fait", breakdown: ["يـَ", "فْـ", "ـعـَ", "ـلُ"] },
      { arabic: "أَنْعَمْتَ", transliteration: "An'amta", meaningFr: "Tu as comblé de bienfaits", breakdown: ["أَ", "نْ", "عـَ", "ـمْـ", "ـتَ"] },
      { arabic: "يَشْرَبُ", transliteration: "Yashrabu", meaningFr: "Il boit", breakdown: ["يـَ", "شْـ", "ـرَ", "بُ"] },
      { arabic: "يَخْلُقُ", transliteration: "Yakhluqu", meaningFr: "Il crée", breakdown: ["يـَ", "خْـ", "ـلـُ", "ـقُ"] },
      { arabic: "فَاصْبِرْ", transliteration: "Fasbir", meaningFr: "Patiente donc !", breakdown: ["فـَ", "اصْـ", "ـبـِ", "ـرْ"] }
    ],
    practiceSentence: {
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      transliteration: "Alam nashrah laka sadrak",
      translationFr: "N'avons-Nous pas ouvert pour toi ta poitrine ?"
    }
  },
  {
    id: "nour_7",
    number: 7,
    title: "Leçon 7 : Le Tanwîn sous ses 3 Formes (التَّنْوِين)",
    arabicTitle: "التَّنْوِينُ بِالفَتْحِ وَالكَسْرِ وَالضَّمِّ",
    ruleExplanation: "Le Tanwîn est un Noûn sâkinah non écrit qui se prononce à la fin des noms indéfinis. Il existe en trois déclinaisons : Fathatayn (ـً -an), Kasratayn (ـٍ -in), et Dammatayn (ـٌ -oun).",
    words: [
      { arabic: "كِتَابًا", transliteration: "Kitâban (Tanwin Fath)", meaningFr: "Un livre (acc.)", breakdown: ["كِـ", "ـتَـ", "ا", "بـً", "ا"] },
      { arabic: "كِتَابٍ", transliteration: "Kitâbin (Tanwin Kasr)", meaningFr: "D'un livre (gén.)", breakdown: ["كِـ", "ـتَـ", "ا", "بـٍ"] },
      { arabic: "كِتَابٌ", transliteration: "Kitâbun (Tanwin Damm)", meaningFr: "Un livre (nom.)", breakdown: ["كِـ", "ـتَـ", "ا", "بـٌ"] },
      { arabic: "رَحِيمًا", transliteration: "Rahîman", meaningFr: "Miséricordieux", breakdown: ["رَ", "حِـ", "يـ", "ـمـً", "ا"] },
      { arabic: "سَلَامٌ", transliteration: "Salâmun", meaningFr: "Paix", breakdown: ["سَـ", "ـلَـ", "ا", "مـٌ"] },
      { arabic: "غَفُورٌ", transliteration: "Ghafûrun", meaningFr: "Pardonneur", breakdown: ["غـَ", "فـُ", "و", "رٌ"] },
      { arabic: "مَاءً", transliteration: "Mâ'an", meaningFr: "De l'eau", breakdown: ["مـَ", "ا", "ءً"] },
      { arabic: "نَفْعًا", transliteration: "Naf'an", meaningFr: "Une utilité", breakdown: ["نـَ", "فْـ", "ـعـً", "ا"] }
    ],
    practiceSentence: {
      arabic: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
      transliteration: "Wa kâna-llâhu Ghafûran Rahîmâ",
      translationFr: "Et Allah est Pardonneur et Très Miséricordieux."
    }
  },
  {
    id: "nour_8",
    number: 8,
    title: "Leçon 8 : La Shaddah / Consonne Doublée (الشَّدَّة)",
    arabicTitle: "الشَّدَّةُ مَعَ الحَرَكَاتِ وَالتَّنْوِينِ",
    ruleExplanation: "La Shaddah (ـّ) indique qu'une lettre est présente deux fois : la première fois avec un Soukoûn et la seconde avec une voyelle. Elle se prononce avec appui et fermeté.",
    words: [
      { arabic: "رَبَّنَا", transliteration: "Rabbanâ (Rab-ba-nâ)", meaningFr: "Notre Seigneur", breakdown: ["رَ", "بْـ", "بـَ", "نـَ", "ا"] },
      { arabic: "عَلَّمَ", transliteration: "'Allama ('Al-la-ma)", meaningFr: "Il a enseigné", breakdown: ["عَـ", "ـلْـ", "ـلـَ", "ـمَ"] },
      { arabic: "قَدَّرَ", transliteration: "Qaddara (Qad-da-ra)", meaningFr: "Il a décrété avec mesure", breakdown: ["قـَ", "ـدْ", "دَ", "رَ"] },
      { arabic: "بَشَّرَ", transliteration: "Bash-shara", meaningFr: "Il a annoncé la bonne nouvelle", breakdown: ["بـَ", "ـشْـ", "ـشـَ", "ـرَ"] },
      { arabic: "يُمَزِّقُ", transliteration: "Yumazziqu", meaningFr: "Il déchire", breakdown: ["يـُ", "مـَ", "زْ", "زِ", "قُ"] },
      { arabic: "الصَّلَاةَ", transliteration: "As-Salâta", meaningFr: "La prière", breakdown: ["ا", "لـ", "صْـ", "ـصـَ", "ـلـَ", "ا", "ةَ"] },
      { arabic: "حَقٌّ", transliteration: "Haqqun (Haq-qun)", meaningFr: "Vérité certaine", breakdown: ["حـَ", "ـقْ", "قٌ"] },
      { arabic: "مُحَمَّدٌ", transliteration: "Muhammadun (Mu-ham-mad)", meaningFr: "Muhammad ﷺ", breakdown: ["مـُ", "حـَ", "ـمْـ", "ـمـَ", "ـدٌ"] }
    ],
    practiceSentence: {
      arabic: "عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ",
      transliteration: "'Allama-l-insâna mâ lam ya'lam",
      translationFr: "Il a enseigné à l'homme ce qu'il ne savait pas."
    }
  },
  {
    id: "nour_9",
    number: 9,
    title: "Leçon 9 : Al-Lâm Lunaire & Solaire (اللَّامُ القَمَرِيَّةُ وَالشَّمْسِيَّةُ)",
    arabicTitle: "الَّلامُ القَمَرِيَّةُ وَالشَّمْسِيَّةُ فِي رَسْمِ المُصْحَفِ",
    ruleExplanation: "Dernière étape clé de Nour Al-Bayan : avec Al-Lâm Al-Qamariyyah, le Lâm porte un soukoûn et se prononce distinctement (ex: الْقَمَر). Avec Al-Lâm Ash-Shamsiyyah, le Lâm est muet et la lettre suivante prend une Shaddah (ex: الشَّمْس).",
    words: [
      { arabic: "الْقَمَرُ", transliteration: "Al-Qamaru (Lunaire)", meaningFr: "La Lune", breakdown: ["ا", "لْـ", "ـقـَ", "ـمـَ", "ـرُ"] },
      { arabic: "الْكِتَابُ", transliteration: "Al-Kitâbu (Lunaire)", meaningFr: "Le Livre", breakdown: ["ا", "لْـ", "ـكِـ", "ـتَـ", "ا", "بُ"] },
      { arabic: "الْحَمْدُ", transliteration: "Al-Hamdu (Lunaire)", meaningFr: "La Louange", breakdown: ["ا", "لْـ", "ـحـَ", "ـمْـ", "ـدُ"] },
      { arabic: "الشَّمْسُ", transliteration: "Ash-Shamsu (Solaire)", meaningFr: "Le Soleil", breakdown: ["ا", "ل", "شْـ", "ـشـَ", "ـمْـ", "ـسُ"] },
      { arabic: "الرَّحْمَٰنُ", transliteration: "Ar-Rahmânu (Solaire)", meaningFr: "Le Tout Miséricordieux", breakdown: ["ا", "ل", "رْ", "رَ", "حْـ", "ـمـَ", "ا", "نُ"] },
      { arabic: "النَّاسُ", transliteration: "An-Nâsu (Solaire)", meaningFr: "Les Hommes", breakdown: ["ا", "ل", "نْـ", "ـنـَ", "ا", "سُ"] },
      { arabic: "الصِّرَاطُ", transliteration: "As-Sirâtu (Solaire)", meaningFr: "La Voie droite", breakdown: ["ا", "ل", "صْـ", "ـصِـ", "ـرَ", "ا", "طُ"] },
      { arabic: "التِّينُ", transliteration: "At-Tînu (Solaire)", meaningFr: "Le Figuier", breakdown: ["ا", "ل", "تْـ", "ـتِـ", "يـ", "ـنُ"] }
    ],
    practiceSentence: {
      arabic: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
      transliteration: "Ash-shamsu wal-qamaru bi-husbân",
      translationFr: "Le soleil et la lune évoluent selon un calcul minutieux."
    }
  }
];
