import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(){
        super();
        this.state={
          todos: []
        };
    }

    render(){
        return(
            <div className="todo__wrapper">
                <p>Todo Wrapper2</p>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
