import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { render } from '@/test-utils/render-with-providers';
import { Title } from '../Title';

describe('HomePage', () => {
  it('should display a title', () => {
    render(<Title />);

    expect(
      screen.getByRole('heading', { name: 'tanstack-start-template - A simple TanStack Start starter template' }),
    ).toBeVisible();
  });
});
