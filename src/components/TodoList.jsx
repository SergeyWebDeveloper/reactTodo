import React from 'react';
import PropTypes from 'prop-types';


class TodoList extends React.Component {

    idTodo(id){
        this.props.idDeleteTodo(id);
    }

    render() {
        return (
            <section className="todo-list">
                {
                    this.props.todoList.map((elem)=>{
                        return (
                            <div className="todo" key={elem.id}>
                                <button className="checkbox icon"><i className="material-icons">{elem.completed ? 'check_box':'check_box_outline_blank' }</i></button>
                                <span className="todo-title">{elem.text}</span>
                                <button className="edit icon" icon="edit"><i className="material-icons">edit</i></button>
                                <button
                                    className="delete icon"
                                    icon="delete"
                                    onClick={this.idTodo.bind(this,elem.id)}
                                >
                                    <i className="material-icons">delete</i></button>
                            </div>
                        );
                    })
                }
            </section>
        )
    }
}

TodoList.propTypes={
    todoList: PropTypes.array.isRequired,
    idDeleteTodo: PropTypes.func
};

export default TodoList;