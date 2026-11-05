import React, { useState } from 'react';
import { Heart, Smartphone, Copy, Check, Scale, ShieldAlert, Clock, AlertCircle } from 'lucide-react';

interface SupportAndRulesSectionProps {
  compact?: boolean;
}

export const SupportAndRulesSection: React.FC<SupportAndRulesSectionProps> = ({ compact = false }) => {
  const [copiedNum, setCopiedNum] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNum(num);
    setTimeout(() => {
      setCopiedNum(null);
    }, 2000);
  };

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Comment nous soutenir ? */}
        <div className="bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/30 rounded-2xl border border-sky-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-sky-600 text-sky-600" />
              </div>
              <span className="uppercase tracking-wider">Générosité & Pérennité</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Comment nous soutenir ?
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Une contribution symbolique selon votre capacité pour chaque mensualité au numéro Wave :
            </p>

            {/* Wave Transfer Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Number 1 */}
              <div className="p-3.5 bg-white rounded-xl border border-sky-200 shadow-xs flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-semibold text-sky-700 block flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-sky-500" />
                    Wave Sénégal 1
                  </span>
                  <span className="text-base font-bold font-mono text-slate-900 tracking-wider">
                    76 462 36 69
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('764623669')}
                  className={`p-2 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                    copiedNum === '764623669'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200'
                  }`}
                  title="Copier le numéro Wave 764623669"
                >
                  {copiedNum === '764623669' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Number 2 */}
              <div className="p-3.5 bg-white rounded-xl border border-sky-200 shadow-xs flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-semibold text-sky-700 block flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-sky-500" />
                    Wave Sénégal 2
                  </span>
                  <span className="text-base font-bold font-mono text-slate-900 tracking-wider">
                    78 943 53 66
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('789435366')}
                  className={`p-2 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                    copiedNum === '789435366'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200'
                  }`}
                  title="Copier le numéro Wave 789435366"
                >
                  {copiedNum === '789435366' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 italic border-t border-sky-100 pt-3">
            Votre don libre permet de soutenir la connexion internet, les outils pédagogiques et la pérennité des cours bénévoles du Daara. Qu'Allah bénisse vos contributions.
          </p>
        </div>

        {/* Card 2: Règlement intérieur pour l'assiduité */}
        <div className="bg-gradient-to-br from-white via-amber-50/40 to-rose-50/20 rounded-2xl border border-amber-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <span className="uppercase tracking-wider">Engagement & Respect du Savoir</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Règlement intérieur pour l'assiduité
            </h3>

            {/* Core rule banner */}
            <div className="p-4 rounded-xl bg-amber-100/70 border-l-4 border-amber-600 text-amber-950 space-y-1">
              <p className="font-bold text-sm sm:text-base leading-snug">
                « Une fois engagé, chaque cours perdu sans justification, l'étudiant devra verser 1000 FCFA. »
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Respect du temps de l'enseignant :</strong> L'Oustadh réserve son créneau horaire spécialement pour votre écoute et votre suivi personnalisé.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Justification préalable :</strong> En cas d'empêchement majeur, prévenez impérativement l'enseignant sur le groupe WhatsApp avant l'heure du cours.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Responsabilisation :</strong> Cette mesure symbolique n'a pas de but commercial mais vise à cultiver le sérieux et la régularité nécessaires à la mémorisation du Coran.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-xs text-amber-900/80 italic border-t border-amber-200/70 pt-3">
            Le versement s'effectue sur le numéro Wave du Daara et est affecté au bon fonctionnement des halaqat.
          </p>
        </div>
      </div>
    </section>
  );
};
