const firstAnimalYear = 15;
const secondAnimalYear = 9;
const restCatYears = 4;
const restDogYears = 5;

export const humanYearsCatYearsDogYears = (humanYears) => {
  const animalYears = firstAnimalYear + (humanYears > 1 ? 1 : 0) * secondAnimalYear;
  const restAnimalYears = humanYears > 2 ? humanYears - 2 : 0;
  return [
    humanYears,
    animalYears + restAnimalYears * restCatYears,
    animalYears + restAnimalYears * restDogYears,
  ];
};
