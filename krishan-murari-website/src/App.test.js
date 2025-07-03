import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock IntersectionObserver for test environment
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('App Component', () => {
  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  test('navigates between sections', () => {
    render(<App />);
    // Home section should be visible
    expect(screen.getByRole('heading', { name: /Unlock More Profit/i })).toBeInTheDocument();
    // Navigate to About Us
    fireEvent.click(screen.getByText('About Us'));
    expect(screen.getByRole('heading', { name: /About Krishan Murari/i })).toBeInTheDocument();
    // Navigate to Products
    fireEvent.click(screen.getByText('Products'));
    expect(screen.getByText('Our Products')).toBeInTheDocument();
    // Navigate to Contact Us
    fireEvent.click(screen.getByText('Contact Us'));
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    // Navigate back to Home
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByRole('heading', { name: /Unlock More Profit/i })).toBeInTheDocument();
  });

  test('reviews section functionality', () => {
    render(<App />);
    // Check if initial review is visible
    expect(screen.getByRole('heading', { name: /What Our Farmers Say/i })).toBeInTheDocument();
    // Click see all reviews button
    const seeAllButton = screen.getByText('See All Reviews');
    fireEvent.click(seeAllButton);
    // Button text should change
    expect(screen.getByText('Show Less')).toBeInTheDocument();
    // Click show less button
    fireEvent.click(screen.getByText('Show Less'));
    expect(screen.getByText('See All Reviews')).toBeInTheDocument();
  });

  test('CTA buttons are present and clickable', () => {
    render(<App />);
    // There are two CTA buttons on the home page
    const ctaButtons = screen.getAllByRole('button', { name: /Request Free Vet Consultation/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
    ctaButtons.forEach(button => {
      expect(button).toBeEnabled();
    });
  });
});
