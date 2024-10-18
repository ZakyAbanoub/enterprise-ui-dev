import { test, expect, vi } from 'vitest';
import { log } from './log';

test('it spies on the multiply method', () => {
    const mock = vi.fn();

    mock('wow');

    expect(mock).toHaveBeenLastCalledWith('wow')
});
