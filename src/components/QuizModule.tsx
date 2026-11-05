import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { QuizQuestion, UserProgress } from '../types/quran';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { playSuccessChime, playHarmonicTone } from '../utils/audioPlayer';

interface QuizModuleProps {
  progress: UserProgress;
  onUpdateProgress: (newProgress: Partial<UserProgress>) => void;
}

export const QuizModule: React.FC<QuizModuleProps> = ({ progress, onUpdateProgress }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'alphabet' | 'memorization'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    if (selectedCategory === 'all') return true;
    return q.category === selectedCategory;
  });

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (currentQ && idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      playSuccessChime();
    } else {
      playHarmonicTone(220, 'sine', 0.2); // Low gentle tone for incorrect
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz completed
      setIsCompleted(true);
      const newEntry = {
        quizId: `quiz_${Date.now()}`,
        score: score + (selectedOption === currentQ?.correctIndex ? 1 : 0),
        total: filteredQuestions.length,
        date: new Date().toLocaleDateString('fr-FR')
      };
      onUpdateProgress({
        completedQuizzes: [...progress.completedQuizzes, newEntry]
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-8 pb-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-800">
          <span>Évaluation Bienveillante</span>
          <span aria-hidden="true">·</span>
          <span>Sans Stress</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
          Testez vos connaissances en douceur
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Vérifiez vos acquis sur l'alphabet arabe, le livre Nouroul Bayan et la mémorisation des versets.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
        <button
          onClick={() => {
            setSelectedCategory('all');
            handleRestart();
          }}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Toutes les questions ({QUIZ_QUESTIONS.length})
        </button>
        <button
          onClick={() => {
            setSelectedCategory('alphabet');
            handleRestart();
          }}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'alphabet' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Alphabet & Nouroul Bayan
        </button>
        <button
          onClick={() => {
            setSelectedCategory('memorization');
            handleRestart();
          }}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'memorization' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Le Saint Coran & Mémorisation
        </button>
      </div>

      {!isCompleted && currentQ && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Question <strong className="text-slate-900 font-mono">{currentIndex + 1}</strong> sur{' '}
              <span className="font-mono">{filteredQuestions.length}</span>
            </span>
            <span>
              Score actuel : <strong className="text-emerald-700 font-mono">{score}</strong>
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif leading-snug">
              {currentQ.question}
            </h2>

            {currentQ.arabicPrompt && (
              <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
                <span className="text-4xl sm:text-5xl font-arabic font-bold text-emerald-950 inline-block" dir="rtl">
                  {currentQ.arabicPrompt}
                </span>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500 font-semibold';
                } else if (isChosen && !isCorrect) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50 opacity-50 text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {isAnswered && isChosen && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation block once answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs leading-relaxed animate-in fade-in">
              <div className="flex items-center gap-2 font-semibold">
                {selectedOption === currentQ.correctIndex ? (
                  <span className="text-emerald-800">Excellent ! Bonne réponse.</span>
                ) : (
                  <span className="text-amber-800">Pas tout à fait, voici l'explication :</span>
                )}
              </div>
              <p className="text-slate-600">{currentQ.explanation}</p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <span>{currentIndex < filteredQuestions.length - 1 ? 'Question suivante' : 'Voir mon bilan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Completion screen */}
      {isCompleted && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Barak Allâhu Fîkum ! Test terminé.
            </h2>
            <p className="text-sm text-slate-500">
              Votre régularité dans l'apprentissage du Coran est la plus belle des démarches.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl max-w-sm mx-auto border border-slate-200">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
              Score obtenu
            </span>
            <div className="text-4xl font-bold text-emerald-800 font-mono">
              {score} / {filteredQuestions.length}
            </div>
            <p className="text-xs text-slate-600 mt-2">
              {score === filteredQuestions.length
                ? 'Score parfait ! Vous maîtrisez parfaitement ces notions.'
                : score >= filteredQuestions.length / 2
                ? 'Très bon travail ! Continuez à réviser régulièrement.'
                : 'Courage ! Chaque répétition renforce votre mémoire.'}
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Recommencer le test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
