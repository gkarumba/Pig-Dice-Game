# PIG-DICE GAME

## Description
This is a simple web application that allows two players to play a game of Pig Dice.
![homepage image]()
## Built By John Karumba

## Behavior Driven Development
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 inputs name and Player 2 inputs name, and clicks start button | Player 1: Olivia / Player 2: Matt / Click START | Goes to game console |
| Player 1 clicks ROLL button | Click ROLL button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100 | Winner page |

## Live Site
Can be accessed [here]( https://gkarumba.github.io/Pig-Dice-Game/)

## Set_up and Installation
    1. Clone the repo to the local machine
    2. `cd` into the folder named `Pig-Dice-Game`
    3. Open the `index.html` on your favorite browser

## Technologies Used
    -HTML & CSS
    -JavaScript
    -Bootstrap
    -JQuery
    -Git

## Author's Contact
    For any clarification or addition information, contact the author at gachegua@gmail.com

## License
This software is Licensed under MIT license Copyright (2018) [gkarumba]()
