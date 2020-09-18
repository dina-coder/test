import React from 'react';
import style from '../../assets/style/Column.module.scss';

const Column = (props) => {
  let AllObjectList=[]
  if (props.list !== undefined){
    AllObjectList=props.list.type.choices.map(x=><li onClick={()=>props.func(x.name)} className={style.ElementOfList+' '+(props.currentValue === x.name && style.ActiveElementOfList) }>{x.name}</li>)
  }
 // const AllObjectList=props.object.map(x=><li onClick={()=>props.func(x.object)}>{x.object}</li>);
  return (
    <div className={style.container}>
      <form>
      <div className={style.listName}>{props.name}</div>
      <ul  className={props.style==="big" ? style.BigContainer : style.SmallContainer} >
        {AllObjectList}
      </ul>
      </form>

    </div>
  );
}

export default Column;
