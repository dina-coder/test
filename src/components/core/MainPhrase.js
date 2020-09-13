import React from 'react';
import style from '../../assets/style/MainPhrase.module.scss';

const MainPhrase=(props)=> {
  return (
    <div className={style.wrapper}>
      <h1 className={style.Title}>  
      {props.phrase}    
      </h1>
    </div>
  );
}

export default MainPhrase;
