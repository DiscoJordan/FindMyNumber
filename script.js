let rightnumber = Math.floor((Math.random() * 10) + 1);
let guesses = 5;
const again = document.getElementById("again")
const form = document.getElementById("form")
const title = document.getElementById("title")
const button = document.getElementById("guessbutton")
const guessesTitle = document.getElementById("window__guesses")
const html = document.getElementById("html")
const actArr = [again, form, title]

function handleGuess() {
    let number = document.getElementById('input').value;
    if (number > 10 || number < 1) {
        document.getElementById('str').innerHTML = `Write a number between 1-10!`;
    } else if (number == rightnumber && guesses > 0) {
        document.getElementById('str').innerHTML = `${number} is a right number!`;
        document.getElementById('header1').innerHTML = `Congratulations`;
        document.getElementById('window__guesses').innerHTML = `Guessed right on the ${6-guesses} try`;
        html.classList.add("active")
        

        actArr.forEach(ele => {
            ele.classList.add("active")
        })
    } else if (guesses > 1) {
        document.getElementById('str').innerHTML = `${number} is not a right number, try again!`;
        guesses--;
        document.getElementById('window__guesses').innerHTML = `You have ${guesses} guesses`;
    }
    else {
       
        document.getElementById('header1').innerHTML = `No more guesses :((`;
        html.classList.add("lose")
        guessesTitle.classList.add("active")

        actArr.forEach(ele => {
            ele.classList.add("active")
        })
    }
    document.getElementById('input').value = ''
}

form.addEventListener("submit", function (event) {
    event.preventDefault()
   handleGuess()
})

button.addEventListener("click", function () {
   handleGuess()
})


