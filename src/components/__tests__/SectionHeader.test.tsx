import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from '../SectionHeader';

describe('SectionHeader Component', () => {
  test('renders title correctly', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders subtitle when provided', () => {
    render(<SectionHeader title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('does not render subtitle when not provided', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });

  test('applies centered class when centered prop is true', () => {
    const { container } = render(<SectionHeader title="Test Title" centered={true} />);
    expect(container.firstChild).toHaveClass('text-center');
  });

  test('does not apply centered class when centered prop is false', () => {
    const { container } = render(<SectionHeader title="Test Title" centered={false} />);
    expect(container.firstChild).not.toHaveClass('text-center');
  });

  test('does not apply centered class when centered prop is not provided', () => {
    const { container } = render(<SectionHeader title="Test Title" />);
    expect(container.firstChild).not.toHaveClass('text-center');
  });
});