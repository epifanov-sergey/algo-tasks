export function removeDuplicateWords(s: string): string {
  return [...new Set(s.split(' '))].join(' ');
}
