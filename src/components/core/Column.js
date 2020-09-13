import React from 'react';
import style from '../../assets/style/Column.module.scss';

const Column = (props) => {
  const AllObjectList=props.object.map(x=><option onClick={()=>props.func(x.object)}>{x.object}</option>);
  return (
    <div className={style.container}>
      <form>
      <div className={style.listName}>{props.name}</div>
      <select  className={style.wrapper} name="select" size="10" multiple>
        {AllObjectList}
      </select>
      </form>

    </div>
  );
}

export default Column;
