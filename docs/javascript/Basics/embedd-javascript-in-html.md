---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Embedd Javascript in HTML

When we want to use Javascript in HTML websites, we have to reference the needed Javascript files.

<Admonition type="tip" icon="💡" title="But what if I have multiple Javascript-Files ?">
  <p>
    You can have multiple Javascript files and load them seperately in your HTML website.
  </p>
</Admonition>

The most common ways to embedd/load Javascript in your websites are:

1. Load one or multiple Javascript-Files which contains your Javascript code.
2. Write Javascript directly in your HTML when no seperate files are needed

###  #1 Load Javascript files 
```html
<html>
    <head>
        <!-- .... -->
        <script src="path-to-file-1.js"></script>
        <script src="path-to-file-2.js"></script>
    </head>
    <body>
        <!-- .... -->
    </body>
</html>

```
It's totaly fine to load multiple Javascript files. Today it's common to load often single files which are
highly optimized and bundled from mighty frameworks. But for the beginning don't mind all that fancy stuff and
just reference your needed files.

### #2 Write Javascript directly in HTML
```html
<html>
    <head>
        <!-- .... -->
        <script>
            //This Javascript code gets executed when the page loads
            alert('hello world!');
        </script>
    </head>
    <body>
        <!-- .... -->
    </body>
</html>
```

### #3 Which option should I prefer?

It's totaly up to you but when I write Javascript it's almost always in an additional .js file. I try to seperate
the markup and styling from my logic which manipulates the behavior of my website. But small scripts doesn't hurt and can easily be places within script-tags in your HTML.

<Admonition type="info" icon="📈" title="Keep in mind...">
  <p>
    The more Javascript files you have the more has to be downloaded with your HTML file. In most cases you don't
    have to think about it directly but when you write enterprise solutions performance and start-up times are a big deal.
  </p>
</Admonition>

Now that we know how to embedd our next coming Javascript code, let's get our hands dirty.