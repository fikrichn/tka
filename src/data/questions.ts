import { Question } from '../types';
import { MATH_QUESTIONS_30 } from './mathQuestions';
import { INDO_QUESTIONS_30 } from './indoQuestions';

export { MATH_QUESTIONS_30 } from './mathQuestions';
export { INDO_QUESTIONS_30 } from './indoQuestions';

// Combined questions (60 questions total: 30 Math + 30 Indonesian)
export const ALL_QUESTIONS_60: Question[] = [
  ...MATH_QUESTIONS_30,
  ...INDO_QUESTIONS_30,
];

// Default initial questions
export const INITIAL_QUESTIONS: Question[] = ALL_QUESTIONS_60;
