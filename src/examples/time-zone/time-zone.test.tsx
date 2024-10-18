import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from 'test/utilities';
import TimeZone from '.';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date());
});

afterEach(() => {
  vi.useRealTimers();
});

test('it should render successfully', () => {
  render(<TimeZone />);
});

test('should match the snapshot', () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});

