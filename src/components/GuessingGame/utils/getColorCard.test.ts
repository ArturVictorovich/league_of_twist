import { describe, expect, it } from 'vitest';
import { getColorCard } from './getColorCard';
describe('getColorCard', () => {
  it('возвращает success, если строки равны', () => {
    expect(getColorCard('Нами', 'Нами')).toBe('success');
  });
  it('возвращает danger, если строки не равны ', () => {
    expect(getColorCard('Нами', 'Наутилус')).toBe('danger');
  });
  it('возвращает success, если массивы равны без разницы на порядок внутри', () => {
    expect(getColorCard(['топ', 'мид'], ['мид', 'топ'])).toBe('success');
  });
  it('возвращает warning, если между массивами есть хоть одно общее свойство', () => {
    expect(getColorCard(['топ'], ['мид', 'топ'])).toBe('warning');
  });
  it('вернет danger, если между массивами нет ни одного совпадения', () => {
    expect(getColorCard(['мид', 'топ'], ['лес', 'адк'])).toBe('danger');
  });
});
