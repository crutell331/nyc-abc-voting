import {
  getCandidateById,
  getIssueById,
  getCandidateStances,
  getStancesByIssue,
  getCandidatesForIssue,
  getTopCandidatesForIssue,
  getCandidateStanceForIssue,
  getAverageRatingForCandidate,
  sortCandidatesByIssueRating
} from '../dataUtils';

describe('Data Utility Functions', () => {
  test('getCandidateById returns the correct candidate', () => {
    const candidate = getCandidateById('candidate1');
    expect(candidate).toBeDefined();
    expect(candidate?.name).toBe('Maya Rodriguez');
  });

  test('getCandidateById returns undefined for non-existent ID', () => {
    const candidate = getCandidateById('nonexistent');
    expect(candidate).toBeUndefined();
  });

  test('getIssueById returns the correct issue', () => {
    const issue = getIssueById('housing');
    expect(issue).toBeDefined();
    expect(issue?.title).toBe('Affordable Housing');
  });

  test('getCandidateStances returns all stances for a candidate', () => {
    const stances = getCandidateStances('candidate1');
    expect(stances.length).toBeGreaterThan(0);
    expect(stances.every(stance => stance.candidateId === 'candidate1')).toBe(true);
  });

  test('getStancesByIssue returns all stances for an issue', () => {
    const stances = getStancesByIssue('housing');
    expect(stances.length).toBeGreaterThan(0);
    expect(stances.every(stance => stance.issueId === 'housing')).toBe(true);
  });

  test('getCandidatesForIssue returns all candidates with stances on an issue', () => {
    const candidates = getCandidatesForIssue('housing');
    expect(candidates.length).toBeGreaterThan(0);
    
    // Each candidate should have a stance on housing
    candidates.forEach(candidate => {
      const stance = getCandidateStanceForIssue(candidate.id, 'housing');
      expect(stance).toBeDefined();
    });
  });

  test('getTopCandidatesForIssue returns candidates sorted by rating', () => {
    const topCandidates = getTopCandidatesForIssue('housing', 3);
    expect(topCandidates.length).toBeLessThanOrEqual(3);
    
    // Verify they're sorted by rating
    const stances = topCandidates.map(candidate => 
      getCandidateStanceForIssue(candidate.id, 'housing')
    );
    
    for (let i = 0; i < stances.length - 1; i++) {
      expect(stances[i]?.rating).toBeGreaterThanOrEqual(stances[i+1]?.rating || 0);
    }
  });

  test('getCandidateStanceForIssue returns the correct stance', () => {
    const stance = getCandidateStanceForIssue('candidate1', 'housing');
    expect(stance).toBeDefined();
    expect(stance?.candidateId).toBe('candidate1');
    expect(stance?.issueId).toBe('housing');
  });

  test('getAverageRatingForCandidate calculates correctly', () => {
    const avgRating = getAverageRatingForCandidate('candidate1');
    expect(avgRating).toBeGreaterThan(0);
    expect(avgRating).toBeLessThanOrEqual(5);
  });

  test('sortCandidatesByIssueRating returns candidates in correct order', () => {
    const sortedCandidates = sortCandidatesByIssueRating('housing');
    expect(sortedCandidates.length).toBeGreaterThan(0);
    
    // Verify they're sorted by rating
    for (let i = 0; i < sortedCandidates.length - 1; i++) {
      const currentRating = getCandidateStanceForIssue(sortedCandidates[i].id, 'housing')?.rating || 0;
      const nextRating = getCandidateStanceForIssue(sortedCandidates[i+1].id, 'housing')?.rating || 0;
      expect(currentRating).toBeGreaterThanOrEqual(nextRating);
    }
  });
});