import React from 'react';

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
        let lengthTodos=this.props.todoElemLength.length;
        return lengthTodos ? lengthTodos+1 : 1;
    }

    handleAddTodo(e){
        e.preventDefault();
        let itemTodo={
          id: this.nextId(),
          text: this.state.value,
          completed: false
        };
        this.props.addTodoElem(itemTodo);
        this.setState({
            value: ''
        });
    };



    render(){
        // console.log(this.props.addTodoElem);
        return(
            <form className="todo-add-form">
                <input type="text" onChange={this.handleChangeValue} value={this.state.value} placeholder="Что нужно сделать?"/>
                <button onClick={this.handleAddTodo} type="submit">Добавить</button>
            </form>
        )
    }
}

export default Form;