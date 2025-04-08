import { candidates } from '@/data/candidates';
import { issues } from '@/data/issues';
import { candidateStances } from '@/data/candidateStances';
import { Candidate, Issue, CandidateStance } from '@/types';

export function getCandidateById(id: string): Candidate | undefined {
  return candidates.find(candidate => candidate.id === id);
}

export function getIssueById(id: string): Issue | undefined {
  return issues.find(issue => issue.id === id);
}

export function getCandidateStances(candidateId: string): CandidateStance[] {
  return candidateStances.filter(stance => stance.candidateId === candidateId);
}

export function getStancesByIssue(issueId: string): CandidateStance[] {
  return candidateStances.filter(stance => stance.issueId === issueId);
}

export function getCandidatesForIssue(issueId: string): Candidate[] {
  const stances = getStancesByIssue(issueId);
  const candidateIds = stances.map(stance => stance.candidateId);
  return candidates.filter(candidate => candidateIds.includes(candidate.id));
}

export function getTopCandidatesForIssue(issueId: string, count = 3): Candidate[] {
  const stances = getStancesByIssue(issueId);
  const sortedStances = [...stances].sort((a, b) => b.rating - a.rating);
  const topCandidateIds = sortedStances.slice(0, count).map(stance => stance.candidateId);
  return topCandidateIds.map(id => getCandidateById(id)!).filter(Boolean);
}

export function getCandidateStanceForIssue(candidateId: string, issueId: string): CandidateStance | undefined {
  return candidateStances.find(
    stance => stance.candidateId === candidateId && stance.issueId === issueId
  );
}

export function getAverageRatingForCandidate(candidateId: string): number {
  const stances = getCandidateStances(candidateId);
  if (stances.length === 0) return 0;
  
  const sum = stances.reduce((total, stance) => total + stance.rating, 0);
  return sum / stances.length;
}

export function sortCandidatesByIssueRating(issueId: string): Candidate[] {
  const stances = getStancesByIssue(issueId);
  const sortedStances = [...stances].sort((a, b) => b.rating - a.rating);
  
  return sortedStances
    .map(stance => getCandidateById(stance.candidateId))
    .filter((candidate): candidate is Candidate => candidate !== undefined);
}