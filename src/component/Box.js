import React from 'react';

const Box = (props) => {
    console.log("props", props);
  return (
    <div className = "Box">
      <h1>{props.title}</h1>
      <img className = "item-img" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYYjkhdkaqaOtM51hgsaF9i5G3NxBeoyRBA&s"></img>
      <h2>win</h2>
    </div>
  )
}

export default Box
