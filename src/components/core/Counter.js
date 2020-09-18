import React from 'react';
import style from '../../assets/style/Counter.module.scss';
const Counter = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h3>Размечено</h3>
                <h1>{props.counter}</h1>
            </div>
        </div>
    );
}

export default Counter;