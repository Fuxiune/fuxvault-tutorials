---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Variables in Javascript

### Declaring Javascript Variables

You have different possibilities when declaring variables in Javascript. It depends on what the variables are
used for.

### Var and Let

The var and let keywords are often used to declare variables. Variables wich are declared with the var or let keyword can be replaced with new values.

```js
    //The "var" keyword can be used 
    var firstName = 'John'
    firstName = 'Pete'
```

```js
    //The "let" keyword can be used 
    let firstName = 'John'
    firstName = 'Pete'
```

<Admonition type="note" icon="📈" title="What is the difference between let and var?">
  <p>
     Var is <b>not</b> deprecated but you will find more often examples or code snippets where let is used. Var is important when you write code which 
     should be backward compatible. The var keyword was used until ~ 2015. After the let keyword was introduced the biggest part of the developers switched to let.
     But keep in mind that when your code should run in older browsers, you have to use var.
     <hr></hr>
     <a href="https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var">Here</a> is great discussion about the difference between let and var.
  </p>
</Admonition>

### Const

Sometimes variables should not be allowed to change. Often it's because of security concerns but there can also be
general decisions for keeping variables unchangeable with const.

```js
    //The "const" keyword can be used 
    const firstName = 'John'
    firstName = 'Pete' // Uncaught TypeError: Assignment to constant variable.
```

Unlike in type-safe programming languages you don't give your variables a type.

```c
    //C# Code
    int age = 30; 
```
In this example we have declared a variable with a type of int. The compiler knows that we can just store
values of the same type in this variable. If we try to store a string in this variable we get directly an error
from the compiler.

Javascript is not type-safe so it's completely possible to change the data type of the value.

```js
    let firstName = 'John';
	console.log(firstName); // John 

	firstName = 42;
    console.log(firstName); // 42
```
<Admonition type="note" icon="❓" title="Don't know what data types are?">
  <p>
    In my programming tutorials I assume that this is clear. I'm aware that this is not true for everyone. This Javascript turorials are 
    created to get directly into this programming language without learning programming basics at all. I hope that <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">this</a> link help you to understand what data types are and what they are used for. 
  </p>
</Admonition>

Variables are fundamental for every website or web-application with Javascript. We will use tons of variables in this tutorials and code examples.
For you it's important to understand that you can declare variables with different keywords and store data in it. This data can change but only when you
don't use the const keyword.