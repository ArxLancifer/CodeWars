/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).*/

function defineSuit(card) {
    const cardsIcon = {
      9827: "clubs",
      9830: "diamonds",
      9829: "hearts",
      9824: "spades"
    }
    return cardsIcon[card.charCodeAt(card.length-1)]
    
  }