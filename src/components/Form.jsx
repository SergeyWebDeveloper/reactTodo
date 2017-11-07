import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form className="todo-add-form">
                <input type="text" value="" placeholder="Что нужно сделать?"/>
                <button type="submit">Добавить</button>
            </form>
        )
    }
}

export default Form;