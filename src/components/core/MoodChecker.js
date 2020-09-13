import React from 'react';
import style from '../../assets/style/MoodChecker.module.scss';


const MoodChecker=(props)=> {
  return (
    <div className={style.wrapper}>
      <label className={style.container}>{props.name}
        <input type="checkbox"  onChange={()=>props.func(props.name)}/>
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
}

export default MoodChecker;
