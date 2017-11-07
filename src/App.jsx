import React from 'react';
import ReactDOM from 'react-dom';

import './app.sass';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <main>
                <header>
                    <table className="stats">
                        <tbody>
                        <tr>
                            <th>Всего задач:</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th>Выполнено:</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th>Осталось:</th>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </table>
                    <h1>React Todo</h1>
                    <section className="stopwatch">
                        <div className="stopwatch-time">00:00</div>
                        <div className="stopwatch-controls">
                            <button className="icon" icon="play_arrow"><i className="material-icons">play_arrow</i>
                            </button>
                            <button className="icon" icon="stop"><i className="material-icons">stop</i></button>
                        </div>
                    </section>
                </header>
                <section className="todo-list">
                    <div className="todo completed">
                        <button className="checkbox icon"><i className="material-icons">check_box</i></button>
                        <span className="todo-title">Изучить JavaScript</span>
                        <button className="edit icon" icon="edit"><i className="material-icons">edit</i></button>
                        <button className="delete icon" icon="delete"><i className="material-icons">delete</i></button>
                    </div>
                    <div className="todo">
                        <button className="checkbox icon"><i className="material-icons">check_box_outline_blank</i>
                        </button>
                        <span className="todo-title">Изучить React</span>
                        <button className="edit icon" icon="edit"><i className="material-icons">edit</i></button>
                        <button className="delete icon" icon="delete"><i className="material-icons">delete</i></button>
                    </div>
                    <div className="todo">
                        <button className="checkbox icon"><i className="material-icons">check_box_outline_blank</i>
                        </button>
                        <span className="todo-title">Написать приложение</span>
                        <button className="edit icon" icon="edit"><i className="material-icons">edit</i></button>
                        <button className="delete icon" icon="delete"><i className="material-icons">delete</i></button>
                    </div>
                </section>
                <form className="todo-add-form">
                    <input type="text" value="" placeholder="Что нужно сделать?" />
                    <button type="submit">Добавить</button>
                </form>
            </main>
    )
    }
    }


    ReactDOM.render(
        <App/>
    , document.getElementById('root'));
