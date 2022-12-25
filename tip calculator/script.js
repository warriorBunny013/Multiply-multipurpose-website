/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const inputamt = document.getElementById("billTotalInput");
const tipamt = document.getElementById("tipInput");
const peoplenumber = document.getElementById("numberOfPeople");
const perperson = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfpeople = Number(peoplenumber.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  // inputamt.onclick = () => Number(inputamt);
  const bill = Number(inputamt.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  // tipamt.onclick = () => Number(tipamt) / 100;
  const tippercentage = Number(tipamt.value) / 100;

  // get the total tip amount
  const tipamount = bill * tippercentage;

  // calculate the total (tip amount + bill)
  const total = bill + tipamount;

  // calculate the per person total (total divided by number of people)
  const persontotal = total / numberOfpeople;

  // update the perPersonTotal on DOM & show it to user
  perperson.innerText = `Rs ${persontotal.toFixed(2)}`; //.toLocaleString('en-US')-->to give comas in long number
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfpeople += 1;
  peoplenumber.innerText = numberOfpeople;
  // update the DOM with the new number of people
  perperson.innerText = numberOfpeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  if (numberOfpeople <= 1) {
    return;
  }
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  numberOfpeople -= 1;
  // update the DOM with the new number of people
  peoplenumber.innerText = numberOfpeople;
  perperson.innerText = numberOfpeople;
  // calculate the bill based on the new number of people
  calculateBill();
};
