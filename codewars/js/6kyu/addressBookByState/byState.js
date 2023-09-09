export const byState = (str) => {
  const states = {
    AZ: 'Arizona',
    CA: 'California',
    ID: 'Idaho',
    IN: 'Indiana',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia',
  };

  const rows = str.split('\n');
  const addressBook = rows.filter(Boolean).map((row) => {
    const [name, address, cityAndState] = row.split(', ');
    const arCityAndState = cityAndState.split(' ');
    const state = arCityAndState.pop();

    return { name: `${name} ${address} ${arCityAndState.join(' ')}`, state: states[state] };
  });

  addressBook.sort((a, b) => {
    return a.state.localeCompare(b.state);
  });

  const grouped = {};

  addressBook.forEach(({ name, state }) => {
    if (!grouped[state]) {
      grouped[state] = [];
    }
    grouped[state].push(name);
  });

  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => a.localeCompare(b));
  });

  let result = '';

  Object.keys(grouped).forEach((key, index) => {
    result += `${index > 0 ? ' ' : ''}${key}\r\n`;
    grouped[key].forEach((item) => {
      result += `..... ${item} ${key}\r\n`;
    });
  });

  return result.trim();
};
