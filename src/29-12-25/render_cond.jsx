import React,{ Component } from "react";
class RenderCond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ison: false
        };
    }
    render() {
        return (
            <>
            
            <button onClick={() => this.setState({ color: "red" })}>Red</button>
            <button onClick={() => this.setState({ color: "blue" })}>Blue</button>
            <button onClick={() => this.setState({ color: "green" })}>Green</button>
            <button onClick={() => this.setState({ color: "yellow" })}>Yellow</button>
            {/* <h1 style={{ color: this.state.color }}>This is a {this.state.color} text</h1> */}
            <br />
            <button onClick={() => this.setState({ bgcolor: "red" })}>Red</button>
            <button onClick={() => this.setState({ bgcolor: "blue" })}>Blue</button>
            <button onClick={() => this.setState({ bgcolor: "green" })}>Green</button>
            <button onClick={() => this.setState({ bgcolor: "yellow" })}>Yellow</button>
            <h2 style={{ color: this.state.color, backgroundColor: this.state.bgcolor }}>{this.state.color} text</h2>
            </>
        );
    }
}
export default RenderCond;