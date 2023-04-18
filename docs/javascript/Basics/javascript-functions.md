---
sidebar_position: 4
---

# Javascript Functions

In the last sections, we used just some variables and stored data within but what if we want to encapsulate a whole unit of logic? We want to write code that
generates a sum of two numbers and returns it. We don't want to write this code all the time over and over again instead we want to reuse logic or just clean up 
our code.

## Declaration

A function consists of the function keyword, a name, and parameters (none, one, or multiple). This for example is a function with the name sum which retrieves two
numbers as parameters and returns the sum of them.

```js
    function sum(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }
```

You can invoke a function by using the name of the function like that:

```js
    function sum(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    var sumOne = sum(1,2);
    console.log(sumOne); //3

    var sumTwo = sum(2,2);
    console.log(sumTwo); //4
```

In this example above are we using the sum function twice. You can reuse a function and the more generalized a function is the better you can reuse it.

You can also use other parameters like numbers, you can use strings or complex objects like employees. We'll have a look at complex objects in later tutorials.

```js

    var sumOne = sum(1,2);
    console.log(sumOne); //3

    var sumTwo = sum(2,2);
    console.log(sumTwo); //4

    function sum(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }
```

This will also work because even if your javascript files are read from top to bottom, the compiler checks that a needed function is under the invocation.

You'll use functions a lot and this is just a very small example how to create and use functions. The tip of the iceberg.