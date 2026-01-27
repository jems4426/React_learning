import React, { Component} from "react";
class StringState extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            age : "",
        };
    }
    handlenameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    handleemailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handleageChange = (event) => {
        this.setState({ age: event.target.value });
    }
    render() {
        const { name, email, age } = this.state;
        return (
            <>
                <input type="text" value={name} onChange={this.handlenameChange} />
                <input type="text" value={email} onChange={this.handleemailChange} />
                <input type="text" value={age} onChange={this.handleageChange} />
                <button onclick={this.consolelog}>Submit</button>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Age: {age}</h2>

            </>
        );
    }
}
export default StringState;