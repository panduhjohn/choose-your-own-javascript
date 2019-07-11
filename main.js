const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;

  if (userInput === 'east') {
    window.location = './east.html';
  } 
  
  if (userInput === 'north') {
  window.location = './north.html';
  }

  if (userInput === 'south') {
    window.location = './south.html';
  }

  if (userInput === 'west') {
    window.location = './west.html';
  }

  if (userInput === 'chicken') {
    window.location = './chicken.html';
  }

  if (userInput === 'pizza') {
    window.location = './pizza.html';
  }

  if (userInput === 'tacos') {
    window.location = './tacos.html';
  }

  if (userInput === 'lamb') {
    window.location = './lamb.html';
  }

  if (userInput === 'jameson') {
    window.location = './jameson.html';
  }

  if (userInput === 'titos') {
    window.location = './titos.html';
  }

  if (userInput === 'ipa') {
    window.location = './ipa.html';
  }

  if (userInput === 'corona') {
    window.location = './corona.html';
  }
}