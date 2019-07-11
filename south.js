const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
    event.preventDefault();

    const inputBox = document.querySelector('.user-input');
    const userInput = inputBox.value;

    if (userInput === 'south') {
        window.location = './south.html';
    }
}
}