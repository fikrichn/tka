import React, { useState, useEffect, useMemo } from 'react';
import {
  Question,
  UserAnswer,
  Subject,
  QuizMode,
  PerformanceReport,
  MemeItem,
  QuestionType,
} from './types';
import { MATH_QUESTIONS_30, INDO_QUESTIONS_30 } from './data/questions';
import {
  CORRECT_MEMES,
  WRONG_MEMES,
  CELEBRATE_MEMES,
  getRandomCorrectMeme,
  getRandomWrongMeme,
} from './data/memes';
import { soundManager } from './utils/audio';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Filter,
  Flame,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Share2,
  PlusCircle,
  MessageCircle,
  Calculator,
  Compass,
} from 'lucide-react';
import { ReadingPassageCard } from './components/ReadingPassageCard';
import { ComplexStatementTable } from './components/ComplexStatementTable';
import { FractionVisualizer } from './components/visuals/FractionVisualizer';
import { BarChartVisualizer } from './components/visuals/BarChartVisualizer';
import { GeometryVisualizer } from './components/visuals/GeometryVisualizer';
import { MemePopupModal } from './components/MemePopupModal';
import { MascotMikoModal } from './components/MascotMikoModal';
import { MemeGalleryModal } from './components/MemeGalleryModal';
import { PerformanceReportView } from './components/PerformanceReportView';

export default function App() {
  // Active subject menu: 'Matematika' (30 soal) or 'Bahasa Indonesia' (30 soal)
  const [activeSubject, setActiveSubject] = useState<Subject>('Matematika');

  // Question lists for each subject (starts with 30 each)
  const [mathList, setMathList] = useState<Question[]>(MATH_QUESTIONS_30);
  const [indoList, setIndoList] = useState<Question[]>(INDO_QUESTIONS_30);

  // Active question index within the current active module (0..29)
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [mode, setMode] = useState<QuizMode>('practice');

  // Subtopic and question type filters
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | QuestionType>('all');

  // Separate answers state per subject module
  const [mathAnswers, setMathAnswers] = useState<Record<string, UserAnswer>>({});
  const [indoAnswers, setIndoAnswers] = useState<Record<string, UserAnswer>>({});

  // Question UI tools
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(soundManager.getIsMuted());

  // 60-Minute Countdown Timer for Exam Simulation Mode (3600 seconds)
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(60 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);

  // Modals state
  const [activeMeme, setActiveMeme] = useState<MemeItem | null>(null);
  const [isMemeModalOpen, setIsMemeModalOpen] = useState<boolean>(false);
  const [isMascotModalOpen, setIsMascotModalOpen] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [mascotTargetQuestion, setMascotTargetQuestion] = useState<Question | null>(null);
  const [unlockedMemes, setUnlockedMemes] = useState<Set<string>>(
    new Set(['meme_correct_1', 'meme_wrong_1', 'meme_correct_2'])
  );

  // AI Generation state
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Sobat Juara');

  // Active questions pool for current subject
  const currentPool = activeSubject === 'Matematika' ? mathList : indoList;
  const currentAnswers = activeSubject === 'Matematika' ? mathAnswers : indoAnswers;

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return currentPool.filter((q) => {
      if (selectedSubtopic !== 'all' && q.topic !== selectedSubtopic) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      return true;
    });
  }, [currentPool, selectedSubtopic, selectedType]);

  const currentQuestion: Question | undefined = filteredQuestions[currentIdx];
  const currentAnswer = currentQuestion ? currentAnswers[currentQuestion.id] : undefined;

  // Sound toggle handler
  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsSoundMuted(muted);
  };

  // Timer Effect (60-minute duration in exam mode)
  useEffect(() => {
    if (isExamFinished) return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);

      if (mode === 'exam') {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isExamFinished]);

  // Reset hint & explanation visibility when question or subject changes
  useEffect(() => {
    setShowHint(false);
    setShowExplanation(mode === 'practice' && Boolean(currentAnswer));
  }, [currentIdx, mode, activeSubject]);

  // Switch subject module
  const handleSwitchSubject = (subj: Subject) => {
    if (subj === activeSubject) return;
    soundManager.playPop();
    setActiveSubject(subj);
    setCurrentIdx(0);
    setSelectedSubtopic('all');
    setSelectedType('all');
    setIsExamFinished(false);
    setTimeRemainingSeconds(60 * 60);
  };

  // Answer selection handlers
  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion) return;
    soundManager.playPop();

    if (currentQuestion.type === 'single_choice') {
      const isCorrect = optionIndex === currentQuestion.correctAnswer;
      recordAnswer({
        questionId: currentQuestion.id,
        selectedOption: optionIndex,
        isCorrect,
        timeSpentSeconds: 15,
      });

      if (mode === 'practice') {
        triggerMemeReaction(isCorrect);
      }
    } else if (currentQuestion.type === 'multiple_choice') {
      const currentSelected = currentAnswer?.selectedOptions || [];
      const updated = currentSelected.includes(optionIndex)
        ? currentSelected.filter((i) => i !== optionIndex)
        : [...currentSelected, optionIndex];

      const correctSet = new Set(currentQuestion.correctAnswers || []);
      const isCorrect =
        updated.length === correctSet.size && updated.every((i) => correctSet.has(i));

      recordAnswer({
        questionId: currentQuestion.id,
        selectedOptions: updated,
        isCorrect,
        timeSpentSeconds: 20,
      });
    }
  };

  const handleStatementChange = (statementId: string, value: boolean) => {
    if (!currentQuestion || !currentQuestion.statements) return;

    const currentMap = currentAnswer?.statementAnswers || {};
    const updatedMap = { ...currentMap, [statementId]: value };

    const allAnswered = currentQuestion.statements.every((s) => updatedMap[s.id] !== undefined);
    const isCorrect =
      allAnswered && currentQuestion.statements.every((s) => updatedMap[s.id] === s.isCorrect);

    recordAnswer({
      questionId: currentQuestion.id,
      statementAnswers: updatedMap,
      isCorrect,
      timeSpentSeconds: 25,
    });
  };

  const recordAnswer = (ans: Partial<UserAnswer> & { questionId: string }) => {
    const updater = (prev: Record<string, UserAnswer>) => ({
      ...prev,
      [ans.questionId]: {
        ...prev[ans.questionId],
        ...ans,
        timeSpentSeconds: (prev[ans.questionId]?.timeSpentSeconds || 0) + 5,
      } as UserAnswer,
    });

    if (activeSubject === 'Matematika') {
      setMathAnswers(updater);
    } else {
      setIndoAnswers(updater);
    }
  };

  // Toggle mark as doubt (Ragu-ragu)
  const toggleDoubt = () => {
    if (!currentQuestion) return;
    const updater = (prev: Record<string, UserAnswer>) => ({
      ...prev,
      [currentQuestion.id]: {
        ...(prev[currentQuestion.id] || {
          questionId: currentQuestion.id,
          isCorrect: false,
          timeSpentSeconds: 0,
        }),
        isMarkedDoubt: !prev[currentQuestion.id]?.isMarkedDoubt,
      },
    });

    if (activeSubject === 'Matematika') {
      setMathAnswers(updater);
    } else {
      setIndoAnswers(updater);
    }
  };

  // Trigger funny meme and sound reactions
  const triggerMemeReaction = (isCorrect: boolean) => {
    if (isCorrect) {
      soundManager.playCorrect();
      const meme = getRandomCorrectMeme();
      setActiveMeme(meme);
      setUnlockedMemes((prev) => new Set([...prev, meme.id]));

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (e) {
        // ignore
      }
    } else {
      soundManager.playWrong();
      const meme = getRandomWrongMeme();
      setActiveMeme(meme);
      setUnlockedMemes((prev) => new Set([...prev, meme.id]));
    }
    setIsMemeModalOpen(true);
    setShowExplanation(true);
  };

  // Finish exam simulation
  const handleFinishExam = () => {
    soundManager.playFanfare();
    setIsExamFinished(true);

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }
  };

  // Restart / Reset current module
  const handleRestart = () => {
    if (activeSubject === 'Matematika') {
      setMathAnswers({});
    } else {
      setIndoAnswers({});
    }
    setCurrentIdx(0);
    setTimeRemainingSeconds(60 * 60);
    setElapsedSeconds(0);
    setIsExamFinished(false);
    setShowExplanation(false);
  };

  // Generate AI bonus question
  const handleGenerateAiQuestion = async () => {
    setIsGeneratingAi(true);
    try {
      const topic = currentQuestion ? currentQuestion.topic : activeSubject === 'Matematika' ? 'Pecahan' : 'Teks Prosedur';
      const subject = activeSubject;

      const res = await fetch('/api/ai/generate-bonus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, subject }),
      });

      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      if (data.question) {
        const newQ: Question = {
          ...data.question,
          id: `ai_${Date.now()}`,
          hint: 'Perhatikan kata kunci dan konsep dasar yang telah dipelajari!',
        };

        if (activeSubject === 'Matematika') {
          setMathList((prev) => [...prev, newQ]);
        } else {
          setIndoList((prev) => [...prev, newQ]);
        }
        setCurrentIdx(filteredQuestions.length);
        soundManager.playFanfare();
      }
    } catch (e) {
      // fallback
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Calculate comprehensive performance report for the active subject
  const calculateReport = (): PerformanceReport => {
    const totalQuestions = filteredQuestions.length;
    let correctCount = 0;
    let answeredCount = 0;

    const subjectBreakdown: Record<Subject, { total: number; correct: number; percentage: number }> =
      {
        Matematika: { total: 0, correct: 0, percentage: 0 },
        'Bahasa Indonesia': { total: 0, correct: 0, percentage: 0 },
      };

    const topicBreakdown: Record<
      string,
      { total: number; correct: number; percentage: number; subject: Subject }
    > = {};

    const typeBreakdown: Record<
      QuestionType,
      { total: number; correct: number; percentage: number }
    > = {
      single_choice: { total: 0, correct: 0, percentage: 0 },
      multiple_choice: { total: 0, correct: 0, percentage: 0 },
      complex_statement: { total: 0, correct: 0, percentage: 0 },
    };

    filteredQuestions.forEach((q) => {
      const ans = currentAnswers[q.id];
      const isCorrect = ans?.isCorrect || false;

      // Subject stats
      subjectBreakdown[q.subject].total += 1;
      if (isCorrect) subjectBreakdown[q.subject].correct += 1;

      // Topic stats
      if (!topicBreakdown[q.topic]) {
        topicBreakdown[q.topic] = { total: 0, correct: 0, percentage: 0, subject: q.subject };
      }
      topicBreakdown[q.topic].total += 1;
      if (isCorrect) topicBreakdown[q.topic].correct += 1;

      // Type stats
      typeBreakdown[q.type].total += 1;
      if (isCorrect) typeBreakdown[q.type].correct += 1;

      if (ans && (ans.selectedOption !== undefined || ans.selectedOptions || ans.statementAnswers)) {
        answeredCount += 1;
      }
      if (isCorrect) {
        correctCount += 1;
      }
    });

    Object.keys(subjectBreakdown).forEach((k) => {
      const s = subjectBreakdown[k as Subject];
      s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    });

    Object.keys(topicBreakdown).forEach((k) => {
      const t = topicBreakdown[k];
      t.percentage = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
    });

    Object.keys(typeBreakdown).forEach((k) => {
      const tp = typeBreakdown[k as QuestionType];
      tp.percentage = tp.total > 0 ? Math.round((tp.correct / tp.total) * 100) : 0;
    });

    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    let gradeLevel: 'Mahir' | 'Cakap' | 'Dasar' | 'Perlu Intervensi' = 'Dasar';
    if (score >= 85) gradeLevel = 'Mahir';
    else if (score >= 70) gradeLevel = 'Cakap';
    else if (score >= 50) gradeLevel = 'Dasar';
    else gradeLevel = 'Perlu Intervensi';

    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const recommendations: string[] = [];

    Object.entries(topicBreakdown).forEach(([topic, stat]) => {
      if (stat.percentage >= 70) {
        strengths.push(`Sangat kuat di materi ${topic} (${stat.percentage}%)`);
      } else {
        weaknesses.push(`Perlu latihan tambahan di ${topic} (${stat.percentage}%)`);
      }
    });

    if (activeSubject === 'Matematika') {
      if (score >= 80) {
        recommendations.push('Penalaran matematikamu sangat tajam! Siap hadapi soal HOTS tingkat lanjut.');
      } else {
        recommendations.push('Review kembali konsep pecahan senilai, rumus luas/keliling gabungan, dan faktorisasi FPB/KPK.');
      }
    } else {
      if (score >= 80) {
        recommendations.push('Kemampuan literasi dan pemahaman teks narasi serta eksposisimu sudah sangat matang!');
      } else {
        recommendations.push('Perbanyak membaca teks eksplanasi ilmiah dan cermati perbedaan kalimat fakta dengan opini.');
      }
    }

    return {
      studentName,
      date: new Date().toLocaleDateString('id-ID', { dateStyle: 'long' }),
      totalQuestions,
      answeredCount,
      correctCount,
      score,
      totalTimeSeconds: elapsedSeconds,
      avgTimeSeconds: totalQuestions > 0 ? Math.round(elapsedSeconds / totalQuestions) : 0,
      gradeLevel,
      subjectBreakdown,
      topicBreakdown,
      typeBreakdown,
      strengths,
      weaknesses,
      recommendations,
      aiAdvice:
        score >= 80
          ? `Meow! Luar biasa Sobat Juara! Kamu berhasil menyelesaikan 30 soal ${activeSubject} dengan skor ${score}! Pertahankan prestasimu ya!`
          : `Meow! Semangat terus Sobat Juara! 30 soal ${activeSubject} sudah kamu kerjakan dengan baik. Pelajari pembahasan di bawah untuk mencapai bintang sempurna!`,
      aiMotto: score >= 80 ? 'Level: Giga Chad SD Meow! 🏆' : 'Level: Bibit Juara Berkembang! 🌱',
    };
  };

  // If exam finished, render Performance Report View
  if (isExamFinished) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
        <div className="max-w-4xl mx-auto px-4 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSwitchSubject('Matematika')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeSubject === 'Matematika'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4" /> Matematika SD (30 Soal)
            </button>
            <button
              type="button"
              onClick={() => handleSwitchSubject('Bahasa Indonesia')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeSubject === 'Bahasa Indonesia'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Bahasa Indonesia SD (30 Soal)
            </button>
          </div>
        </div>

        <PerformanceReportView
          report={calculateReport()}
          questions={filteredQuestions}
          userAnswers={currentAnswers}
          onRestart={handleRestart}
          onOpenMascot={(q) => {
            setMascotTargetQuestion(q);
            setIsMascotModalOpen(true);
          }}
          onOpenMemeGallery={() => setIsGalleryOpen(true)}
        />

        {/* Mascot Modal */}
        {mascotTargetQuestion && (
          <MascotMikoModal
            question={mascotTargetQuestion}
            isOpen={isMascotModalOpen}
            onClose={() => setIsMascotModalOpen(false)}
          />
        )}

        {/* Meme Gallery Modal */}
        <MemeGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          unlockedMemeIds={unlockedMemes}
        />
      </div>
    );
  }

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Subtopics for active subject
  const subtopicList =
    activeSubject === 'Matematika'
      ? ['Bilangan', 'Geometri dan Pengukuran', 'Data']
      : ['Pemahaman Teks', 'Evaluasi Teks', 'Jenis Teks'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200/80 px-4 py-3 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl shadow-md border-2 border-amber-200 animate-wiggle">
              🐱
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg md:text-xl text-slate-900 font-fun tracking-tight">
                  Juara TKA SD
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Resmi 60 Soal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold hidden sm:block">
                30 Soal Matematika • 30 Soal Bahasa Indonesia • Timer 60 Menit
              </p>
            </div>
          </div>

          {/* Controls: Mode & Timer & Sounds */}
          <div className="flex items-center gap-2">
            {/* Mode selection buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setMode('practice')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'practice'
                    ? 'bg-amber-400 text-amber-950 shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>☕ Latihan Santai</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('exam')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'exam'
                    ? 'bg-indigo-600 text-white shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>⏱️ Simulasi Ujian</span>
              </button>
            </div>

            {/* 60-Minute Timer (Exam mode) */}
            {mode === 'exam' && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black border ${
                  timeRemainingSeconds <= 300
                    ? 'bg-red-100 text-red-900 border-red-300 animate-pulse'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>{formatTime(timeRemainingSeconds)}</span>
              </div>
            )}

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={handleToggleSound}
              title={isSoundMuted ? 'Aktifkan Suara' : 'Matikan Suara'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              {isSoundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            </button>

            {/* Meme Album Button */}
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-extrabold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Album Stiker Meme"
            >
              <span className="text-sm">🖼️</span>
              <span className="hidden md:inline">Stiker ({unlockedMemes.size})</span>
            </button>
          </div>
        </div>
      </header>

      {/* DEDICATED SUBJECT MENU TABS (Matematika 30 vs Bahasa Indonesia 30) */}
      <div className="bg-white border-b-2 border-slate-200 px-4 py-2.5 shadow-xs">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSwitchSubject('Matematika')}
              className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-black transition-all cursor-pointer flex items-center gap-2 border-2 ${
                activeSubject === 'Matematika'
                  ? 'bg-purple-600 text-white border-purple-700 shadow-md scale-102'
                  : 'bg-purple-50/70 text-purple-900 border-purple-200 hover:bg-purple-100'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Menu 1: Matematika SD (30 Soal)</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-900/30 text-white">
                {Object.keys(mathAnswers).length}/30
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSwitchSubject('Bahasa Indonesia')}
              className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-black transition-all cursor-pointer flex items-center gap-2 border-2 ${
                activeSubject === 'Bahasa Indonesia'
                  ? 'bg-rose-600 text-white border-rose-700 shadow-md scale-102'
                  : 'bg-rose-50/70 text-rose-900 border-rose-200 hover:bg-rose-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Menu 2: Bahasa Indonesia SD (30 Soal)</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-900/30 text-white">
                {Object.keys(indoAnswers).length}/30
              </span>
            </button>
          </div>

          {/* Quick AI Bonus Challenge */}
          <button
            type="button"
            disabled={isGeneratingAi}
            onClick={handleGenerateAiQuestion}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105 active:scale-95 transition-all text-xs font-black shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGeneratingAi ? 'Miko Meracik Soal...' : '+ Tantangan Soal AI'}</span>
          </button>
        </div>
      </div>

      {/* Subtopic & Question Type Filter Bar */}
      <div className="bg-amber-50/70 border-b border-amber-200/70 px-4 py-2">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-slate-500 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3" /> Kisi-kisi:
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedSubtopic('all');
                setCurrentIdx(0);
              }}
              className={`px-2.5 py-1 rounded-xl transition-colors shrink-0 cursor-pointer ${
                selectedSubtopic === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Semua Materi ({currentPool.length})
            </button>
            {subtopicList.map((top) => {
              const count = currentPool.filter((q) => q.topic === top).length;
              return (
                <button
                  key={top}
                  type="button"
                  onClick={() => {
                    setSelectedSubtopic(top);
                    setCurrentIdx(0);
                  }}
                  className={`px-2.5 py-1 rounded-xl transition-colors shrink-0 cursor-pointer ${
                    selectedSubtopic === top
                      ? activeSubject === 'Matematika'
                        ? 'bg-purple-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {top} ({count})
                </button>
              );
            })}
          </div>

          {/* Question Type Filter (PG Biasa vs PG Kompleks) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-slate-400">Bentuk:</span>
            <button
              type="button"
              onClick={() => {
                setSelectedType('all');
                setCurrentIdx(0);
              }}
              className={`px-2 py-0.5 rounded-lg text-[11px] cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-slate-800 text-white font-black'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Semua
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType('single_choice');
                setCurrentIdx(0);
              }}
              className={`px-2 py-0.5 rounded-lg text-[11px] cursor-pointer ${
                selectedType === 'single_choice'
                  ? 'bg-blue-600 text-white font-black'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              PG Biasa (20)
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType('complex_statement');
                setCurrentIdx(0);
              }}
              className={`px-2 py-0.5 rounded-lg text-[11px] cursor-pointer ${
                selectedType === 'complex_statement'
                  ? 'bg-purple-600 text-white font-black'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              PG Kompleks (10)
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto w-full px-4 py-6 flex-1 flex flex-col md:flex-row gap-6">
        {/* Left Column: 1-30 Question Navigator */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-500">
                Nomor Soal (1 - {filteredQuestions.length})
              </h3>
              <span className="text-xs font-bold text-slate-700">
                {
                  filteredQuestions.filter((q) => {
                    const ans = currentAnswers[q.id];
                    return (
                      ans &&
                      (ans.selectedOption !== undefined ||
                        ans.selectedOptions?.length ||
                        ans.statementAnswers)
                    );
                  }).length
                }{' '}
                / {filteredQuestions.length}
              </span>
            </div>

            {/* Grid of 30 question buttons */}
            <div className="grid grid-cols-5 gap-2 max-h-80 overflow-y-auto pr-1">
              {filteredQuestions.map((q, idx) => {
                const ans = currentAnswers[q.id];
                const isCurrent = idx === currentIdx;
                const isAnswered =
                  ans &&
                  (ans.selectedOption !== undefined ||
                    ans.selectedOptions?.length ||
                    ans.statementAnswers);
                const isDoubt = ans?.isMarkedDoubt;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(idx);
                      soundManager.playPop();
                    }}
                    className={`h-9 rounded-xl font-black text-xs transition-all relative flex items-center justify-center cursor-pointer border-2 ${
                      isCurrent
                        ? activeSubject === 'Matematika'
                          ? 'border-purple-500 bg-purple-500 text-white scale-105 shadow-sm'
                          : 'border-rose-500 bg-rose-500 text-white scale-105 shadow-sm'
                        : isAnswered
                        ? ans.isCorrect && mode === 'practice'
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : !ans.isCorrect && mode === 'practice'
                          ? 'border-rose-300 bg-rose-50 text-rose-800'
                          : 'border-blue-300 bg-blue-50 text-blue-800'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {idx + 1}
                    {isDoubt && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-semibold">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-md ${
                    activeSubject === 'Matematika' ? 'bg-purple-500' : 'bg-rose-500'
                  }`}
                />
                <span>Sedang Dikerjakan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-blue-100 border border-blue-300" />
                <span>Sudah Dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span>Ragu-ragu</span>
              </div>
            </div>
          </div>

          {/* Finish Button in Exam Mode */}
          {mode === 'exam' && (
            <button
              type="button"
              onClick={handleFinishExam}
              className="w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              🏁 Kumpulkan 30 Soal & Lihat Rapor
            </button>
          )}

          {/* Mascot Mini Card */}
          <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-100/90 to-orange-100 border-2 border-amber-200 text-amber-950 flex flex-col items-center text-center">
            <span className="text-3xl animate-bounce-gentle">🐱</span>
            <h4 className="font-black text-sm font-fun mt-1">Miko si Kucing Juara</h4>
            <p className="text-[11px] text-amber-900 font-medium mt-0.5">
              "Sedang belajar {activeSubject}? Kalau ada soal rumit, tanyakan ke Miko ya!"
            </p>
            {currentQuestion && (
              <button
                type="button"
                onClick={() => {
                  setMascotTargetQuestion(currentQuestion);
                  setIsMascotModalOpen(true);
                }}
                className="mt-3 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Tanya Miko AI</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Active Question Card */}
        <div className="flex-1 flex flex-col">
          {currentQuestion ? (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 md:p-7 shadow-sm flex flex-col flex-1">
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shadow-xs text-white ${
                      activeSubject === 'Matematika' ? 'bg-purple-600' : 'bg-rose-600'
                    }`}
                  >
                    {currentIdx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-800">
                        {currentQuestion.subject}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-xs font-semibold text-slate-500">
                        {currentQuestion.topic}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      Subtopik: {currentQuestion.subTopic}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Difficulty Tag */}
                  <span
                    className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      currentQuestion.difficulty === 'HOTS'
                        ? 'bg-red-100 text-red-800 border border-red-200'
                        : currentQuestion.difficulty === 'Sedang'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    Level: {currentQuestion.difficulty}
                  </span>

                  {/* Doubt toggle */}
                  <button
                    type="button"
                    onClick={toggleDoubt}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1 cursor-pointer ${
                      currentAnswer?.isMarkedDoubt
                        ? 'bg-yellow-400 text-yellow-950 border-yellow-500'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'
                    }`}
                    title="Tandai Ragu-ragu"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ragu-ragu</span>
                  </button>

                  {/* Hint Toggle */}
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="px-2.5 py-1 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold border border-blue-200 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                    <span>{showHint ? 'Tutup Clue' : 'Petunjuk'}</span>
                  </button>
                </div>
              </div>

              {/* Clue / Hint Box */}
              {showHint && (
                <div className="mb-4 p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-start gap-2.5 text-xs text-amber-950 animate-pop-in">
                  <span className="text-xl shrink-0">💡</span>
                  <div>
                    <strong className="font-extrabold">Petunjuk Juara:</strong> {currentQuestion.hint}
                  </div>
                </div>
              )}

              {/* Optional Reading Passage */}
              {currentQuestion.passage && (
                <ReadingPassageCard
                  title={currentQuestion.passageTitle}
                  passage={currentQuestion.passage}
                  genre={currentQuestion.textGenre}
                />
              )}

              {/* Optional Visuals */}
              {currentQuestion.visualType === 'fraction_bars' && currentQuestion.visualData && (
                <FractionVisualizer data={currentQuestion.visualData} />
              )}
              {currentQuestion.visualType === 'bar_chart' && currentQuestion.visualData && (
                <BarChartVisualizer data={currentQuestion.visualData} />
              )}
              {(currentQuestion.visualType === 'triangle_geometry' ||
                currentQuestion.visualType === 'shape_diagram') &&
                currentQuestion.visualData && (
                  <GeometryVisualizer data={currentQuestion.visualData} />
                )}

              {/* Question Text */}
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-5">
                {currentQuestion.question}
              </h3>

              {/* Options or Statement Table */}
              <div className="flex-1">
                {currentQuestion.type === 'complex_statement' && currentQuestion.statements && (
                  <ComplexStatementTable
                    statements={currentQuestion.statements}
                    userAnswers={currentAnswer?.statementAnswers || {}}
                    onChange={handleStatementChange}
                    isSubmitted={mode === 'practice' && Boolean(currentAnswer?.statementAnswers)}
                  />
                )}

                {(currentQuestion.type === 'single_choice' ||
                  currentQuestion.type === 'multiple_choice') &&
                  currentQuestion.options && (
                    <div className="space-y-3">
                      {currentQuestion.options.map((optionText, optIdx) => {
                        const isSingle = currentQuestion.type === 'single_choice';
                        const isSelected = isSingle
                          ? currentAnswer?.selectedOption === optIdx
                          : currentAnswer?.selectedOptions?.includes(optIdx);

                        const isRevealed = mode === 'practice' && isSelected;
                        const isCorrectAnswer = isSingle
                          ? optIdx === currentQuestion.correctAnswer
                          : currentQuestion.correctAnswers?.includes(optIdx);

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(optIdx)}
                            className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 cursor-pointer group ${
                              isSelected
                                ? isRevealed
                                  ? isCorrectAnswer
                                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                                    : 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-xs'
                                  : 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-xs'
                                : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs transition-colors ${
                                  isSelected
                                    ? isRevealed
                                      ? isCorrectAnswer
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-rose-600 text-white'
                                      : 'bg-amber-500 text-white'
                                    : 'bg-white border border-slate-300 text-slate-700 group-hover:bg-amber-100'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="text-sm md:text-base font-semibold leading-snug">
                                {optionText}
                              </span>
                            </div>

                            {/* Status Icon */}
                            {isRevealed && (
                              <div className="shrink-0">
                                {isCorrectAnswer ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : (
                                  <XCircle className="w-5 h-5 text-rose-600" />
                                )}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
              </div>

              {/* Instant Explanation in Practice Mode */}
              {mode === 'practice' && showExplanation && currentQuestion.explanation && (
                <div className="mt-6 p-4 md:p-5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-blue-200">
                    <span className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" /> Pembahasan Cerdas & Konsep
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setMascotTargetQuestion(currentQuestion);
                        setIsMascotModalOpen(true);
                      }}
                      className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg hover:bg-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>🐱 Tanya Miko AI</span>
                    </button>
                  </div>

                  <p className="text-xs md:text-sm font-bold text-slate-900 mb-2">
                    💡 {currentQuestion.explanation.summary}
                  </p>

                  <div className="space-y-1 text-xs text-slate-700 pl-1 mb-3">
                    {currentQuestion.explanation.steps.map((st, i) => (
                      <p key={i} className="leading-relaxed">
                        • {st}
                      </p>
                    ))}
                  </div>

                  {currentQuestion.explanation.quickTip && (
                    <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-xs flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Jurus Kilat: {currentQuestion.explanation.quickTip}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  disabled={currentIdx === 0}
                  onClick={() => {
                    setCurrentIdx((prev) => Math.max(0, prev - 1));
                    soundManager.playPop();
                  }}
                  className="px-4 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
                </button>

                <div className="flex items-center gap-2">
                  {currentIdx === filteredQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleFinishExam}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs md:text-sm shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
                    >
                      <Trophy className="w-4 h-4" />
                      <span>Selesai 30 Soal & Lihat Rapor 🏆</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentIdx((prev) => Math.min(filteredQuestions.length - 1, prev + 1));
                        soundManager.playPop();
                      }}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs md:text-sm shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Soal Berikutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 text-center text-slate-500">
              Tidak ada soal pada filter ini.
            </div>
          )}
        </div>
      </main>

      {/* Meme Popup Modal */}
      <MemePopupModal
        meme={activeMeme}
        isOpen={isMemeModalOpen}
        onClose={() => setIsMemeModalOpen(false)}
        onViewExplanation={() => {
          setShowExplanation(true);
        }}
        onNextQuestion={() => {
          if (currentIdx < filteredQuestions.length - 1) {
            setCurrentIdx((prev) => prev + 1);
          } else {
            handleFinishExam();
          }
        }}
        hasNextQuestion={currentIdx < filteredQuestions.length - 1}
      />

      {/* Mascot AI Modal */}
      {mascotTargetQuestion && (
        <MascotMikoModal
          question={mascotTargetQuestion}
          isOpen={isMascotModalOpen}
          onClose={() => setIsMascotModalOpen(false)}
        />
      )}

      {/* Meme Gallery Modal */}
      <MemeGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        unlockedMemeIds={unlockedMemes}
      />
    </div>
  );
}
