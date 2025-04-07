import React from 'react';
import { render, screen } from '@testing-library/react';
import IssueCard from '../IssueCard';
import { Issue } from '@/types';

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

describe('IssueCard Component', () => {
  const mockIssue: Issue = {
    id: 'housing',
    title: 'Affordable Housing',
    description: 'Policies to address the housing crisis and tenant protections.',
    icon: 'Home',
  };

  test('renders issue information correctly', () => {
    render(<IssueCard issue={mockIssue} />);
    
    expect(screen.getByText('Affordable Housing')).toBeInTheDocument();
    expect(screen.getByText('Policies to address the housing crisis and tenant protections.')).toBeInTheDocument();
    expect(screen.getByText('See candidates')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/issues/housing');
  });
});