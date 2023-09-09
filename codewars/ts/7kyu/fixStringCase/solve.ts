export function solve(s: string) {
  const limit: number = Math.ceil(s.length / 2);
  let counter: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      counter++;
    }
  }

  if (counter > limit) {
    return s.toUpperCase();
  }

  return s.toLowerCase();
}
