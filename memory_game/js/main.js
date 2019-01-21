var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log('You found a match!');
    } else {
        console.log('sorry try again');
    }
}

var flipCard = function(cardId){
    console.log('user flipped ' + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

flipCard(3)
flipCard(2)



