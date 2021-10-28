const trueCard = getRandomCard();
let hak = 3;
let gameOver = false;
function getRandomCard() {
    return Math.floor(Math.random() * 3);
}

export function btnOnClick(comp) {
    var selectedId = comp.id.match(/\d+$/)[0]
    if (!gameOver) {
        if (selectedId == trueCard && hak > 1) {
            comp.src = '../cat.jpg'
            document.getElementById('kazandiId').style.display = 'unset'
            gameOver=true;
        }
        else if (hak > 1) {
            comp.src = '../dog.jpg'
            hak -= 1;
        }
        else if (hak == 1) {
            document.getElementById('yenildiId').style.display = 'unset'
            gameOver=true;
        }
    }
}

export function resetGameClick() {
    location.reload();
}