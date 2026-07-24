import { describe, expect, it } from 'vitest';
import { getYearHint } from './getYearHint';

describe('getYearHint', () => {
  it('Возвращает lower если год выхода текущего чемпиона выше года загаданного', () => {
    expect(getYearHint(2017, 2009)).toBe('lower');
  });
  it('Возвращает higher если год текущего чемпиона ниже чем год загаданного', () => {
    expect(getYearHint(2009, 2011)).toBe('higher');
  });
  it('Если года совпали, вернет null', () => {
    expect(getYearHint(2010, 2010)).toBeNull();
  });
});
