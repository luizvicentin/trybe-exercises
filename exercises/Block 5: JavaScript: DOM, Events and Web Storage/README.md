# JavaScript: DOM, Events and Web Storage

<blockquote>“Do your best, but always on time!”</blockquote>

### The DOM. Or: how do HTML and JavaScript communicate?

The DOM (Document Object Model) is an interface that represents how HTML and XML are read by the browser. After reading the document HTML by the browser, o DOM creates an object that makes a representation of the document and defines ways of how this structure can be accessed, that way we can use o JavaScript to manipulate DOM and thus change the style and content of our page.
On DOM our page it is represented by us and objects, and it is through them that we will carry out the communication of ours HTML with the JavaScript . Therefore, we can say that o DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

<h1 align="center">
    <img alt="DOM" src="https://github.com/luizvicentin/trybe-exercises/blob/master/exercises/Block%205:%20JavaScript:%20DOM%2C%20Events%20and%20Web%20Storage/dom.jpg" />
</h1>

→ In this image we have an example of the structure of DOM , or rather, the tree of DOM , its markings and how it is assembled by the browser. Let's see a little more about the objects that the image presents:

- Window : Represents a window that contains a DOM element, being possible to access the document that the window contains through Window ;

- location : Represents the location of the object with which it is associated, that is, the current document;

- document : Represents any web page loaded in the browser and serves as an entry point for the content of the web page, so it document contains all documents HTML ;

- history : Allows the manipulation of the browser session history, that is, the pages visited on the tab or frame where the current page is loaded;
 
- element : It is the most general base class from which all objects in an Document inherit, that is, they are all tags that are in files HTML and become elements of the tree DOM ;

- text : Text that goes between the elements, is the entire content of the tags;
  
-atribute : Are all the attributes that a specific node has, such as class or id .

It was clear? Or is the idea of ​​the DOM still a little abstract?

Think of it like this: the HTML / CSS / JS page you make is a program. The browser interprets this code and, from it, generates the page you see on the Internet.
Well, the DOM is a structure of your page that the browser assembles when it reads. Its purpose is precisely to allow the program to access the elements of the page using code and give it the power to manipulate them.
If the DOM concept is still a little abstract, don't worry! Everything will become clearer when you start interacting with him.