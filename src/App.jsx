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
<<<<<<< HEAD
                    completed: true
=======
                    completed: false
>>>>>>> 4ae11fc2697567a2b81b44c2fe6e72c193e147a8
                },
                {
                    id: 2,
                    text: 'Todo 2',
<<<<<<< HEAD
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
=======
>>>>>>> 4ae11fc2697567a2b81b44c2fe6e72c193e147a8
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
                <Header todoElementsStatistics={this.state.todos} title={'React Todo'} />
                <TodoList todoList={this.state.todos} />
                <Form todoElemArray={this.state.todos} addTodoElem={this.addTodoItem} />
            </main>
        )
    }
}

ReactDOM.render(
    <App />
    , document.getElementById('root'));
