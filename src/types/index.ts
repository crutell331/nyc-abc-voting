export interface Candidate {
  id: string;
  name: string;
  image: string;
  bio: string;
  endorsements: string[];
  website: string | null;
  socialMedia: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CandidateStance {
  candidateId: string;
  issueId: string;
  stance: string;
  rating: number; // 1-5 rating for how strongly they support this issue
  quote?: string;
}

export interface RankChoiceInfo {
  step: number;
  title: string;
  description: string;
  image?: string;
}