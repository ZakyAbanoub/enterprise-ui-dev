import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

expect.extend(toHaveNoViolations);

it('should demonstrate this matcher`s usage', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice']
    }
  });

  expect(results).toHaveNoViolations();
});