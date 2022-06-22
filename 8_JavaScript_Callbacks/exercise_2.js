const printHello = () => {
  console.log('Hi there friend');
}

const executeAfterDelay = (delay, callbackFunction) => {
  setTimeout(callbackFunction, delay * 1000);
}
  
  executeAfterDelay(5, printHello);


  module.exports = printHello;
  module.exports = executeAfterDelay;


  