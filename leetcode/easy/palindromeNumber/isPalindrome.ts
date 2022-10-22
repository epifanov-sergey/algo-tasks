export const isPalindrome = (x: number): boolean => {
  const numToStr = String(x);
  let left = 0;
  let right = numToStr.length - 1;

  while (left < right) {
    if (numToStr[left] !== numToStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
