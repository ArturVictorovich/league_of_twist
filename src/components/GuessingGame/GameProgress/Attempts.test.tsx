import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Attempts } from './Attempts';

describe('Attempts', () => {
  it('отображает заголовок счетчика', () => {
    render(<Attempts attempts={3} maxAttempts={10} />);

    expect(screen.getByText('Попытки')).toBeInTheDocument();
  });
  it('отображает текущее и максимальное значение ', () => {
    render(<Attempts attempts={5} maxAttempts={10} />);

    expect(screen.getByText('5/10')).toBeInTheDocument();
  });
});
