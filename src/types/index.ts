export type Subject = 'Matematika' | 'Bahasa Indonesia';

export type QuestionType = 'single_choice' | 'multiple_choice' | 'complex_statement';

export type Difficulty = 'Mudah' | 'Sedang' | 'HOTS';

export type TextGenre = 'Narasi' | 'Deskripsi' | 'Eksposisi' | 'Persuasi' | 'Prosedur';

export interface ComplexStatement {
  id: string;
  text: string;
  isCorrect: boolean; // true = Pernyataan BENAR, false = Pernyataan SALAH
  explanation: string;
}

export interface QuestionExplanation {
  summary: string;
  steps: string[];
  concept: string;
  quickTip?: string;
}

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  subTopic: string;
  title: string;
  question: string;
  type: QuestionType;
  difficulty: Difficulty;
  passageTitle?: string;
  passage?: string;
  textGenre?: TextGenre;
  visualType?: 'fraction_bars' | 'pie_fraction' | 'triangle_geometry' | 'bar_chart' | 'data_table' | 'shape_diagram';
  visualData?: any;
  options?: string[]; // Pilihan A, B, C, D
  correctAnswer?: number; // Single choice index (0-3)
  correctAnswers?: number[]; // Multiple choice indices e.g. [0, 2]
  statements?: ComplexStatement[]; // For complex Benar/Salah statements
  explanation: QuestionExplanation;
  hint: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOption?: number;
  selectedOptions?: number[];
  statementAnswers?: Record<string, boolean>; // id -> user clicked Benar (true) or Salah (false)
  isCorrect: boolean;
  timeSpentSeconds: number;
  isMarkedDoubt?: boolean;
}

export interface MemeItem {
  id: string;
  type: 'correct' | 'wrong' | 'celebrate';
  title: string;
  tagline: string;
  caption: string;
  character: string;
  bgColor: string;
  accentColor: string;
  rarity: 'Umum' | 'Langka' | 'Legendaris';
  emoji: string;
  theme: string;
}

export type QuizMode = 'practice' | 'exam';

export interface QuizFilter {
  subject: 'all' | Subject;
  topic?: string;
  difficulty?: 'all' | Difficulty;
  questionType?: 'all' | QuestionType;
}

export interface PerformanceReport {
  studentName: string;
  date: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  score: number; // 0 - 100
  totalTimeSeconds: number;
  avgTimeSeconds: number;
  gradeLevel: 'Mahir' | 'Cakap' | 'Dasar' | 'Perlu Intervensi';
  subjectBreakdown: Record<Subject, { total: number; correct: number; percentage: number }>;
  topicBreakdown: Record<string, { total: number; correct: number; percentage: number; subject: Subject }>;
  typeBreakdown: Record<QuestionType, { total: number; correct: number; percentage: number }>;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  aiAdvice?: string;
  aiMotto?: string;
}
