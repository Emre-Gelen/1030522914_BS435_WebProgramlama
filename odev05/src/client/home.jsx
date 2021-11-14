import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Kart Oyunu</h2>
                <p className="welcomeText">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
                    2. seçim hakkı tanınacaktır.</p>
                <div className="action">
                    <Link className="play" to={"/index"}>Oyna</Link>    
                </div>
            </div>
        );
    }
}
