import React from 'react';
import style from '../../assets/style/NestedList.module.scss';

const NestedList = (props) => {
  return (   
      <ul  className={props.style==="big" ? style.BigContainer : style.SmallContainer} >
        <div className={style.Toggle}></div>
      </ul>
  );
}

export default NestedList;
