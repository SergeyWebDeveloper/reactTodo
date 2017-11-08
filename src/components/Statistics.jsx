import React from 'react';
import PropTypes from 'prop-types';

function Statistics(props) {
    return (
        <table className="stats">
            <tbody>
            <tr>
                <th>Всего задач:</th>
                <td>{props.total}</td>
            </tr>
            <tr>
                <th>Выполнено:</th>
                <td>{props.completedTodos}</td>
            </tr>
            <tr>
                <th>Осталось:</th>
                <td>{props.activeTodos}</td>
            </tr>
            </tbody>
        </table>
    );
}

Statistics.propTypes={
    total: PropTypes.number.isRequired,
    completedTodos: PropTypes.number.isRequired,
    activeTodos: PropTypes.number.isRequired
};

export default Statistics;