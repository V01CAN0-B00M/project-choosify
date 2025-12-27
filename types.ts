
export type Category = 'Car' | 'Laptop' | 'Phone' | 'Smartwatch';

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
  }[];
}

export interface Recommendation {
  productName: string;
  tagline: string;
  reasons: string[];
  description: string;
  specs: string[];
}

export interface UserAnswers {
  [questionId: string]: string;
}

export interface CategoryConfig {
  icon: string;
  color: string;
  questions: Question[];
}
