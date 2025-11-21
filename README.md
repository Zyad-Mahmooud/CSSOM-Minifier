# CSSOM-Minifier
a CSS Optimizer that can minify your css code UpTo 60% almostly 🚀

# how it works 

the function takes your css code and pass it to few functions can minify your css code

the point is that we look for repeats in the css code by passing it to `CSSStyleSheet` creating in-memory CSSOM sheet

the next step is Searching 🔎 , instanceof use selectors to look for the existing rules we use the value itself and passing it to `findRule` function and it's a function that takes an single argument and is object like

`````
{
value: "red"
}
`````

the idea behind the function is that it's can travel the whole CSSOM and every single rule and it's properties looking for a value that matches your input and finally returns an results array.

this is was the first problem while the hard part is still in the way, not after taking our results array we need to replace all of these values and create a single variable for every value that we need to de-doublecate after insuring that there's no variable with the same value if there's simply return the existing one and of course after insuring that there's `:root` in your code, if is not we need to create a root rule and then apply the de-doublecate function

# usage example 🔥

`````
const root = new CSSStyleSheet(); // defining in-memory CSSOM sheet

// insert your css editor as string

root.replaceSync(`.div-7576290 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-556414 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.p-9265697 {
  
 }
.div-1776744 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-6685159 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-8414768 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }`);
console.log(Minimize(root)); // your css code after minifying
`````

# why you should use it ?

- making your css code mush smaller by collecting all doublecate values in variables and reuse it everywhere.
- make your css editor 60% smaller.
