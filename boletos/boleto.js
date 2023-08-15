function playLotto() {
    const options = [1, 2,"Cat", "Dog", "Elephant"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomNumbers = [Math.floor(Math.random() * 2) + 1, Math.floor(Math.random() * 2) + 1];

    const hasRandomNumbers = randomNumbers.includes(1) && randomNumbers.includes(2);

    if ((options[randomIndex] === "cat" || options[randomIndex] === "dog" || options[randomIndex] === "Elephant") && hasRandomNumbers) {
        console.log("You have an animal (" + options[randomIndex] + ") and the numbers (" + randomNumbers.join(", ") + "). ¡you win!");
    } else if (options[randomIndex] === "cat" || options[randomIndex] === "dog" || options[randomIndex] === "Elephant") {
        console.log("You have an animal (" + options[randomIndex] + "). You don't have the numbers. you have another ticket.");
    } else if (hasRandomNumbers) {
        console.log("You lost. You don't have animals or numbers 1 and 2. Try again.");
    }
}

playLotto();
