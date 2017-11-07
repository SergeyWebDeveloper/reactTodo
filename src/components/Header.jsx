import React from 'react';

function Header() {
    return (
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
    );
}

export default Header;