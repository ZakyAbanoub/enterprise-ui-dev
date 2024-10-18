// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import { render } from './test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  // screen.debug(document.body);  // npm test --run
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
  const button = screen.getByRole('button', { name: 'Increment' });
  await user.click(button);
  // fireEvent.click(button);
  expect(currentCount).toHaveTextContent('1');
});
