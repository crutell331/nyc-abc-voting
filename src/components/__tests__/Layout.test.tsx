import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

describe('Layout Component', () => {
  test('renders header with navigation links', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    
    // Check for navigation links
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /issues/i })).toHaveAttribute('href', '/issues');
    expect(screen.getByRole('link', { name: /candidates/i })).toHaveAttribute('href', '/candidates');
    expect(screen.getByRole('link', { name: /rank choice voting/i })).toHaveAttribute('href', '/rank-choice');
    expect(screen.getByRole('link', { name: /about abc/i })).toHaveAttribute('href', '/about');
  });

  test('renders children content', () => {
    render(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    );
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders footer with important dates', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    
    expect(screen.getByText('Primary Election: June 22, 2025')).toBeInTheDocument();
    expect(screen.getByText('Early Voting: June 12-20, 2025')).toBeInTheDocument();
    expect(screen.getByText('Registration Deadline: June 2, 2025')).toBeInTheDocument();
    
    // Check for copyright with current year
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} NYC Democratic Primary Voting Guide`))).toBeInTheDocument();
  });
});