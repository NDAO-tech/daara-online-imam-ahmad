import React from 'react';
import { ViewMode } from '../types/quran';
import { BookOpen, Mic2, Compass, Award, ArrowRight, Volume2, ShieldCheck, HeartHandshake, Video } from 'lucide-react';
import { SupportAndRulesSection } from './SupportAndRulesSection';

interface HeroSectionProps {
  onSelectView: (view: ViewMode) => void;
  learnedLettersCount: number;
  memorizedSurahsCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectView,
  learnedLettersCount,
  memorizedSurahsCount
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner Grid */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white border border-emerald-800/40 shadow-xl">
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-300">
              <span className="font-semibold text-amber-300">Daara Imam Ahmad Online</span>
              <span aria-hidden="true">·</span>
              <span>École Coranique Virtuelle Gratuite</span>
              <span aria-hidden="true">·</span>
              <span>100% Libre & Sans Publicité</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif text-balance">
                Daara Imam Ahmad Online
              </h1>
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                Une plateforme simple et gratuite pour apprendre le Coran, améliorer sa lecture, son Tajwid et sa mémorisation, où que vous soyez.
              </p>
            </div>

            {/* Sacred Hadith Quote */}
            <div className="p-4 rounded-xl bg-emerald-900/50 border border-emerald-700/50 space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-300/90 font-medium border-b border-emerald-700/50 pb-1.5">
                <span>Hadith Prophétique</span>
                <span className="text-[11px] text-emerald-300">En hommage à l'Imam Ahmad ibn Hanbal</span>
              </div>
              <p className="text-right text-lg sm:text-xl font-arabic text-amber-200" dir="rtl">
                « خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »
              </p>
              <p className="text-xs text-emerald-200/90 italic">
                « Le meilleur d'entre vous est celui qui apprend le Coran et qui l'enseigne. » — Sahîh Al-Bukhârî
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectView('quran')}
                className="px-5 py-3 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Commencer la récitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectView('alphabet')}
                className="px-5 py-3 text-sm font-medium text-white bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-600/60 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Alphabet & Nouroul Bayan</span>
              </button>
              <button
                onClick={() => onSelectView('classroom')}
                className="px-5 py-3 text-sm font-medium text-emerald-200 bg-slate-800/90 hover:bg-slate-800 border border-emerald-500/50 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4 text-emerald-400" />
                <span>Salles de cours</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-emerald-700/50 shadow-2xl aspect-[16/10] bg-emerald-900/80">
              <img
                src="/src/assets/images/hero_quran_study_1793831279082.jpg"
                alt="Noble Saint Coran ouvert avec calligraphie dorée sur lutrin en bois sculpté"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback container if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-emerald-100 flex items-center justify-between pointer-events-none">
                <span className="font-serif">Récitation & Méditation</span>
                <span className="font-arabic text-sm text-amber-200">وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Curriculum Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              Un parcours complet et gratuit
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Trois étapes simples et complémentaires pour vous accompagner de l'apprentissage de base jusqu'à la récitation en direct.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Alphabet & Nouroul Bayan */}
          <div
            onClick={() => onSelectView('alphabet')}
            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors text-base">
                    1. Alphabet & Nouroul Bayan
                  </h3>
                  <span className="text-xs font-arabic text-slate-400 font-bold">نور البيان</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Importez manuellement votre propre PDF du livre « Nouroul Bayan » et apprenez les 28 lettres avec Makhârij et sons.
                </p>
              </div>
            </div>
            <div className="pt-5 flex items-center justify-between text-xs text-emerald-700 font-medium">
              <span>Support PDF personnel & Alphabet</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Le Saint Coran (114 Sourates) */}
          <div
            onClick={() => onSelectView('quran')}
            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Mic2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 group-hover:text-amber-800 transition-colors text-base">
                    2. Le Saint Coran (114 Sourates)
                  </h3>
                  <span className="text-xs font-arabic text-slate-400 font-bold">القرآن الكريم</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Toutes les 114 sourates avec audio de Sh. Al-Husary et Sh. Alafasy, phonétique, traduction française et répétiteur de Hifz.
                </p>
              </div>
            </div>
            <div className="pt-5 flex items-center justify-between text-xs text-amber-700 font-medium">
              <span>114 sourates complètes & Audio</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Salles de Cours Virtuels */}
          <div
            onClick={() => onSelectView('classroom')}
            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Video className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-800 transition-colors text-base">
                    3. Salles de Cours Virtuels
                  </h3>
                  <span className="text-xs font-arabic text-slate-400 font-bold">حلقات التحفيظ</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Créez et rejoignez des salles de cours en direct avec vos enseignants via Google Meet et groupes d'échanges WhatsApp.
                </p>
              </div>
            </div>
            <div className="pt-5 flex items-center justify-between text-xs text-teal-700 font-medium">
              <span>Google Meet & WhatsApp en direct</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Support & Attendance Rules Section */}
      <SupportAndRulesSection />

      {/* Feature Highlights: Why this platform is unique */}
      <section className="bg-slate-100/70 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Récitation Pédagogique Sheikh Al-Minshawi (avec l'enfant)</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Le célèbre Mushaf Al-Mu'allim où le Sheikh récite et l'enfant répète, idéal pour l'apprentissage, aux côtés de Sheikh Al-Husary et Sheikh Alafasy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Les 114 Sourates Disponibles</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                De la sourate Al-Fatiha jusqu'à An-Nas, accédez au texte complet en arabe, phonétique et traduction française.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Cours en Direct & 100% Gratuit</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Rejoignez votre enseignant sur Google Meet et WhatsApp pour réciter en direct, sans aucun frais ni abonnement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
