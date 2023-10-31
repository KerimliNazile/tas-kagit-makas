document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll("button");
    const result = document.getElementById("result");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const userChoice = e.target.id;
            const computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();

            console.log(Math.random);

            if (userChoice === computerChoice) {
                result.textContent = "Berabere qaldiniz";
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "scissors" && computerChoice === "paper") ||
                (userChoice === "paper" && computerChoice === "rock")
            ) {
                result.textContent = `Siz qazandiniz ${computerChoice}.`;
            } else {
                result.textContent = `Siz uduzdunuz ${computerChoice}.`;
            }
        });
    });
});


