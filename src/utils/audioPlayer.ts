/**
 * Audio utilities for Arabic phonetics, speech synthesis, and Quranic verse playback.
 */

export const playArabicSpeech = (arabicText: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve(false);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(arabicText);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85; // Slower, clear pedagogical pace

      // Try finding an Arabic voice
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }

      utterance.onend = () => resolve(true);
      utterance.onerror = () => resolve(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      resolve(false);
    }
  });
};

export const playHarmonicTone = (freq = 440, type: OscillatorType = 'sine', duration = 0.3) => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Graceful silent fallback
  }
};

export const playSuccessChime = () => {
  playHarmonicTone(523.25, 'sine', 0.15); // C5
  setTimeout(() => playHarmonicTone(659.25, 'sine', 0.2), 120); // E5
  setTimeout(() => playHarmonicTone(783.99, 'sine', 0.35), 240); // G5
};
