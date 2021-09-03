import { render, screen } from '@testing-library/react';
import AppHomePage from './Pages/home';

test('page-one', () => {
  render(<AppHomePage/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



