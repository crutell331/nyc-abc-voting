import React from 'react';
import { render, screen } from '@testing-library/react';
import RankChoiceStep from '../RankChoiceStep';
import { RankChoiceInfo } from '@/types';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={props.src} alt={props.alt} />;
  },
}));

describe('RankChoiceStep Component', () => {
  const mockStep: RankChoiceInfo = {
    step: 1,
    title: 'Rank Your Top 5 Candidates',
    description: 'In NYC ranked choice voting system, you can rank up to 5 candidates in order of preference.',
    image: '/test-image.svg',
  };

  const mockStepWithoutImage: RankChoiceInfo = {
    step: 2,
    title: 'First Choices Are Counted',
    description: 'Initially, only first-choice votes are counted.',
  };

  test('renders step information with image correctly', () => {
    render(<RankChoiceStep step={mockStep} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Rank Your Top 5 Candidates')).toBeInTheDocument();
    expect(screen.getByText('In NYC's ranked choice voting system, you can rank up to 5 candidates in order of preference.')).toBeInTheDocument();
    expect(screen.getByAltText('Rank Your Top 5 Candidates')).toBeInTheDocument();
  });

  test('renders step information without image correctly', () => {
    render(<RankChoiceStep step={mockStepWithoutImage} />);
    
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('First Choices Are Counted')).toBeInTheDocument();
    expect(screen.getByText('Initially, only first-choice votes are counted.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('applies active styling when isActive is true', () => {
    const { container } = render(<RankChoiceStep step={mockStep} isActive={true} />);
    
    // Check for blue background class
    expect(container.firstChild).toHaveClass('bg-blue-100');
    expect(container.firstChild).toHaveClass('border-blue-500');
    
    // Check for active step number styling
    const stepNumber = screen.getByText('1');
    expect(stepNumber.parentElement).toHaveClass('bg-blue-500');
    expect(stepNumber.parentElement).toHaveClass('text-white');
  });
});