  var counter = 0;

  alert("Welcome to my guessing game!\n I'm going to ask three questions to see how well you know me!");
  var middleName = prompt("First question: What is my middle name?").toLowerCase();
  if (middleName === "elizabeth") {
    alert("Good Job, my middle name is " + middleName + "!");
    counter ++;
  } else {
    alert("My middle name is not "+ middleName);
  }

  var catsOrDogs = prompt("Second question: Do I prefer cats or dogs?").toLowerCase();
  if (catsOrDogs === "dogs") {
    alert("Yes, I love " + catsOrDogs + "!");
    counter ++;
  } else if (catsOrDogs === "cats"){
    alert("Wrong, I respect "+ catsOrDogs + ", but dogs are the best!");
  } else {
    alert("I'm sure "+ catsOrDogs +" is cool, but it wasn't an option in the question.\n So you are wrong.");
  }

  var nflTeam = prompt("Third question: My favorite NFL team is the ...").toUpperCase();
  if (nflTeam === "SEAHAWKS" || nflTeam === "HAWKS" || nflTeam === "SEATTLE SEAHAWKS") {
    alert("Duh! The " + nflTeam + " are the greatest!\n That question was too easy!");
    counter ++;
  } else {
    alert("No way, "+ nflTeam +" is okay, but not as cool as the Seahawks!\n You are mistaken.");
  }

  var myAge = parseInt(prompt("What's my age again?"));
  if (myAge === 25) {
    alert("You are correct! I am "+ myAge + "!");
    counter ++;
  } else if (myAge > 25) {
    alert("You guessed too high, I'm not that old yet");
  } else {
    alert(myAge+" is too low!");
  }

  if (counter>=3){
    alert("Congrats, you got " + counter + " out of 4 correct!");
  } else{
    alert("Aw, you only got " + counter + " out of 4 correct!")
  }

  alert("Now let's see if you can read my mind...");

  var guessedRight = false;
  while(!guessedRight){

  var userNum = parseInt(prompt("What number am I thinking of between 1-10?"));
  var myNum = 5;
  if (userNum === myNum){
    alert("You're a mind reader!");
    guessedRight = true;
  } else if (userNum > myNum) {
    alert("You're too high, guess again!");
  } else {
    alert("You're too low, guess again!");
  }
}
