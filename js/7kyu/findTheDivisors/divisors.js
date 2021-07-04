export const divisors = (integer) => {
  const arDivisors = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arDivisors.push(i);
    }
  }

  return arDivisors.length ? arDivisors : `${integer} is prime`;
};
