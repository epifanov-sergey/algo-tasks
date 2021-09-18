export const formatDuration = (time) => {
  if (time === 0) {
    return 'now';
  }
  const combinations = [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1];
  const phrases = ['year', 'day', 'hour', 'minute', 'second'];
  const values = [0, 0, 0, 0, 0];

  for (let i = 0; i < combinations.length; i++) {
    let sum = 0;

    for (let j = 0; j <= i; j++) {
      sum += values[j] * combinations[j];
    }
    values[i] = ((time - sum) / combinations[i]) | 0;
  }

  const filledPhrases = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      filledPhrases.push(`${values[i]} ${phrases[i]}${values[i] > 1 ? 's' : ''}`);
    }
  }

  const lastItem = filledPhrases.pop();

  return [filledPhrases.join(', '), lastItem].filter(Boolean).join(' and ');
};
