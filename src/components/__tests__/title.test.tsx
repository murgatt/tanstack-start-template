import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Title } from '../title';

describe('HomePage', () => {
  it('should display a title', () => {
    render(<Title />);

    expect(
      screen.getByRole('heading', { name: 'tanstack-start-template - A simple TanStack Start starter template' }),
    ).toBeVisible();
  });
});
