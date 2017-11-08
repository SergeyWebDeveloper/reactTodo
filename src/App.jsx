import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
import Form from './components/Form.jsx';

import './app.sass';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Todo 1',
                    completed: true
                },
                {
                    id: 2,
                    text: 'Todo 2',
                    completed: false
                },
                {
                    id: 3,
                    text: 'Todo 3',
                    completed: false
                },
                {
                    id: 4,
                    text: 'Todo 4',
                    completed: true
                }
            ]
        };
    }

    render() {
        return (
            <main>
                <Header  />
                <TodoList todoList={this.state.todos} />
                <Form />
            </main>
        )
    }
}


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
