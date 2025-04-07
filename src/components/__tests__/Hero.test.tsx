import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

describe('Hero Component', () => {
  test('renders title correctly', () => {
    render(<Hero title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders subtitle when provided', () => {
    render(<Hero title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('does not render subtitle when not provided', () => {
    render(<Hero title="Test Title" />);
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });

  test('renders primary CTA button when provided', () => {
    render(
      <Hero 
        title="Test Title" 
        ctaText="Learn More" 
        ctaLink="/learn-more" 
      />
    );
    
    const ctaButton = screen.getByRole('link', { name: /learn more/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/learn-more');
  });

  test('renders secondary CTA button when provided', () => {
    render(
      <Hero 
        title="Test Title" 
        secondaryCtaText="About Us" 
        secondaryCtaLink="/about" 
      />
    );
    
    const secondaryCtaButton = screen.getByRole('link', { name: /about us/i });
    expect(secondaryCtaButton).toBeInTheDocument();
    expect(secondaryCtaButton).toHaveAttribute('href', '/about');
  });

  test('renders both CTA buttons when both are provided', () => {
    render(
      <Hero 
        title="Test Title" 
        ctaText="Learn More" 
        ctaLink="/learn-more"
        secondaryCtaText="About Us" 
        secondaryCtaLink="/about" 
      />
    );
    
    const ctaButton = screen.getByRole('link', { name: /learn more/i });
    const secondaryCtaButton = screen.getByRole('link', { name: /about us/i });
    
    expect(ctaButton).toBeInTheDocument();
    expect(secondaryCtaButton).toBeInTheDocument();
  });

  test('does not render any CTA buttons when none are provided', () => {
    render(<Hero title="Test Title" />);
    
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});