let wins = 0;
let ties = 0;
let losses = 0;

while (true) {
  // Get user input
  let userInput = prompt("Enter R, P, or S:");

  // Validate user input
  while (!["R", "P", "S"].includes(userInput.toUpperCase())) {
    userInput = prompt("Invalid input. Enter R, P, or S:");
  }

  // Get computer input
  let computerInput = ["R", "P", "S"][Math.floor(Math.random() * 3)];

  // Determine winner
  let result;
  if (userInput === computerInput) {
    result = "tie";
    ties++;
  } else if (
    (userInput === "R" && computerInput === "S") ||
    (userInput === "P" && computerInput === "R") ||
    (userInput === "S" && computerInput === "P")
  ) {
    result = "win";
    wins++;
  } else {
    result = "loss";
    losses++;
  }

  // Show result and stats
  alert(`You chose ${userInput}. Computer chose ${computerInput}.`);

  alert(`You ${result}! Wins: ${wins}, Ties: ${ties}, Losses: ${losses}`);

  // Ask to play again
  if (!confirm("Play again?")) {
    break;
  }
}
