import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Routes,Route } from "react-router";
import  Container from "./Game";
import  Home from "./home";

const notFound=()=>{
    return(
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfa bulunamadı.
            </p>
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/index' element={<Container/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='*' element={notFound()}></Route>
                </Routes>
            </HashRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

