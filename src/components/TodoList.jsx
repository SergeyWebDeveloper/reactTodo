import React from 'react';


class TodoList extends React.Component {
    render() {
        return (
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
        )
    }
}

export default TodoList;