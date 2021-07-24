export const killer = (suspectInfo, dead) => {
  const peoples = Object.keys(suspectInfo);

  return peoples.find((human) => {
    let deadCounter = 0;

    dead.forEach((deadHuman) => {
      if (suspectInfo[human].includes(deadHuman)) {
        deadCounter++;
      }
    });

    return deadCounter > 0 && deadCounter === dead.length;
  });
};
