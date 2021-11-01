
export function getRandomCard() {
    return {trueCard:Math.floor(Math.random() * 3),imgSrc:''};
}

export function resetGameClick() {
    location.reload();
}