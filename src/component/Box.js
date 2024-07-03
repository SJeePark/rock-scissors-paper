import React from 'react';

const Box = (props) => {
    console.log("props", props);
  return (
    <div className = "Box">
      <h1>{props.title}</h1>
      <img className = "item-img" src = {props.item && props.item.img}></img>
      <h2>win</h2>
    </div>
  )
}

export default Box
