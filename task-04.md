# Task 04: Understanding Arrow Functions and Async/Await in JavaScript

## Objectives
- Understand how to write an arrow function in JavaScript.
- Learn about async and await in JavaScript and how to use them.

## Instructions

### Arrow Functions

First, we’ll write a traditional function that adds two numbers together.

#### Traditional Function

```javascript
function add(a, b) {
  return a + b;
}

Now, let's rewrite this function using the arrow function syntax.

Arrow Function
const add = (a, b) => a + b;

Explanation of Arrow Functions:

Arrow Function Syntax:

Parentheses: We use parentheses () around parameters, just like in regular functions.

Arrow Symbol (=>): The arrow => replaces the function keyword.

Curly Braces {}: If the function has only one statement, we can omit the curly braces and the return keyword.

Key Differences:

In arrow functions, the this keyword behaves differently from regular functions. It doesn't create its own this, but takes it from the surrounding context.

Note: Arrow functions are a shorter way to write functions and they behave differently with this.

=============================================================================================================

Async and Await
Now, let's explain async and await in JavaScript.

What does async do?

async: When a function is marked as async, it means that function will always return a promise. Even if you don’t explicitly return a promise, JavaScript will wrap the return value in one.

Note: async makes a function always return a promise.

=============================================================================================================

What does await do?

await: The await keyword is used inside an async function. It tells JavaScript to wait for the promise to resolve before moving on to the next line of code. This makes the code look and behave more like synchronous code.

What happens if you forget to add await?

If you forget to add await before a promise in an async function, JavaScript will not wait for the promise to resolve. This could lead to unexpected behavior, because the rest of your code might execute before the promise is finished.

Example with async and await:

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();

Note: await is used to pause execution until a promise resolves, and if you forget it, the code will continue executing without waiting for the promise.

=============================================================================================================

