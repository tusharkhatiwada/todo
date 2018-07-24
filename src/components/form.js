import React, { Component } from "react";

export default class Form extends Component {
    render() {
        const { inputText, ...props } = this.props;
        return (
            <form {...props}>
                <input type="text" placeholder="Enter Todo Item" value={inputText} />
                <button>Add Todo</button>
                <br />
            </form>
        );
    }
}
