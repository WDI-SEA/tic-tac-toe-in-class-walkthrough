![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Tic Tac Toe In-Class Planning Session

## Objectives

* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
* Implement CSS grid styling
* Practice using JS logic from lessons this week

This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM.

We will be making a Tic Tac Toe game using all of these concepts.

## In-Class Walkthrough
In class today we will be planning out and organizing our Tic Tac Toe games together, before sending you off to finish building your games as the deliverable this weekend. 

Today in class we will be breaking this problem down into the following steps:
1. Building out an HTML/JS/CSS app scaffold. 
2. Planning and writting the HTML/CSS for our gameboard. 
3. Pseudocoding out the game logic and win conditions for our game. 


## 1. Building out an HTML/JS/CSS app scaffold

Our app today is going to be comprised of three principal files (you are free to include any extra styling, images, etc. when you finish out your game over the course of this weekend.)

```js
tic-tac-toe
    / styles
        style.css
    / scripts
        app.js
index.html
```

#### A. Create files
Create files in the same structure as the org chart above. 

#### B. Declaring our HTML
Build an HTML page at index.html that includes links to the style file and the `app.js` file, as well as an `<h1>` with a "Hello, World 👋" message to start. 

#### C. Add a DOM Content Loaded Check in our JS
Since we will be using this Javascript on our website to check for user action after the page has loaded, we want to include a `DOMContentLoaded` event listener wrapping all other JS logic in our `app.js`. 

---

## 2. Planning and Writing Out Our Gameboard
For this example we are going to declare a grid of `<div>`s styled with CSS Grid to organize our game board. For this weekend, feel free to play with this construct and style to your own preference. 

Write out x9 divs to represent a 3x3 gameboard, and then use CSS grid styling to display these 9 divs as a 3x3 gameboard.

We are then going to write some quick logic to toggle x and o in our individual game tiles to start. See `2/scripts/app.js` for relevant code. 

## 3. Pseudocoding Our Game Logic Out
Our game has the following user story requirements: 

* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
* A cell should not be able to be replayed once marked.
* You should not be able to click remaining empty cells after the game is over.
* Add a reset button that will clear the contents of the board.
* Display a message to indicate which turn is about to be played.
* Detect draw conditions (ties/cat's game) 
* Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 


In a group we are going to pseudocode out the first few requirements, and then we will split you up into smaller, random groups to complete the pseudocode planning. 

There is no one perfect answer for how to solve this problem, so feel free to experiment and explore as you craft your pseudocode. 


## 4. Write Your Game Logic
**Your deliverable for this weekend is to complete your tic tac toe game.**

The intention of this deliverable is have you practice Javascript problem solving and DOM manipulation, so focus on these aspects of the deliverable first before moving on to higher order HTML/CSS work. 

That being said, you can style your game however you would like (feel free to come up with a fun theme!), but make sure that your game is fully functional before moving on to fancier styling. 






