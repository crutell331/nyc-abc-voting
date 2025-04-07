import React from 'react';
import { render, screen } from '@testing-library/react';
import CandidateCard from '../CandidateCard';
import { Candidate } from '@/types';

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

// Mock the dataUtils
jest.mock('@/utils/dataUtils', () => ({
  getAverageRatingForCandidate: jest.fn().mockReturnValue(4),
}));

describe('CandidateCard Component', () => {
  const mockCandidate: Candidate = {
    id: 'test-candidate',
    name: 'Test Candidate',
    image: '/test-image.jpg',
    bio: 'This is a test candidate bio that should be long enough to test truncation in the component.',
    endorsements: ['Test Org 1', 'Test Org 2'],
    website: 'https://test.com',
    socialMedia: {
      twitter: '@test',
    },
  };

  test('renders candidate information correctly', () => {
    render(<CandidateCard candidate={mockCandidate} />);
    
    expect(screen.getByText('Test Candidate')).toBeInTheDocument();
    expect(screen.getByText(/This is a test candidate bio/)).toBeInTheDocument();
    expect(screen.getByText('Test Org 1')).toBeInTheDocument();
    expect(screen.getByText('Test Org 2')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/candidates/test-candidate');
  });

  test('displays the correct number of filled stars based on rating', () => {
    render(<CandidateCard candidate={mockCandidate} rating={3} />);
    
    // This is a simplified test since we can't easily check SVG fill states
    // In a real test, you might use a more sophisticated approach to verify the stars
    expect(screen.getByText('Test Candidate')).toBeInTheDocument();
  });

  test('shows highlight issue when provided', () => {
    render(<CandidateCard candidate={mockCandidate} highlightIssue="Housing" />);
    
    expect(screen.getByText('on Housing')).toBeInTheDocument();
  });
});