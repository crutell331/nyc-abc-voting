import { RankChoiceInfo } from '../types';

export const rankChoiceInfo: RankChoiceInfo[] = [
  {
    step: 1,
    title: 'Rank Your Top 5 Candidates',
    description: "In NYC's ranked choice voting system, you can rank up to 5 candidates in order of preference. This gives you more choice and ensures your vote has greater impact.",
    image: '/images/rank-choice/rank-your-top-5-candidates-svg.svg',
  },
  {
    step: 2,
    title: 'First Choices Are Counted',
    description: 'Initially, only first-choice votes are counted. If a candidate receives more than 50% of first-choice votes, they win outright.',
    image: '/images/rank-choice/first-choices-are-counted-svg.svg',
  },
  {
    step: 3,
    title: 'Elimination Rounds Begin',
    description: 'If no candidate receives more than 50%, the candidate with the fewest votes is eliminated. If your first choice is eliminated, your vote goes to your second choice.',
    image: '/images/rank-choice/elimination-rounds-begin-svg.svg',
  },
  {
    step: 4,
    title: 'Process Continues',
    description: 'This process continues until a candidate has more than 50% of the votes or only two candidates remain.',
    image: '/images/rank-choice/process-continues-svg.svg',
  },
  {
    step: 5,
    title: 'Why Not Rank Cuomo?',
    description: "If you want a mayor who will fight for working class families, immigrants, and communities of color, it's important not to rank Andrew Cuomo at all. Even ranking him as your 5th choice could help him win if your higher-ranked candidates are eliminated. Remember: You don't have to use all 5 rankings.",
    image: '/images/rank-choice/why-not-rank-cuomo-svg.svg',
  },
];