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
                    completed: false
                },
                {
                    id: 2,
                    text: 'Todo 2',
                    completed: true
                }
            ]
        };
        this.addTodoItem=this.addTodoItem.bind(this);

    }

    addTodoItem(obj){
        let todos=this.state.todos;
        todos.push(obj);
        this.setState({todos});
    }

    render() {
        return (
            <main>
                <Header title={'React Todo'} />
                <TodoList todoList={this.state.todos} />
                <Form todoElemArray={this.state.todos} addTodoElem={this.addTodoItem} />
            </main>
        )
    }
}


ReactDOM.render(
    <App />
    , document.getElementById('root'));
