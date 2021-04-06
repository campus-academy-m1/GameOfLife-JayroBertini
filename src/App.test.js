import { render, screen } from '@testing-library/react';
import App from './App';

describe("Filter function", () => {
  
  test("Test du rendu de l'application", () => {
    render(<App />);
    const linkElement = screen.getByText(/GAME OF LIFE - BERTINI & JAYRO/i);
    expect(linkElement).toBeInTheDocument();
  });

});

