---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Working with Strings

It's very possible that you use strings in your application. I'll show you in this section how you can easily combine and interpolate 
strings because that's a necessary skill and like mentioned you most likely need that.


### Combine / Concatenate Strings

```js
    let firstName = 'John';
    let lastName = 'Doe';
    let fullName = firstName + " " + lastName;
    console.log(fullName); // John Doe
```

The + operator is used to combine strings. Unlike numbers the +-operator is used to combine or concatenate multiple strings. You can use this
operator to concatenate far more than one or two strings.

### Interpolate Strings

```js
    let firstName = 'John';
    let lastName = 'Doe';
    let fullName = `${firstName} ${lastName}`
    console.log(fullName); // John Doe
```

String interpolation grants you the ability to weave strings into other strings. You have to set this strings in ``` ` ``` 
and encase the string you want to place into another string with ``` ${variableName} ``` like in the example above. String interpolation
can be more readable but it's totally up to you how to work with strings.