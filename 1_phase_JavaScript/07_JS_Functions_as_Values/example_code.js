const uppercaseMessage = (message) => {
  return message.toUpperCase();
}
// transform is now a new function/method that includes
// the message argument given in the first function/method 
// uppercaseMessage (where the message is made uppercase/lowercase)
// with the inherent function/method belonging to JavaScript
// We call this new function 'transform' (a bit like a variable object?) 
// so that we can pass 
// the first function as an argument to 'transform'
// and then call it inside the transform function as something
// to pass the first function onto.

const transform = (message, transformFunction) => {
  return transformFunction(message);
}
// However, 'message' as an argument needs to be carried over to the second
// function, so that what we can iterate over it in the final call, 
// it has to be the same as the first. 

// the const name 'transform' given to the container, that holds the message 
// from the previous function can be given any name, it can be called by anyname, 
// so long as it is consistent.

transform("hello", uppercaseMessage);

