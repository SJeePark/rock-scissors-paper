import React, { Component } from 'react';

class BoxClass extends Component {
  render() {
    const { borderColor, title, item, result } = this.props;
    return (
      <div className="Box" style={{ borderColor: borderColor }}>
        <h1>{title}</h1>
        <img className="item-img" src={item && item.img} alt={title}></img>
        <h2>{result}</h2>
      </div>
    );
  }
}

export default BoxClass;
