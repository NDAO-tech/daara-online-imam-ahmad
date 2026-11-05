import { ArabicLetter } from '../types/quran';

export const ARABIC_LETTERS: ArabicLetter[] = [
  {
    id: 1,
    name: "Alif",
    nameArabic: "أَلِف",
    transliteration: "a / â",
    isolated: "ا",
    initial: "ا",
    medial: "ـا",
    final: "ـا",
    makhraj: {
      zone: "Cavité buccale / Nasale",
      description: "Le vide de la bouche et de la gorge (Al-Jawf). C'est le support des voyelles longues."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "أَمَل",
      transliteration: "Amal",
      meaning: "Espoir"
    },
    audioPhoneticDescription: "Son 'a' franc et net comme dans 'ami'."
  },
  {
    id: 2,
    name: "Bâ'",
    nameArabic: "بَاء",
    transliteration: "b",
    isolated: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب",
    makhraj: {
      zone: "Lèvres",
      description: "Jonction franche des deux lèvres l'une contre l'autre avec occlusion puis ouverture."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "بَاب",
      transliteration: "Bâb",
      meaning: "Porte"
    },
    audioPhoneticDescription: "Son 'b' identique au français."
  },
  {
    id: 3,
    name: "Tâ'",
    nameArabic: "تَاء",
    transliteration: "t",
    isolated: "ت",
    initial: "تـ",
    medial: "ـتـ",
    final: "ـت",
    makhraj: {
      zone: "Dents / Palais",
      description: "Bout de la langue appuyé sur la racine des deux incisives supérieures."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "تِين",
      transliteration: "Tîn",
      meaning: "Figue"
    },
    audioPhoneticDescription: "Son 't' doux et net, sans trop d'aspiration."
  },
  {
    id: 4,
    name: "Thâ'",
    nameArabic: "ثَاء",
    transliteration: "th",
    isolated: "ث",
    initial: "ثـ",
    medial: "ـثـ",
    final: "ـث",
    makhraj: {
      zone: "Dents / Palais",
      description: "Pointe de la langue placée légèrement entre le bord des incisives supérieures et inférieures."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "ثَمَر",
      transliteration: "Thamar",
      meaning: "Fruit"
    },
    audioPhoneticDescription: "Comme le 'th' anglais dans 'think' ou 'thank'."
  },
  {
    id: 5,
    name: "Jîm",
    nameArabic: "جِيم",
    transliteration: "j",
    isolated: "ج",
    initial: "جـ",
    medial: "ـجـ",
    final: "ـج",
    makhraj: {
      zone: "Langue",
      description: "Milieu de la langue qui s'élève vers le palais supérieur."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "جَمِيل",
      transliteration: "Jamîl",
      meaning: "Beau"
    },
    audioPhoneticDescription: "Son 'dj' doux comme dans l'italien 'giorno' ou l'anglais 'joy'."
  },
  {
    id: 6,
    name: "Hâ'",
    nameArabic: "حَاء",
    transliteration: "h (guttural)",
    isolated: "ح",
    initial: "حـ",
    medial: "ـحـ",
    final: "ـح",
    makhraj: {
      zone: "Gorge",
      description: "Milieu de la gorge (au niveau de l'épiglotte). Souffle pur et net, sans raclement."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "حَمْد",
      transliteration: "Hamd",
      meaning: "Louange"
    },
    audioPhoneticDescription: "Son aspiré très pur du milieu de la gorge, comme quand on souffle sur une vitre."
  },
  {
    id: 7,
    name: "Khâ'",
    nameArabic: "خَاء",
    transliteration: "kh",
    isolated: "خ",
    initial: "خـ",
    medial: "ـخـ",
    final: "ـخ",
    makhraj: {
      zone: "Gorge",
      description: "Haut de la gorge, près de la luette. Lettre lourde et emphatique."
    },
    isHeavy: true,
    isSunLetter: false,
    exampleWord: {
      arabic: "خَيْر",
      transliteration: "Khayr",
      meaning: "Bienfait / Bonté"
    },
    audioPhoneticDescription: "Comme la 'jota' espagnole (Juan) ou le 'ch' allemand (Bach)."
  },
  {
    id: 8,
    name: "Dâl",
    nameArabic: "دَال",
    transliteration: "d",
    isolated: "د",
    initial: "د",
    medial: "ـد",
    final: "ـد",
    makhraj: {
      zone: "Dents / Palais",
      description: "Bout de la langue appuyé sur la racine des deux incisives supérieures."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "دِين",
      transliteration: "Dîn",
      meaning: "Foi / Voie"
    },
    audioPhoneticDescription: "Son 'd' clair et doux, identique au français."
  },
  {
    id: 9,
    name: "Dhâl",
    nameArabic: "ذَال",
    transliteration: "dh",
    isolated: "ذ",
    initial: "ذ",
    medial: "ـذ",
    final: "ـذ",
    makhraj: {
      zone: "Dents / Palais",
      description: "Pointe de la langue entre le bord des incisives supérieures et inférieures (son voisé)."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "ذِكْر",
      transliteration: "Dhikr",
      meaning: "Rappel"
    },
    audioPhoneticDescription: "Comme le 'th' anglais voisé dans 'this', 'that', 'mother'."
  },
  {
    id: 10,
    name: "Râ'",
    nameArabic: "رَاء",
    transliteration: "r",
    isolated: "ر",
    initial: "ر",
    medial: "ـر",
    final: "ـر",
    makhraj: {
      zone: "Langue",
      description: "Pointe de la langue qui vibre légèrement contre la gencive supérieure."
    },
    isHeavy: true, // variable selon harakah
    isSunLetter: true,
    exampleWord: {
      arabic: "رَحْمَة",
      transliteration: "Rahmah",
      meaning: "Miséricorde"
    },
    audioPhoneticDescription: "R roulé léger du bout de la langue (comme en espagnol ou italien)."
  },
  {
    id: 11,
    name: "Zây",
    nameArabic: "زَاي",
    transliteration: "z",
    isolated: "ز",
    initial: "ز",
    medial: "ـز",
    final: "ـز",
    makhraj: {
      zone: "Dents / Palais",
      description: "Pointe de la langue juste au-dessus des incisives inférieures avec sifflement clair."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "زَيْتُون",
      transliteration: "Zaytûn",
      meaning: "Olive"
    },
    audioPhoneticDescription: "Son 'z' clair comme dans 'zèbre'."
  },
  {
    id: 12,
    name: "Sîn",
    nameArabic: "سِين",
    transliteration: "s",
    isolated: "س",
    initial: "سـ",
    medial: "ـسـ",
    final: "ـس",
    makhraj: {
      zone: "Dents / Palais",
      description: "Pointe de la langue au-dessus des incisives inférieures avec sifflement fin et doux."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "سَلَام",
      transliteration: "Salâm",
      meaning: "Paix"
    },
    audioPhoneticDescription: "Son 's' fin et limpide comme dans 'soleil'."
  },
  {
    id: 13,
    name: "Shîn",
    nameArabic: "شِين",
    transliteration: "sh",
    isolated: "ش",
    initial: "شـ",
    medial: "ـشـ",
    final: "ـش",
    makhraj: {
      zone: "Langue",
      description: "Milieu de la langue s'approchant du palais avec diffusion du souffle (Tafash-shî)."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "شَمْس",
      transliteration: "Shams",
      meaning: "Soleil"
    },
    audioPhoneticDescription: "Son 'ch' doux comme dans 'chemin'."
  },
  {
    id: 14,
    name: "Sâd",
    nameArabic: "صَاد",
    transliteration: "s (emphatique)",
    isolated: "ص",
    initial: "صـ",
    medial: "ـصـ",
    final: "ـص",
    makhraj: {
      zone: "Langue",
      description: "Pointe de la langue près des incisives, avec la base de la langue bombée vers le voile du palais (son lourd et plein)."
    },
    isHeavy: true,
    isSunLetter: true,
    exampleWord: {
      arabic: "صَبْر",
      transliteration: "Sabr",
      meaning: "Patience"
    },
    audioPhoneticDescription: "S lourd et emphatique, bouche arrondie et pleine."
  },
  {
    id: 15,
    name: "Dâd",
    nameArabic: "ضَاد",
    transliteration: "d (emphatique)",
    isolated: "ض",
    initial: "ضـ",
    medial: "ـضـ",
    final: "ـض",
    makhraj: {
      zone: "Langue",
      description: "Bord latéral de la langue pressé contre les molaires supérieures (lettre unique à la langue arabe)."
    },
    isHeavy: true,
    isSunLetter: true,
    exampleWord: {
      arabic: "ضِيَاء",
      transliteration: "Diyâ'",
      meaning: "Lumière éclatante"
    },
    audioPhoneticDescription: "D emphatique et profond, caractéristique emblématique de la langue arabe."
  },
  {
    id: 16,
    name: "Tâ' (Emphatique)",
    nameArabic: "طَاء",
    transliteration: "t (emphatique)",
    isolated: "ط",
    initial: "طـ",
    medial: "ـطـ",
    final: "ـط",
    makhraj: {
      zone: "Dents / Palais",
      description: "Bout de la langue sur la racine des incisives avec voûte de la langue collée au palais."
    },
    isHeavy: true,
    isSunLetter: true,
    exampleWord: {
      arabic: "طَيِّب",
      transliteration: "Tayyib",
      meaning: "Pur / Agréable"
    },
    audioPhoneticDescription: "T très puissant, plein et percutant."
  },
  {
    id: 17,
    name: "Dhâ' (Emphatique)",
    nameArabic: "ظَاء",
    transliteration: "dh (emphatique)",
    isolated: "ظ",
    initial: "ظـ",
    medial: "ـظـ",
    final: "ـظ",
    makhraj: {
      zone: "Dents / Palais",
      description: "Pointe de la langue entre les incisives avec élévation de l'arrière de la langue."
    },
    isHeavy: true,
    isSunLetter: true,
    exampleWord: {
      arabic: "ظِلّ",
      transliteration: "Zill",
      meaning: "Ombre bienfaisante"
    },
    audioPhoneticDescription: "Le 'th' anglais de 'this' mais rendu lourd, sombre et ample."
  },
  {
    id: 18,
    name: "'Ayn",
    nameArabic: "عَيْن",
    transliteration: "'a / 'i / 'u",
    isolated: "ع",
    initial: "عـ",
    medial: "ـعـ",
    final: "ـع",
    makhraj: {
      zone: "Gorge",
      description: "Milieu de la gorge : contraction douce des muscles de l'épiglotte avec expulsion de voix."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "عِلْم",
      transliteration: "'Ilm",
      meaning: "Science / Savoir"
    },
    audioPhoneticDescription: "Son guttural profond produit par resserrement de la gorge, sans équivalent direct en français."
  },
  {
    id: 19,
    name: "Ghayn",
    nameArabic: "غَيْن",
    transliteration: "gh",
    isolated: "غ",
    initial: "غـ",
    medial: "ـغـ",
    final: "ـغ",
    makhraj: {
      zone: "Gorge",
      description: "Partie supérieure de la gorge la plus proche de la bouche. Lettre lourde."
    },
    isHeavy: true,
    isSunLetter: false,
    exampleWord: {
      arabic: "غَفُور",
      transliteration: "Ghafûr",
      meaning: "Pardonneur"
    },
    audioPhoneticDescription: "Proche du 'r' grasseyé parisien très profond."
  },
  {
    id: 20,
    name: "Fâ'",
    nameArabic: "فَاء",
    transliteration: "f",
    isolated: "ف",
    initial: "فـ",
    medial: "ـفـ",
    final: "ـف",
    makhraj: {
      zone: "Lèvres",
      description: "Bord des incisives supérieures posé délicatement sur la lèvre inférieure."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "فَجْر",
      transliteration: "Fajr",
      meaning: "Aube"
    },
    audioPhoneticDescription: "Son 'f' clair et léger, identique au français."
  },
  {
    id: 21,
    name: "Qâf",
    nameArabic: "قَاف",
    transliteration: "q",
    isolated: "ق",
    initial: "قـ",
    medial: "ـقـ",
    final: "ـق",
    makhraj: {
      zone: "Langue",
      description: "Tout le fond de la langue qui touche le voile du palais mou. Lettre lourde avec Qalqalah."
    },
    isHeavy: true,
    isSunLetter: false,
    exampleWord: {
      arabic: "قُرْآن",
      transliteration: "Qur'ân",
      meaning: "Coran (Lecture récitée)"
    },
    audioPhoneticDescription: "K très profond et puissant venant du fond de la cavité buccale."
  },
  {
    id: 22,
    name: "Kâf",
    nameArabic: "كَاف",
    transliteration: "k",
    isolated: "ك",
    initial: "كـ",
    medial: "ـكـ",
    final: "ـك",
    makhraj: {
      zone: "Langue",
      description: "Fond de la langue, légèrement plus en avant que le Qâf, touchant le palais dur."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "كِتَاب",
      transliteration: "Kitâb",
      meaning: "Livre"
    },
    audioPhoneticDescription: "Son 'k' doux et net avec un léger souffle d'air (Hams)."
  },
  {
    id: 23,
    name: "Lâm",
    nameArabic: "لَام",
    transliteration: "l",
    isolated: "ل",
    initial: "لـ",
    medial: "ـلـ",
    final: "ـل",
    makhraj: {
      zone: "Langue",
      description: "Bord avant de la langue appuyé sur la gencive des dents supérieures antérieures."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "لَيْل",
      transliteration: "Layl",
      meaning: "Nuit"
    },
    audioPhoneticDescription: "Son 'l' doux, limpide et mélodieux."
  },
  {
    id: 24,
    name: "Mîm",
    nameArabic: "مِيم",
    transliteration: "m",
    isolated: "م",
    initial: "مـ",
    medial: "ـمـ",
    final: "ـم",
    makhraj: {
      zone: "Lèvres",
      description: "Fermeture des deux lèvres avec nasillement naturel dans la cavité nasale (Ghunnah)."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "مَسْجِد",
      transliteration: "Masjid",
      meaning: "Mosquée"
    },
    audioPhoneticDescription: "Son 'm' doux avec une belle résonance nasale."
  },
  {
    id: 25,
    name: "Noûn",
    nameArabic: "نُون",
    transliteration: "n",
    isolated: "ن",
    initial: "نـ",
    medial: "ـنـ",
    final: "ـن",
    makhraj: {
      zone: "Langue",
      description: "Pointe de la langue sur les gencives supérieures, accompagnée de la Ghunnah nasale."
    },
    isHeavy: false,
    isSunLetter: true,
    exampleWord: {
      arabic: "نُور",
      transliteration: "Noûr",
      meaning: "Lumière"
    },
    audioPhoneticDescription: "Son 'n' sonore et vibrant."
  },
  {
    id: 26,
    name: "Hâ'",
    nameArabic: "هَاء",
    transliteration: "h (doux)",
    isolated: "هـ / ه",
    initial: "هـ",
    medial: "ـهـ",
    final: "ـه",
    makhraj: {
      zone: "Gorge",
      description: "Tout le fond de la gorge (au niveau des cordes vocales). Souffle pur."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "هُدَى",
      transliteration: "Hudâ",
      meaning: "Guidée"
    },
    audioPhoneticDescription: "Son 'h' aspiré très doux comme dans l'anglais 'hope' ou l'allemand 'haben'."
  },
  {
    id: 27,
    name: "Wâw",
    nameArabic: "وَاو",
    transliteration: "w / oû",
    isolated: "و",
    initial: "و",
    medial: "ـو",
    final: "ـو",
    makhraj: {
      zone: "Lèvres",
      description: "Arrondissement et avancée des deux lèvres sans fermeture complète."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "وَقْت",
      transliteration: "Waqt",
      meaning: "Temps / Moment"
    },
    audioPhoneticDescription: "Son 'w' comme dans 'weekend' ou 'oui'."
  },
  {
    id: 28,
    name: "Yâ'",
    nameArabic: "يَاء",
    transliteration: "y / î",
    isolated: "ي",
    initial: "يـ",
    medial: "ـيـ",
    final: "ـي",
    makhraj: {
      zone: "Langue",
      description: "Milieu de la langue qui s'élève doucement vers le palais sans contact hermétique."
    },
    isHeavy: false,
    isSunLetter: false,
    exampleWord: {
      arabic: "يَقِين",
      transliteration: "Yaqîn",
      meaning: "Certitude"
    },
    audioPhoneticDescription: "Son 'y' comme dans 'yeux' ou 'voyage'."
  }
];

export const VOWELS_DATA = [
  {
    name: "Fatha",
    arabic: "فَتْحَة",
    sign: "ـَ",
    sound: "a",
    description: "Trais oblique au-dessus de la lettre. Ouvre la bouche vers le son 'a'."
  },
  {
    name: "Kasra",
    arabic: "كَسْرَة",
    sign: "ـِ",
    sound: "i",
    description: "Trait oblique en dessous de la lettre. Abaisse la mâchoire vers le son 'i'."
  },
  {
    name: "Damma",
    arabic: "ضَمَّة",
    sign: "ـُ",
    sound: "ou",
    description: "Petit wâw au-dessus de la lettre. Arrondit les lèvres vers le son 'ou'."
  },
  {
    name: "Soukoun",
    arabic: "سُكُون",
    sign: "ـْ",
    sound: "arrêt",
    description: "Petit cercle au-dessus. Indique l'absence de voyelle (lettre muette/séchée)."
  },
  {
    name: "Shaddah",
    arabic: "شَدَّة",
    sign: "ـّ",
    sound: "doublement",
    description: "Petit 'w' au-dessus. Double la consonne avec force et insistance."
  },
  {
    name: "Tanween",
    arabic: "تَنْوِين",
    sign: "ـً ـٍ ـٌ",
    sound: "an / in / oun",
    description: "Doublement de voyelle à la fin d'un nom produisant un son 'n' final."
  }
];
