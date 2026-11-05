import { QuizQuestion } from '../types/quran';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "alphabet",
    question: "Quelle est cette lettre arabe portant un point au-dessous ?",
    arabicPrompt: "ب",
    options: ["Tâ' (ت)", "Bâ' (ب)", "Thâ' (ث)", "Noûn (ن)"],
    correctIndex: 1,
    explanation: "La lettre Bâ' (ب) possède un point unique en dessous. Le Tâ' (ت) en a deux au-dessus, et le Thâ' (ث) en a trois au-dessus."
  },
  {
    id: "q2",
    category: "alphabet",
    question: "Parmi ces lettres, laquelle fait partie des lettres avec une prononciation lourde / emphatique ?",
    arabicPrompt: "ص - د - ك - س",
    options: ["Dâl (د)", "Kâf (ك)", "Sâd (ص)", "Sîn (س)"],
    correctIndex: 2,
    explanation: "Le Sâd (ص) est une lettre lourde et pleine (bouche arrondie), contrairement au Sîn (س) qui est léger et fin."
  },
  {
    id: "q3",
    category: "alphabet",
    question: "Quel est le son produit par la voyelle courte 'Kasra' (ـِ) ?",
    options: ["Le son 'a'", "Le son 'ou'", "Le son 'i'", "L'absence de voyelle (soukoun)"],
    correctIndex: 2,
    explanation: "La Kasra est un petit trait oblique situé SOUS la lettre et produit le son 'i'. La Fatha (au-dessus) donne 'a' et la Damma donne 'ou'."
  },
  {
    id: "q4",
    category: "alphabet",
    question: "Dans la méthode Nouroul Bayan, comment se lit le mot composé des lettres 'كـَ - ـتـَ - ـبَ' ?",
    arabicPrompt: "كَتَبَ",
    options: ["Koutiba", "Kataba", "Kitâb", "Maktoub"],
    correctIndex: 1,
    explanation: "Chaque consonne porte une Fatha (ـَ), ce qui donne la lecture fluide : 'Ka-Ta-Ba' (كَتَبَ - Il a écrit)."
  },
  {
    id: "q5",
    category: "alphabet",
    question: "Quel est le rôle du Soukoûn (ـْ) au-dessus d'une lettre arabe ?",
    arabicPrompt: "قُـلْ",
    options: [
      "Il allonge la lettre pendant 4 temps",
      "Il indique l'arrêt et l'absence de voyelle sur la lettre",
      "Il double la lettre avec force",
      "Il transforme le son en voyelle 'a'"
    ],
    correctIndex: 1,
    explanation: "Le Soukoûn (ـْ) marque l'absence de voyelle : la lettre est muette et s'attache à la précédente pour former une syllabe fermée (ex: Qul قُلْ)."
  },
  {
    id: "q6",
    category: "memorization",
    question: "Dans la sourate Al-Ikhlâs, quel est le verset qui suit directement 'قُلْ هُوَ اللَّهُ أَحَدٌ' ?",
    options: [
      "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      "اللَّهُ الصَّمَدُ",
      "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      "مِن شَرِّ مَا خَلَقَ"
    ],
    correctIndex: 1,
    explanation: "Le verset 2 d'Al-Ikhlâs est 'Allâhu-s-Samad' (اللَّهُ الصَّمَدُ)."
  },
  {
    id: "q7",
    category: "memorization",
    question: "Quelle sourate commence par le serment solennel 'وَالْعَصْرِ' (Par le Temps !) ?",
    options: ["Al-Fajr", "Ad-Duhâ", "Al-'Asr", "Al-Qadr"],
    correctIndex: 2,
    explanation: "La sourate Al-'Asr (n° 103) commence par 'Wal-'Asr', rappelant que tout être humain est en perdition sauf les croyants œuvrant dans le bien."
  },
  {
    id: "q8",
    category: "memorization",
    question: "Combien de versets compte la sourate Al-Fâtiha (l'Ouverture) ?",
    options: ["5 versets", "7 versets", "10 versets", "3 versets"],
    correctIndex: 1,
    explanation: "La sourate Al-Fâtiha compte exactement 7 versets bénis répétés dans chaque prière (As-Sab' Al-Mathânî)."
  },
  {
    id: "q9",
    category: "memorization",
    question: "Quelle est la toute première sourate révélée au Prophète ﷺ dans la grotte de Hira ?",
    options: ["Al-Fâtiha", "Al-Baqarah", "Al-'Alaq (Iqra)", "Yâ-Sîn"],
    correctIndex: 2,
    explanation: "Les cinq premiers versets de la sourate Al-'Alaq (Sourate 96 : 'Iqra bi-smi Rabbika-lladhî khalaq') constituent la première révélation."
  },
  {
    id: "q10",
    category: "memorization",
    question: "Combien de sourates compte le Saint Coran au total ?",
    options: ["100 sourates", "114 sourates", "120 sourates", "99 sourates"],
    correctIndex: 1,
    explanation: "Le Saint Coran est composé de 114 sourates, allant d'Al-Fatiha jusqu'à An-Nas."
  }
];
