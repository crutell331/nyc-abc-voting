import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../Icon';

// Mock console.error to prevent test output pollution
const originalConsoleError = console.error;
beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalConsoleError;
});

describe('Icon Component', () => {
  test('renders an icon when a valid name is provided', () => {
    render(<Icon name="Home" data-testid="icon" />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('does not render and logs error when an invalid name is provided', () => {
    render(<Icon name="NonExistentIcon" data-testid="icon" />);
    const iconElement = screen.queryByTestId('icon');
    expect(iconElement).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
  });

  test('passes additional props to the icon', () => {
    render(<Icon name="Home" data-testid="icon" size={24} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('width', '24');
    expect(iconElement).toHaveAttribute('height', '24');
  });
});