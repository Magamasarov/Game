var cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
cards.sort(function() { return 0.5 - Math.random() });

var correctCard = cards[0];

var audio = new Audio('C:\\Users\\admin\\Desktop\\Сайт\\Image\\4e9c206b994181f.mp3');

function checkCard(cardNumber) {
    if (cardNumber === correctCard) {
        alert("Правильно! Вы угадали карту.");
    } else {
        alert("Неправильно. Попробуйте еще раз.");
        playSound();
    }
    resetGame();
}

function resetGame() {
    cards.sort(function() { return 0.5 - Math.random() });
    correctCard = cards[0];

    for (var i = 0; i < 10; i++) {
        document.getElementById('card' + i).innerHTML = '?';
    }
}

function playSound() {
    audio.play();
}

window.onload = function () {
    resetGame();
};
