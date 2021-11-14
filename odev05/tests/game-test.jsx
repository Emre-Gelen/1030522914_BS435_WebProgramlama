const React = require('react');
const { mount } = require('enzyme');
const { Match, default: Game } = require('../src/client/Game');

const checkCards = (driver) => {
    const cards = driver.find('.kart');
    expect(cards.length).toEqual(3);
    expect(cards.at(0)).toBeDefined();
    expect(cards.at(1)).toBeDefined();
    expect(cards.at(2)).toBeDefined();

    expect(cards.at(0).find('img').prop('src')).toEqual('img/ArkaKapak.png');
    expect(cards.at(1).find('img').prop('src')).toEqual('img/ArkaKapak.png');
    expect(cards.at(2).find('img').prop('src')).toEqual('img/ArkaKapak.png');
}
const checkCardsAfterClick = (driver) => {
    const cards = driver.find('.kart');
    for (var i = 0; i < cards.length; i++) {
        let currentCard = cards.at(i);
        currentCard.simulate('click')
        currentCard=driver.find('.kart').at(i);
        let srcName=currentCard.find('img').prop('src');

        expect((srcName == 'img/Kedi.jpg' || srcName == 'img/Kopek.jpg' || srcName=='img/ArkaKapak.png')).toBeTruthy();
    }
}
const checkResetGameClick = (driver) =>{
    const resetGameSpan=driver.find('.link').at(0);
    resetGameSpan.simulate('click')
    
    const cards = driver.find('.kart');
    for (var i = 0; i < cards.length; i++) {
        let currentCard = cards.at(i);
        let srcName=currentCard.find('img').prop('src');

        expect((srcName=='img/ArkaKapak.png')).toBeTruthy();
    }
}
test('deneme', () => {
    const driver = mount(<Game debug />)
    checkCards(driver);
    checkCardsAfterClick(driver);
    checkResetGameClick(driver);

})
