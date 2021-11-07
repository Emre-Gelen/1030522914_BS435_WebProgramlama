import React from "react";
import ReactDOM from "react-dom";
import  Container from "./Game";

class App extends React.Component {
    render() {
        return (
            <div>
                <Container/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

