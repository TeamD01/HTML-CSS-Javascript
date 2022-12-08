const cards = document.querySelectorAll('.card');

let isFlipped = false, isLocked = false, firstCard, secondCard;

function flipCard() {
    if (isLocked) 
        return;
    if (this === firstCard) 
        return;
    this.classList.add('flip');

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    isMatch();
}

function isMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    if(isMatch)
        disableCard();
    else
        turnBack();
}

function disableCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.style.opacity ="0";
    secondCard.style.opacity ="0";
    resetGame();
}

function turnBack() {
    isLocked = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetGame();
  }, 2000);
}

function resetGame() {
    [isFlipped, isLocked] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));