slee// Example of doing a quiz through the console and browser popups; to modify and apply components

const readings = {
  "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
  "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o"
}

let correct = 0;
let incorrect = 0;

function randomChar(obj){
  let chars = Object.keys(obj)
  let randomIndex = Math.floor(Math.random()*chars.length);
  let random = chars[randomIndex];
  console.log(random);
  let input = prompt('Romaji:'); // Change this later to use text input and not a popup

  if (chars.length > 1){ //Refactor this?
    if (input === readings[random]){
      correct += 1;
      console.log('Correct!')
    } else{
      incorrect += 1;
      console.log(`Nope, the answer is "${readings[random]}"`)
    }
  } else { // On the last question, display the final score and throw some React confetti
    if (input === readings[random]){
      correct += 1;
      console.log(`Correct! Final score is ${correct}/${correct + incorrect}`)
    } else{
      incorrect += 1;
      console.log(`Nope, the answer is "${readings[random]}" \n
      Final score is ${correct}/${correct + incorrect}`)
    }
  }

  delete obj[random];
  return random;
}
