import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', async () => {
  const {container} = render(<App />);
  const linkElement = await container.querySelector('pokemon')
  expect(linkElement).toBeVisible();
});
