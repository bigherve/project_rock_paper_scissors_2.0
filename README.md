# project_rock_paper_scissors_2.0

I am going to make a rock paper scissors game that will play against the computer in v1 it will play in the console and in v2 I will add Graphical User Interface with buttons and text.

Understand:
Write a function that will get the users input with a prompt called getPlayerChoice make sure it is case insensitive, write a function getPcChoice for the computers play that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Then we write a function that plays one round of the game called playRound, it will take two parameters the playerSelection and computerSelection and then return a string that declares the winner. Finally create a function called game that will call on playRound and use a for loop to play a 5 round game that keeps score and reports a winner or loser at the end.

Plan of attack:
Does your program have an interface? What will it look like?
No there is no interface for now just a prompt for the users input and a function for the computer.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?
We will get the users choice through a prompt. 

What’s the desired output? 
The desired output is is to play a 5 round game of rock paper scissors that keeps score and reports a winner or loser at the end.

Given your inputs, what are the steps necessary to return the desired output? The algorithm in pseudocode for this problem:
Get the users input with a prompt has to be case insensitive, get the computers input with a function called getPcChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
To play one round of rock paper scissors write a function called playRound it will take two parameters the playerSelection and computerSelection and then return a string that declares the winner. To play 5 rounds write a function called game that will call on playRound and use a for loop to play a 5 round game that keeps score and reports a winner or loser at the end.

Divide & Conquer:
Divided these into sub problems to spread to load Once you solved every sub-problem, then connect the dots this will give you the solution to the original problem. 
first one deal with getting the users input, second one deal with the getPcChoice function, third we tackle the playRound function and finally the game function last.
