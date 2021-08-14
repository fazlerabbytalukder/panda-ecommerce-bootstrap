//problem 1: all h2 color change
const blogTitle = document.getElementsByTagName('h2');
for (const allTitle of blogTitle) {
    // console.log(allTitle.innerText);
    allTitle.style.color = 'red';
}










//problem 2: backpack background color change
document.getElementById('backpack-heading').style.backgroundColor = 'green';










//problem 3: all card border redios change
const allCard = document.getElementsByClassName('card');
for (const cards of allCard) {
    cards.style.borderRadius = '20px';
}









//problem 4: jekeno btton e chap dile console log hobe
//eta index html er 145 tomo line e kora hoyeche









//problem 5: jotogilo buy button ase jetay click kora hobe oitai remove hoye jabe
const allButton = document.getElementsByClassName('panda-button-buynow');
for (const buttons of allButton) {
    // console.log(buttons);
    buttons.addEventListener('click', function (event) {
        // console.log('removed');
        // console.log(event.target.parentNode);
        event.target.parentNode.removeChild(event.target);
    });
}










//problem 6: submit button desable thakbe emanil likle enable hbe
document.getElementById('submit-confirm').addEventListener('keyup', function (event) {
    //1st way
    // const confirmField = document.getElementById('submit-confirm');
    // console.log(confirmField.value);
    //2nd way
    // console.log(event.target.value);

    if (event.target.value == 'Email') {
        document.getElementById('email-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('email-button').setAttribute('disabled',true);
    }
});

//change event jodi copy pest kore bosai
document.getElementById('submit-confirm').addEventListener('change', function (event) {
    // const confirmField = document.getElementById('submit-confirm');
    // console.log(confirmField.value);

    if (event.target.value == 'Email') {
        document.getElementById('email-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('email-button').setAttribute('disabled',true);
    }
});











//problem 7: jekono img e mouse over korle img chage hoye jabe
const images = document.getElementsByTagName('img');
for (const image of images) {
    image.addEventListener('mouseover', function () {
        image.src = '/images/bags/bag-1.png';
    });
}








//problem 8: double click korle backgrond color change hbe
document.getElementById('subscribe').addEventListener('dblclick',function () {
    document.getElementById('subscribe').style.backgroundColor = 'red';
})