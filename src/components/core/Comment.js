import React from 'react';
import style from '../../assets/style/Comment.module.scss';

const Comment=(props)=> {
  return (
    <div className={style.container}>
      <textarea onChange={props.func} placeholder="Оставить комментарий..." className={style.input} />
    </div>
  );
}

export default Comment;
