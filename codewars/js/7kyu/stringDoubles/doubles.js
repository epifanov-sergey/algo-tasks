export const doubles = (s) => {
  const stack = [null, null];
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (!stack[0]) {
      stack[0] = s[i];
    } else if (!stack[1]) {
      stack[1] = s[i];
    } else {
      if (stack[0] === stack[1]) {
        stack[0] = s[i];
        stack[1] = null;
      } else {
        res += stack[0];
        stack[0] = stack[1];
        stack[1] = s[i];
      }
    }
  }

  if (stack[0] !== stack[1]) {
    if (stack[0]) {
      res += stack[0];
    }

    if (stack[1]) {
      res += stack[1];
    }
  }

  if (res !== s) {
    return doubles(res);
  }

  return res;
};
