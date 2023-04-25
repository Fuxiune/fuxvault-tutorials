---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Variable Scopes

Now that we have learned how to create variables and functions we can deal with variable scopes. A variable is always used within a scope and we can 
decide between different scopes.

## Global Scope

```js

    //a variable is global when it's defined in the file and outside a function/block
    let username = "Fox";

    function doSomething() 
    {
        //this global variable can be used in functions
        console.log(username); //Fox
    }
```

## Function Scope

```js
    function doSomething() 
    {
        //a variable is within a function scope when defined within a function
         let username = "Fox";
        //this function scope variable can only be used within this function
        console.log(username); //Fox
    }
```

## Block Scope

```js
    function doSomething() 
    {
        let username = "Fox";

        {
            //a variable is within a block scope when defined within a block
            let favoriteColor = "Blue";
            //this block scope variable can only be used within this block
            console.log(favoriteColor); //Blue
        }

        console.log(username); //Fox
        console.log(favoriteColor); //Error -> favoriteColor is not defined
    }
```

It's important as a developer to know when to use which scope. To keep it simple at the beginning use a global scope when you want to use this
variable across multiple functions. Use a function scope when you just want to use this variable within a function and doesn't need it outisde of it.

<Admonition type="note" icon="📈" title="When to use block-scope?">
  <p>
    Sometimes you want to have a variable just accessible within a block. Maybe it's because you want to free up your memory directly after the block ends
    or you have some data you doesn't want to be accessible from outside the block.
  </p>
</Admonition>

```js
    function doSomething() 
    {
        //...

        {
            let someHighRiskData = "333223-1231232-213123213"
            //do something with this data and forget it directly after this block ends.
        }

        // someHighRiskData is not accessible after the block ends
    }
```