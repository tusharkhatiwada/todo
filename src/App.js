import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Form from "./components/form";

class App extends Component {
    state = {
        todoItems: [],
        text: ""
    };

    handleInputChange = event => {
        this.setState({
            text: event.target.value
        });
        // console.log(event.target.value);
    };
    addTodo = e => {
        e.preventDefault();
        const { text, todoItems } = this.state;
        todoItems.push({
            todo: text
        });
        console.log("Todo: ", todoItems);
        this.setState({
            todoItems
        });
    };
    renderTodoList = () => {
        const { todoItems } = this.state;
        return todoItems.map((todo, index) => {
            return <li key={index}>{todo.todo}</li>;
        });
    };
    render() {
        const { text } = this.state;
        return (
            <div className="App">
                <Header />
                <div className="App-intro">
                    <Form
                        inputText={text}
                        onSubmit={this.addTodo}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <h1>Todo Items:</h1>
                    <ul>{this.renderTodoList()}</ul>
                </div>
            </div>
        );
    }
}

export default App;
