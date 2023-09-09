import { validSpacing } from './validSpacing';

describe('validSpacing Tests', function () {
  it("Testing 'Hello world'", function () {
    expect(validSpacing('Hello world')).toBe(true);
  });
  it("Testing ' Hello world'", function () {
    expect(validSpacing(' Hello world')).toBe(false);
  });
  it("Testing 'Hello  world '", function () {
    expect(validSpacing('Hello  world ')).toBe(false);
  });
  it("Testing 'Hello'", function () {
    expect(validSpacing('Hello')).toBe(true);
  });
  it("Testing 'Helloworld'", function () {
    expect(validSpacing('Helloworld')).toBe(true);
  });
});
