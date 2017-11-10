import React from 'react';
import PropTypes from 'prop-types';


class TodoList extends React.Component {


    render() {
        return (
            <section className="todo-list">
                {
                    this.props.todoList.map((elem)=>{
                        return (
                            <div
                                className={`todo ${elem.completed ? 'completed' : ''}`}
                                key={elem.id}>
                                <button
                                    className="checkbox icon"
                                    onClick={()=>this.props.completedTodo(elem.id)}
                                >
                                    <i className="material-icons">{elem.completed ? 'check_box':'check_box_outline_blank' }</i></button>
                                <span className="todo-title">{elem.text}</span>

                                <button
                                    className="edit icon"
                                    icon="edit"
                                    onClick={()=>this.props.editTodo(elem.id)}
                                ><i className="material-icons">edit</i></button>

                                <button
                                    className="delete icon"
                                    icon="delete"
                                    onClick={()=>this.props.idDeleteTodo(elem.id)}
                                >
                                    <i className="material-icons">delete</i>
                                </button>

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
    idDeleteTodo: PropTypes.func,
    completedTodo: PropTypes.func,
    editTodo: PropTypes.func
};

export default TodoList;