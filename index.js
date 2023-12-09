// Code your solutions in this file

function writeCards(cards){
    const arrY = [];
    for (let i = 0; i < cards.length; i++) {
         arrY[i] = (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return arrY;
}
function countDown(startingNumber){
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}
