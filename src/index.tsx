import React from "react"
import { render } from "react-dom";


class App extends React.Component {

    public render() {
        return (
            <h1>Hello</h1>
        )
    }
}

var el = document.getElementById("root")

render(<App />, el)