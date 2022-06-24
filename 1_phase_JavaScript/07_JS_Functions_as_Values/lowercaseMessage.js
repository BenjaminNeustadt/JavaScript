const lowercaseMessage = (string) => {
  return string.toLowerCase();
}

const transform = (string, transformFunction) => {
  return transformFunction(string);
}

transform(string, lowercaseMessage);


