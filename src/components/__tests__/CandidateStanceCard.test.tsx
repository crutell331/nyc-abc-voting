import React from 'react';
import { render, screen } from '@testing-library/react';
import CandidateStanceCard from '../CandidateStanceCard';
import { Candidate, CandidateStance, Issue } from '@/types';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={props.src} alt={props.alt} />;
  },
}));

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

describe('CandidateStanceCard Component', () => {
  const mockCandidate: Candidate = {
    id: 'test-candidate',
    name: 'Test Candidate',
    image: '/test-image.jpg',
    bio: 'This is a test candidate bio.',
    endorsements: ['Test Org 1', 'Test Org 2'],
    website: 'https://test.com',
    socialMedia: {
      twitter: '@test',
    },
  };

  const mockIssue: Issue = {
    id: 'housing',
    title: 'Affordable Housing',
    description: 'Policies to address the housing crisis.',
    icon: 'Home',
  };

  const mockStanceWithQuote: CandidateStance = {
    candidateId: 'test-candidate',
    issueId: 'housing',
    stance: 'This candidate strongly supports affordable housing policies.',
    rating: 4,
    quote: 'Housing is a human right, not a commodity.',
  };

  const mockStanceWithoutQuote: CandidateStance = {
    candidateId: 'test-candidate',
    issueId: 'housing',
    stance: 'This candidate strongly supports affordable housing policies.',
    rating: 3,
  };

  test('renders candidate stance information with quote correctly', () => {
    render(
      <CandidateStanceCard 
        candidate={mockCandidate} 
        stance={mockStanceWithQuote} 
        issue={mockIssue} 
      />
    );
    
    expect(screen.getByText('Test Candidate')).toBeInTheDocument();
    expect(screen.getByText('on Affordable Housing')).toBeInTheDocument();
    expect(screen.getByText('This candidate strongly supports affordable housing policies.')).toBeInTheDocument();
    expect(screen.getByText('"Housing is a human right, not a commodity."')).toBeInTheDocument();
    expect(screen.getByText('View full profile')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/candidates/test-candidate');
  });

  test('renders candidate stance information without quote correctly', () => {
    render(
      <CandidateStanceCard 
        candidate={mockCandidate} 
        stance={mockStanceWithoutQuote} 
        issue={mockIssue} 
      />
    );
    
    expect(screen.getByText('Test Candidate')).toBeInTheDocument();
    expect(screen.getByText('on Affordable Housing')).toBeInTheDocument();
    expect(screen.getByText('This candidate strongly supports affordable housing policies.')).toBeInTheDocument();
    expect(screen.queryByText('"Housing is a human right, not a commodity."')).not.toBeInTheDocument();
  });
});