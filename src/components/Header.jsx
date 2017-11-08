import React from 'react';
import Statistics from './Statistics.jsx';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render(){
        let totalTodos=this.props.todoElementsStatistics.length;
        let completedTodos=this.props.todoElementsStatistics.filter((elem)=>{
            return elem.completed;
        }).length;
        let activeTodos=totalTodos-completedTodos;
        return (
            <header>
                <Statistics total={totalTodos} completedTodos={completedTodos} activeTodos={activeTodos} />
                <h1>{this.props.title}</h1>
                <section className="stopwatch">
                    <div className="stopwatch-time">00:00</div>
                    <div className="stopwatch-controls">
                        <button className="icon" icon="play_arrow"><i className="material-icons">play_arrow</i>
                        </button>
                        <button className="icon" icon="stop"><i className="material-icons">stop</i></button>
                    </div>
                </section>
            </header>
        );
    }
}

Header.propTypes={
  title: PropTypes.string,
  todoElementsStatistics: PropTypes.array.isRequired
};


export default Header;