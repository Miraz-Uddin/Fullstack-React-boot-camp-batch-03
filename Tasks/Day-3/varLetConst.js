(() => {
  /**
   * Before the advent of ES6, var declarations ruled.
   * But Now we will use let / const to declare Variable
   * We will use 'const' keyword 99% time
   * If we need to change the variable later, then we will use 'let' keyword
   */

  /**
   * ----------Problem of 'var' keyword----------------------------
   * If you have used greeter in other parts of your code,
   * you might be surprised at the output you might get.
   * This will likely cause a lot of bugs in your code.
   * This is why let and const are necessary.
   */
  var greeter = "hey hi";
  var time = 4;
  if (time > 3) var greeter = "say Hello instead";
  console.log(greeter); // "say Hello instead"

  /**
   * ----------'let' is Block Scoped----------------------------
   * We see that using hello outside its block (the curly braces where it was defined) returns an error.
   * This is because let variables are block scoped .
   */
  //   let greet = "say Hi";
  //   let times = 4;
  //   if (times > 3) {
  //     let hello = "say Hello instead";
  //     console.log(hello); // "say Hello instead"
  //   }
  //   console.log(hello); // error: hello is not defined

  /**
   * ----------'let' keyword is awesome----------------------------
   * let can be updated but not re-declared
   * This is because let variables are block scoped.
   */
  //   let greeting = "say Hi";
  //   greeting = "say Hello instead";
  //   let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

  /**
   * ----------'const' keyword helps bug free code----------------------------
   * The value of a variable declared with const remains the same within its scope.
   */
  //   const greeting = "say Hi";
  //   greeting = "say Hello instead"; // error: Assignment to constant variable.
  //   const greetings = {
  //     message: "say Hi",
  //     times: 4,
  //   };
  //   greetings.message = "say Hello instead"; // to update an object using const
})();
