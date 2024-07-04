import React from 'react';

const Box = (props) => {
  return (
    <div className = "Box" style={{ borderColor: props.borderColor }}>
      <h1>{props.title}</h1>
      <img className = "item-img" src = {props.item && props.item.img}></img>
      <h2>{props.result}</h2>
    </div>
  )

}

export default Box
