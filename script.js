let rightnumber = Math.floor((Math.random() * 10) + 1);
let guesses = 5;
const again=  document.getElementById("again")
const form= document.getElementById("form")
const title =  document.getElementById("title")
const actArr = [again,form,title]
console.log(rightnumber);
guessbutton.onclick = function () {

    let number = document.getElementById('input').value;
    if (number > 100 || number < 1 ) {
        document.getElementById('str').innerHTML = `Write a number between 1-100!`;
    } else if(number ==rightnumber && guesses>0){
        document.getElementById('str').innerHTML = `${number} is a right number!`;
        document.getElementById('window__guesses').innerHTML = `Congratulations, right number! Want to try again?`;
     
        actArr.forEach(ele=>{
            ele.classList.add("active")
        })
    } else if(guesses>1){
        document.getElementById('str').innerHTML = `${number} is not a right number, try again!`;
        guesses--;
        document.getElementById('window__guesses').innerHTML = `You have ${guesses} guesses`;
    }
    else{
        document.getElementById('window__guesses').innerHTML = `No more guesses :(( `;

        actArr.forEach(ele=>{
            ele.classList.add("active")
        })

    }
    
    document.getElementById('input').value = ''
    
    
}
