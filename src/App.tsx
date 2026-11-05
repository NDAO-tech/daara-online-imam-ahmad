import React, { useState, useEffect } from 'react';
import { ViewMode, UserProgress } from './types/quran';
import { loadUserProgress, saveUserProgress } from './utils/storage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AlphabetModule } from './components/AlphabetModule';
import { QuranPlayerModule } from './components/QuranPlayerModule';
import { ClassroomModule } from './components/ClassroomModule';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());

  // Keep localStorage in sync with user progress updates
  const handleUpdateProgress = (newPartial: Partial<UserProgress>) => {
    setProgress((prev) => {
      const updated = { ...prev, ...newPartial };
      saveUserProgress(updated);
      return updated;
    });
  };

  const handleToggleLearnedLetter = (letterId: number) => {
    const isAlreadyLearned = progress.learnedLetterIds.includes(letterId);
    const updatedIds = isAlreadyLearned
      ? progress.learnedLetterIds.filter((id) => id !== letterId)
      : [...progress.learnedLetterIds, letterId];

    handleUpdateProgress({ learnedLetterIds: updatedIds });
  };

  const handleToggleNourLesson = (lessonId: string) => {
    const isAlreadyCompleted = progress.completedNourLessonIds?.includes(lessonId);
    const updated = isAlreadyCompleted
      ? progress.completedNourLessonIds.filter((id) => id !== lessonId)
      : [...(progress.completedNourLessonIds || []), lessonId];

    handleUpdateProgress({ completedNourLessonIds: updated });
  };


  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        memorizedCount={progress.memorizedSurahIds.length}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentView === 'home' && (
          <HeroSection
            onSelectView={setCurrentView}
            learnedLettersCount={progress.learnedLetterIds.length}
            memorizedSurahsCount={progress.memorizedSurahIds.length}
          />
        )}

        {currentView === 'alphabet' && (
          <AlphabetModule
            learnedLetterIds={progress.learnedLetterIds}
            onToggleLearnedLetter={handleToggleLearnedLetter}
            completedNourLessonIds={progress.completedNourLessonIds || []}
            onToggleNourLesson={handleToggleNourLesson}
          />
        )}

        {currentView === 'quran' && (
          <QuranPlayerModule
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentView === 'classroom' && (
          <ClassroomModule
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onNavigateToQuran={() => setCurrentView('quran')}
            onNavigateToAlphabet={() => setCurrentView('alphabet')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectView={setCurrentView} />
    </div>
  );
}
