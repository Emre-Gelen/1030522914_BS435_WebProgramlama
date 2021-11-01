import React from "react";
import ReactDOM from "react-dom";
import { getRandomCard, resetGameClick } from "./randomGenerator";
let hak = 3
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectCard: getRandomCard(),
        }
    }

    handleClick = (compIndex, isTrue) => {
        if (hak > 1) {
            if (isTrue && hak > 1) {
                document.getElementsByClassName('kart')[compIndex].src = '../cat.jpg'
                this.setState({
                    objectCard: getRandomCard(),
                })
                setTimeout(() => {
                    resetGameClick();// setState kullandım fakat componentler kendini yenilemedi.Ondan dolayı location.reload() kullanmak durumunda kaldım.
                }, 1000);
            }
            else if (hak > 1) {
                hak--;
                document.getElementsByClassName('kart')[compIndex].src = '../dog.jpg'
            }
        }
        else {
            setTimeout(() => {
                resetGameClick();// setState kullandım fakat componentler kendini yenilemedi.Ondan dolayı location.reload() kullanmak durumunda kaldım.
            }, 3000);
        }
    }

    returnCard = (index, imgSrc, isTrue) => {
        return <img className="kart" src={imgSrc} onClick={() => { this.handleClick(index, isTrue) }} />
    }

    render() {
        const { objectCard } = this.state;
        const { imgSrc, trueCard } = objectCard;
        return (<div>{this.returnCard(0, imgSrc, trueCard == 0)}
            {this.returnCard(1, imgSrc, trueCard == 1)}
            {this.returnCard(2, imgSrc, trueCard == 2)}
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))