let rightnumber = Math.floor((Math.random() * 10) + 1);
let guesses = 5;
const again = document.getElementById("again")
const form = document.getElementById("form")
const title = document.getElementById("title")
const button = document.getElementById("guessbutton")
const guessesTitle = document.getElementById("window__guesses")
const html = document.getElementById("html")
const actArr = [again, form, title]
let play = true
function handleGuess() {
    let number = document.getElementById('input').value;
    let msg = document.getElementById('str')
    //number is not equal 1-10
    if (number > 10 || number < 1) {
        document.getElementById('str').innerHTML = `Write a number between 1-10!`;
        msg.style.color = ('red')

    } else if (number == rightnumber && guesses > 0) {
        //number is right, win
        msg.style.color = ('black')
        document.getElementById('str').innerHTML = `${number} is a right number!`;
        document.getElementById('header1').innerHTML = `Congratulations`;
        document.getElementById('window__guesses').innerHTML = `Guessed right on the ${6 - guesses} try`;
        html.classList.add("active")


        actArr.forEach(ele => {
            ele.classList.add("active")
        })
    } else if (guesses > 1) {
        //number is not right
        msg.style.color = ('black')
        document.getElementById('str').innerHTML = `${number} is not a right number, try again!`;
        guesses--;

        document.getElementById('window__guesses').innerHTML = `You have ${guesses} guesses`;
play = false
        html.classList.add("lose")
        setTimeout(() => {
            html.classList.remove("lose")

        }, 200);

    }
    else {
        //losee
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
if(!play){
    document.addEventListener("keydown", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        window.location.reload();
        play = true
    }
});
}

