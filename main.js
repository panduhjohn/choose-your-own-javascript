const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;

  if (userInput.toLowerCase() === 'east') {
    window.location = './east.html';
  } 
  
  if (userInput.toLowerCase() === 'north' || userInput === "NORTH") {
  window.location = './north.html';
  }

  if (userInput.toLowerCase() === 'south') {
    window.location = './south.html';
  }

  if (userInput.toLowerCase() === 'west') {
    window.location = './west.html';
  }

  if (userInput.toLowerCase() === 'chicken') {
    window.location = './chicken.html';
  }

  if (userInput.toLowerCase() === 'pizza') {
    window.location = './pizza.html';
  }

  if (userInput.toLowerCase() === 'tacos') {
    window.location = './tacos.html';
  }

  if (userInput.toLowerCase() === 'lamb') {
    window.location = './lamb.html';
  }

  if (userInput.toLowerCase() === 'jameson') {
    window.location = './jameson.html';
  }

  if (userInput.toLowerCase() === 'titos') {
    window.location = './titos.html';
  }

  if (userInput.toLowerCase() === 'ipa') {
    window.location = './ipa.html';
  }

  if (userInput.toLowerCase() === 'corona') {
    window.location = './corona.html';
  }

  // if (window.location === ) 
}