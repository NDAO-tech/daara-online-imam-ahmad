import React from 'react';
import { BookOpen, Heart, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export const ResourcesModule: React.FC = () => {
  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
          <span>Conseils Pédagogiques & Spirituels</span>
          <span aria-hidden="true">·</span>
          <span>Pour Débutants et Avancés</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
          Guide & Méthodologie d'Apprentissage du Coran
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Découvrez les meilleures pratiques transmises par les savants pour apprendre à tout âge, avec sérénité et régularité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Method 1: Beginners */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            1
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">
            Débuter de zéro sans parler arabe
          </h2>
          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <p>
              <strong>Ne cherchez pas à tout apprendre le premier jour :</strong> focalisez-vous sur 3 à 4 lettres par session. Apprenez à les reconnaître isolées, puis au début d'un mot.
            </p>
            <p>
              <strong>Associez toujours le son à la vue :</strong> écoutez attentivement le Cheikh prononcer la lettre ou le verset avant de répéter vous-même. Le Coran est une tradition d'audition orale (Talaqqî).
            </p>
            <p>
              <strong>Utilisez la phonétique comme béquille temporaire :</strong> la translittération française vous aide à démarrer, mais efforcez-vous progressivement de lire le texte arabe Uthmani directement.
            </p>
          </div>
        </div>

        {/* Method 2: Memorization (Hifz) */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            2
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">
            Les clés d'une mémorisation solide (Hifz)
          </h2>
          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <p>
              <strong>La répétition à voix haute :</strong> Répétez chaque verset 5 à 10 fois jusqu'à ce que votre langue le récite sans effort mental.
            </p>
            <p>
              <strong>La liaison des versets :</strong> Lorsque vous apprenez le verset 2, récitez toujours le verset 1 puis le verset 2 ensemble. La mémoire coranique se tisse par le lien entre les fins et débuts de versets.
            </p>
            <p>
              <strong>Récitez vos sourates en prière :</strong> La meilleure façon d'ancrer une sourate est de la réciter durant vos prières obligatoires et surérogatoires (Salât).
            </p>
          </div>
        </div>

        {/* Method 3: Tajweed */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
            3
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">
            L'esprit des règles de Tajweed
          </h2>
          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <p>
              Le mot <em>Tajwîd</em> signifie étymologiquement « embellir et parfaire ». Il ne s'agit pas de complexifier la lecture, mais de préserver la façon exacte dont le Prophète ﷺ a reçu la révélation de l'Ange Gabriel (Jibril).
            </p>
            <p>
              Commencez par la règle la plus simple : la <strong>Qalqalah</strong> (le rebond sur ق ط ب ج د) et les prolongations naturelles de 2 temps. Vous constaterez immédiatement la musicalité de votre récitation !
            </p>
          </div>
        </div>

        {/* Method 4: Etiquette (Adab) */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            4
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">
            L'éthique du lecteur (Âdâb Al-Tilâwah)
          </h2>
          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
            <p>
              <strong>La pureté de l'intention :</strong> Apprendre pour la satisfaction divine et pour nourrir son cœur, non pour l'ostentation.
            </p>
            <p>
              <strong>L'Istia'adhah :</strong> Commencer par chercher refuge auprès d'Allah contre le diable : <em>« A'oûdhou bi-llâhi mina-sh-shaytâni-r-rajîm »</em>.
            </p>
            <p>
              <strong>La méditation (Tadabbour) :</strong> Prenez quelques secondes après chaque verset pour lire sa traduction et laisser son enseignement résonner dans votre vie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
