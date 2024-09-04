# Bingo Web App (Frontend)

## Overview
Bingo Web App is a dynamic, interactive game built with React 18. It provides a complete gaming experience from user authentication to playing the game in real-time with other players. The app communicates with a backend service using the Fetch API for RESTful requests and WebSockets for real-time data synchronization.

## Prerequisites

Before running the app, ensure you have the following installed:
•⁠  ⁠[Node.js](https://nodejs.org/) (which includes npm)

## Installation

To set up the app on your local machine:

 1.⁠ ⁠*Clone the Repository*
   ⁠ bash
   git clone [URL of the Frontend Repo]
   cd [Name of the Repo]
    ⁠

 2.⁠ ⁠*Install Dependencies*
   ⁠ bash
   npm install
    ⁠

 3.⁠ ⁠*Environment Variables:*
    Normally the .env is not uploaded in a repo, bur for this exercise purposes, you can find it here with the neccesary variables to run the app.
    ⁠

 4.⁠ ⁠*Start the App*
   ⁠ bash
   npm start
    ⁠

   This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

•⁠  ⁠*User Authentication*: Secure login to access the game.
•⁠  ⁠*Home Page*: After logging in, users can read the game rules and start a new game.
•⁠  ⁠*Waiting Room*: A lobby where players wait for the game to start, featuring a countdown timer.
•⁠  ⁠*Bingo Game*: Interactive game interface with a randomly generated Bingo card for each player, a list of participants, and a display of drawn numbers.
•⁠  ⁠*Winning the Game*: Players can declare victory by clicking a button if they complete a line, diagonal, four corners, or the entire card.
•⁠  ⁠*Real-time Interaction*: Utilizes WebSockets to synchronize game data among all players.

## Game Flow

 1.⁠ ⁠*Login/Authentication*: Users log in to access the game.
 2.⁠ ⁠*Home Page*: Users can read the rules and start a game.
 3.⁠ ⁠*Waiting Room*: Users wait for other players to join. The game starts when the countdown ends.
 4.⁠ ⁠*Playing Bingo*: Interact with the Bingo card, watch drawn numbers, and compete to win.
 5.⁠ ⁠*Declaring Victory*: Click the win button if you meet the winning conditions.
 6.⁠ ⁠*End of Game*: All players are informed of the winner and redirected to the home page.
