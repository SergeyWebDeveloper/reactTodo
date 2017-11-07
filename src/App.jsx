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
            todo: []
        };
    }

    render() {
        return (
            <main>
                <Header  />
                <TodoList />
                <Form />
            </main>
        )
    }
}


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
