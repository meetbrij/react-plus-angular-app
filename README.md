# Understand and Compare React and Angular

In this document we would try to understand the following 
- Basic introduction to React and understanding how it works
- Comparing React to Angular
- What can React do that Angular cannot
- Combining React with Angular

Dependencies
- node.js and npm
- Bower
- Angular
- React

## Understand Web Frameworks
JavaScript is a language with issues and lot of inconsistencies. It was designed for extremely simple applications. Web frameworks like JQuery, Angular and React helps to abstract away the inconsistencies of JS and give us a way to create an evolving API. Angular and React is been designed in a specific way to make it easier to develop large application using JS. HTML natively does not natively support Single Page Applications. SPA requires AJAX to work and AJAX can be abstracted by libraries like JQuery or Angular. 

Using web frameworks like Angular or React can help you solve the problem of global scope and also dramatically increase your development speed.

## Angular Overview
- Popular web framework with a steep learning curve.
- It is maintained by Google
- It has a vast ecosystem of modules
- Powerful test runner - Karma
- Angular supports dependency injection, routes, DOM updates, accessibility, testing (via Karma), AJAX
- Angular helps us to extend HTML using directives

## Intro to React
- Simple, highly performant framework supported by Facebook
- It has its own language - JSX
- It supports Virtual DOM
- No dependency manager, so user must implement FLUX
- It supports fastest possible DOM updates
- It helps you to isolate your scope using state and props
- React is about updating the DOM, getting data updates, changing the DOM and changing the data through interactions with the DOM

## Difference between React and Angular
- Performance suffers in Angular when you are dealing with a huge collection of data on the frontend because of two way binding
- React is meant to scale for huge collections and performs faster even with huge datasets
- Angular can be used for every possible situation (SPA, dependency injection, testing, accessiblity etc) whereas React is focussed on fast performant DOM updates - Views

## Combining Angular and React
### Angular Strengths
- Rapid prototyping
- Good support for Dependency Injection, Routing, AJAX
- It has modules that supports every possible use case
### Angular Weakness
- Performance suffers for views using large collections
- HTML strongly coupled to code, hard to maintain
- As your application gets more and more complex with components creating bindings with every other component. It will lead to application slowing down exponentially.

## Improving performance of Angular Apps using React
- Repeating elements created using ng-repeat are handled by React by replacing two-way bindings with one-way bindings wherever possible
- Use Angular's built-in services to implement the React's FLUX architecture
- Replace directives with high performace consequences (like ng-repeat) with React's component
- JSX (React) components are similar to Angular directives
- Use a precompiler to compile a JSX into a JavaScript before its loaded

## Getting Started

Project setup
```
npm init // to create a package.json file
bower init // to create a bower.json file
bower install --save angular
bower install --save ui-router
npm install -g http-server // for installing a local server to run the app
npm install --save gulp browserify babelify vinyl-source-stream // dependencies for jsx precompilation
gulp jsx // run this command after creating the gulpfile.js to precompile your jsx to js
bower install --save react
bower install --save skeleton // ui framework for styling
npm install babel-preset-react babel-preset-es2015 --save // if you get errors while running jsx
```

Install dependencies and run the sample project

```
npm install
npm start
```

The above project was created by following the steps given in the tutorial at [Orielly](http://shop.oreilly.com/product/0636920045212.do)