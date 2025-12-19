
export type Trait = 'E' | 'I' | 'O' | 'S' | 'C' | 'P' | 'A' | 'N' | 'F' | 'T' | 'SCORE';

export interface Score {
  [key: string]: number;
}

export interface Option {
  text: string;
  scores: Partial<Record<Trait, number>>;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
}

export interface Job {
  title: string;
  desc: string;
  icon: string;
}

export interface ActionStep {
  step: string;
  desc: string;
}

export interface PersonalityType {
  id: string;
  testId: 'PERSONALITY' | 'GROWTH';
  title: string;
  englishTitle: string;
  emoji: string;
  oneLiner: string;
  description: string;
  keywords: string[];
  powers: { emoji: string; title: string; desc: string }[];
  jobs?: { top: Job[]; others: string[] };
  loveStyle?: string;
  scarcity: number;
  growth: string;
  celebs?: string[];
  match?: { good: string; complementary: string };
  traits?: Trait[];
  imagePath?: string;
  characterPrompt: string;
  themeColor: string;
  mentorVoice?: string;
  actionPlan?: ActionStep[];
}
