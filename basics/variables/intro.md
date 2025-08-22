## Variables in Javascript

This section is meant to cover everything we should know about variables in Javascript.
- [What are variables in Javascript](#what-are-variables-in-javascript)
- [How to declare variables](#how-declare-variables)
- [Basic rules when declaring variables](#basic-rules-when-declaring-variables)
- [Variables behavior (scope)](#variables-behavior-scope)
- [Default behavior when declaring a variable](#Default-behavior-when-declaring-a-variable)

Go back to [basics listing](https://github.com/luizgdsmdev/Javascript-studies/blob/main/basics/intro.md).

#### What are variables in Javascript?
Pretty straightforward, a variable is an **assigned name/label to a space located in the memory** that will keep track of a value assigned to it.

But what does it mean?  
Well, let's address the memory as a big cabinet that can hold a limited amount of things in it. But just as a cabinet that you could throw things inside, it would get very messy to keep track of things if we deal with it just like a big black hole that eats things.  
Example: Last week, you kept your nice new shoes for your friend's wedding and since then, you added lots of things like other clothes, shoes, your cat, the meatloaf your mom brought, I mean, LOTS of things.  
So now the wedding is in a few hours, and you have no idea of where the shoes are. Are they behind the cat? inside the meatloaf? Do they still exist?  

##### Solution
Now, just like the 16th century, we face the need for a better way to keep things inside other things and guess what, drawers!!!  
Now that we have drawers, we can use them for different things, like one for shoes, another one for the cat, and so on.

###### So variables are just... drawers?
Well, in a sort of sense, they are. Variables are meant to **keep track of different values in memory**, just like the drawers in your cabinet keep different things inside. So now, when you want to retrieve a value, you no longer need to search the entire cabinet because you know that the shoes are in one of the drawers, so you just go for it.  

**But at which drawer?** I mean, how do we know that it is in the first one and not at the second?  
That's where the variables step in; **they work as a label** for that drawer (space in memory) that holds the shoes (value). Pretty much like a "Shoe for weddings" label in the drawer for this example.
 

###### variables are meant to facilitate the addressing and retrieval of values, as well as process these values in different ways, by acting as a "label" for the value, which is kept in the memory.  


#### How declare variables
In order to understand the thing, let's first create the thing.  
We do this by ***declaring a variable*** (keep this expression in mind). and for this, we use three sacred words:
```javascript
let, var, const
```  
These are what we call ***"reserved words"*** or ***"reserved keywords"***, and they are used to define the **behavior** (or scope) of the variable we are declaring. We're gonna see more about scope in another section. For now, worry about declaring a variable.  
Keep in mind that by ***"reserved"*** they literally mean it, you **CAN NOT** use reserved words outside the context for which they are meant. We're gonna see more about it ahead.

The **basic structure** for declaring a variable is:  
- [1° - keyWord] [2° - nameOfTheVariable]  

Now that we know some of the key words, we can build some examples like:
```javascript
let userFirstName;
var userSecondName;

// const requires an initial value, we'll see about it later
// But notice that the basic structure is still there in 'const userNickName'
const userNickName = 'bird';
```

#### Basic rules when declaring variables
As you saw, declaring a variable it's really simple, but we need to pay attention for some of the Javascript rules.

##### Structure
The structure for declaring a variable will always follow:  
- [1° - keyWord] [2° - nameOfTheVariable]
```javascript
let userFirstName;
```  

###### **WRONG ways would include:**
```javascript
//- order inversion
userFirstName let;

//- just the keyWord
let;

//- just the variable name
userFirstName;

//- wrong spelling of the keyWord
"Let" or "lEt" or "leT"  //Any capital letter
```

##### Variables name
variable names **cannot** start with a number, they need to **begin with a letter**, an **underscore**, or a **dollar sign**. Is possible use numbers in the middle or at the end of the variable name, but **NEVER** at the begin.
###### **WRONG ways would include:**
```javascript
//- Using number at the begin
let 1name;
let 2name;

//- Using blank space between words
let first name;
let second name;

//- Using any JavaScript reserved keyword
let var;
let const;
```


#### Variables behavior (scope)
In this section, we're covering just the variable behavior in different scopes themselves. Bear in mind that scopes are a whole different topic, but a resume of scopes would be:

- *"Global scope: The default scope for all code running in script mode.*
- *Module scope: The scope for code running in module mode.*
- *Function scope: The scope created with a function.*

*In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:*

- *Block scope: The scope created with a pair of curly braces (a block)."*  

As seen at [https://developer.mozilla.org/en-US/docs/Glossary/Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).

```javascript
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
``` 

However, the following code is valid due to the variable being declared outside the function, making it global:  
```javascript
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```  

Blocks only scope ```let```  and ```const``` declarations, but not ```var``` declarations.

```javascript
{
  var x = 1;
}
console.log(x); // 1
``` 

```javascript
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
``` 




#### Default behavior when declaring a variable
When declaring a variable but not assigning any value, JavaScript will automatically assign the "undefined" value to it.
Except for "const" which requires immediate assignment of value when being.  

Examples:
```javascript
//receives "undefined" by default
var firstName;
let secondName;

//As soon as declared and assigned, the variable already points to the value
var newName = "Silva";
let number = 10;
const userName = "Alice";

// const without assignment will cause an error:
const nick; // Erro: Missing initializer in const declaration

``` 