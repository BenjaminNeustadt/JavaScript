const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  return names.map(n => 'Hi ' + n + '! 50% off our best candies for you today!');
}

generateMessages(['Anna', 'Laura', 'Josh', 'Min', 'Karla']);

//copied this into node, it works.