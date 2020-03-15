var container = document.getElementById('container');
var card = Array.from(document.getElementsByClassName('card'));
var naruto = document.getElementsByClassName('front');
var kaneki = document.getElementsByClassName('back');
var reset = document.getElementById('reset');
var naruto2 = document.getElementsByClassName('front2');
var kaneki2 = document.getElementsByClassName('back2');
var arrData = [];
var x;
var y;

// openning of code
document.body.onload = oppennig();
function oppennig() {
    for (var i = 0; i < card.length; i++) {
        var random = Math.floor(Math.random() * card.length);
        card[i].style.order = random;
        card[i].classList.add('oppen');
        setTimeout(function () {
            for (var i = 0; i < card.length; i++) {
                card[i].classList.remove('oppen');
            }
        }, 3000);
    }
}


// add click event for each card container
function btnEvent() {
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener('click', display)
    }
}
btnEvent();

// click btn 
function display() {
    this.style.transform = 'rotateY(180deg)';
    arrData.push(this);
    check(x, y);
    // pointerEvent to prevent click function to be clicked towice 
    this.style.pointerEvents = 'none';
}

// check function 
function check(x, y) {
    if (arrData.length == 2) {
        var a = arrData[0].children[0].children[0].src
        var b = arrData[1].children[0].children[0].src
        if (a == b) {
            arrData[0].style.visibility = 'hidden';
            arrData[1].style.visibility = 'hidden';
            arrData = []
        } else if (a != b) {
            setTimeout(function () {
                console.log(arrData.length);
                arrData[0].style.transform = 'rotateY(0)';
                arrData[1].style.transform = 'rotateY(0)';
                arrData[0].style.pointerEvents = 'visible';
                arrData[1].style.pointerEvents = 'visible';

                arrData = []
            }, 1000);
        }
    }
}

// reset button

reset.addEventListener("click", displayDate);

function displayDate(){
alert('s')
    location.reload();

}