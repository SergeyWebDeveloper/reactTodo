import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: ''
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChangeValue(event){
        let text=event.target.value;
        this.setState({
           value: text
        });
    }

    nextId(){
        let todosIdArray=this.props.todoElemArray.map((elem)=>{
           return elem.id;
        });
        return todosIdArray ? Math.max.apply(null,todosIdArray)+1 : 1;
    }

    handleAddTodo(e){
        e.preventDefault();
        if(this.state.value.trim()){
            let itemTodo={
                id: this.nextId(),
                text: this.state.value,
                completed: false
            };
            this.props.addTodoElem(itemTodo);
            this.setState({
                value: ''
            });
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.todoId!==this.props.todoId){
            this.setState({
                value: nextProps.todoId
            });
        }
    }



    render(){
        return(
            <form className="todo-add-form">
                <input type="text" onChange={this.handleChangeValue} value={this.state.value} placeholder="Что нужно сделать?"/>
                <button onClick={this.handleAddTodo} type="submit">Добавить</button>
            </form>
        )
    }
}

Form.propTypes={
    todoElemArray: PropTypes.array.isRequired,
    addTodoElem: PropTypes.func.isRequired,
    todoId: PropTypes.number
};

export default Form;