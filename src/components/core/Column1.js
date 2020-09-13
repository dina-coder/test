import React from 'react';
import style from '../../assets/style/Column.module.scss';

const Column1 = (props) => {
  //const AllObjectList=props.object.map(x=><option onClick={()=>props.func(x.object)}>{x.object}</option>);
  return (
    <div className={style.container}>
      {/* <form>
      <div className={style.listName}>{props.name}</div>
      <select  className={style.wrapper} name="select" size="10" multiple>
        {AllObjectList}
      </select>
      </form> */}
<div class="ui dropdown button" allowCategorySelection="true" >
  <span class="text" allowCategorySelection="true" >Choose Category</span>
  <i class="dropdown icon" allowCategorySelection="true" ></i>
  <div class="menu" allowCategorySelection="true" >
    <div class="item" allowCategorySelection="true" >
      <span class="text">Category 1</span>
    </div>
    <div class="item" allowCategorySelection="true" >
      <i class="dropdown icon"></i>
      <span class="text">Category 2</span>
      <div class="menu">
        <div class="item">Item 2A</div>
        <div class="item">Item 2B</div>
        <div class="item">Item 2C</div>
      </div>
    </div>
    <div class="item" allowCategorySelection="true" >
      <i class="dropdown icon"></i>
      <span class="text" allowCategorySelection="true" >Category 3</span>
      <div class="menu">
        <div class="item">Item 3A</div>
        <div class="item">Item 3B</div>
        <div class="item">Item 3C</div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Column1;
