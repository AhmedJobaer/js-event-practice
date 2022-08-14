const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

const blueButton = document.getElementById('make-blue');
blueButton.addEventListener('click', function makeBlue() {
    document.body.style.backgroundColor = 'blue';
})


//Important 
document.getElementById('make-red').addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = 'red';
})

const makeGreenbutton = document.getElementById('make-green');
makeGreenbutton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}