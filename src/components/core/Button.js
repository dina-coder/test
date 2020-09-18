import React from 'react';
import style from '../../assets/style/Button.module.scss';

const Button=(props)=> {
  
  return (
    <div className={style.ButtonContainer}>
      <button className={style.Button} onClick={()=>props.func()}>{props.name}</button>
    </div>
  );
}

export default Button;
