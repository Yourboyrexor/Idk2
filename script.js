const phrases = [
    "I am still here...",
    "You can't escape me...",
    "Let’s see how long you can last...",
    "It's me...",
    "Time to play!"
];

function speak() {
    const dialogBox = document.getElementById("dialog-box");
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    dialogBox.textContent = randomPhrase;
}
