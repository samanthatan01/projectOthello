# Project: Othello

## ABOUT THE GAME

<p>
Othello, or also commonly known as Reversi, is an old strategy board game involving two players. In this online version you can play it with a friend.

The players take turn in placing one disc (game piece) on the board, with their designated color facing up.

The aim of each move in Othello is to trap one or more of your opponent’s discs between two of your own. When you trap the discs, you can flip them over and thereby reverse their color to make them yours.

The game is over when both players have placed all their disks on the board, or when there are no more legal moves possible for either player. Whoever has the highest number of discs on the board is the winner.

</p>

<strong> CLICK TO PLAY: </strong>[Othello](https://samanthatan01.github.io/projectOthello/)

## SNIPPETS OF THE GAME

<p>The layout of the game page includes the main Othello board, both players' score, a button to end or reset the game and lastly, a game instruction section towards the end of the page.

The screenshots below illustrates how the board looks like at the start with the default arrangement, and how it looks like towards the end of the game when the board is full.

</p>

<p style="text-align: center;"><strong>1. Start of game </strong></p>

![Image at the start of the game](src/othello-startofgame.png)

<p style="text-align: center;"><strong>2. Middle of game </strong></p>

![Image mid game](src/othello-midgame.png)

<p style="text-align: center;"><strong>3. End of game</strong></p>

![Image at the end of the game](src/othello-endofgame.png)

## TECHNOLOGIES USED

<strong>1. HTML</strong>

<p>HTML in this case, uses elements to set the default structure of the 8 x 8 board, as well as the addition of game instructions at the bottom of the page. </p>

<strong>2. CSS</strong>

<p>Specifically for the development of the Othello board, flex-wrap CSS property was applied to the main div element containing all 64 other div elements, each representing a green square. With flex-wrap, the 64 green squares are now aligned eight by eight. Other elements on the page including the black and white discs, button and the score counters were also styled using CSS. </p>

<strong>3. JavaScript</strong>

<p>A bulk of the game controller was set up in JavaScript. The game fundamentally required players to place their disc down by clicking on the board. Therefore, the addEventListener() was the first step to making the game functional.

A single move may potentially trap opposing discs in eight directions - vertically (up and down), horizontally (left and right), diagonally (top left and right, bottom left and right). To validate the move and to accurately flip all of the trapped opponent's discs, the use of arrays, For loops and DOM manipulation were necessary.

</p>

## WHAT'S NEXT

<strong>Opportunities for future enhancements</strong>

<li> Add a countdown timer for each player to make a move.
<li> Enhance the aesthetics of the board to make it appear in alternate shades of green.
<li> Single-player version (versus Computer).

## CITATIONS

Source for the game instructions: [Playpager](https://playpager.com/othello-reversi/)
