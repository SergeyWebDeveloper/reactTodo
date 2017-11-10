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
        this.addTodoItem=this.addTodoItem.bind(this);
        this.handleDeleteTodo=this.handleDeleteTodo.bind(this);

    }

    addTodoItem(obj){
        let todos=this.state.todos;
        todos.push(obj);
        this.setState({todos});
    }

    handleDeleteTodo(id) {
        let oldTodos = this.state.todos;
        let todos = oldTodos.filter((elem) => {
            return elem.id !== id;
        });
        this.setState({todos});
    }

    render() {
        return (
            <main>
                <Header todoElementsStatistics={this.state.todos} title={'React Todo'} />
                <TodoList idDeleteTodo={this.handleDeleteTodo} todoList={this.state.todos} />
                <Form todoElemArray={this.state.todos} addTodoElem={this.addTodoItem} />
            </main>
        )
    }
}

ReactDOM.render(
    <App />
    , document.getElementById('root'));
