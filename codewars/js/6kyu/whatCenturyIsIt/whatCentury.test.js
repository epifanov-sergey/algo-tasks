import { whatCentury } from './whatCentury';

describe('WhatCentury tests', () => {
  it('test', () => {
    expect(whatCentury(1999)).toBe('20th');
    expect(whatCentury('2011')).toBe('21st');
    expect(whatCentury('2154')).toBe('22nd');
    expect(whatCentury('2259')).toBe('23rd');
    expect(whatCentury('1234')).toBe('13th');
    expect(whatCentury('1023')).toBe('11th');
    expect(whatCentury('2000')).toBe('20th');
  });
});
