import React, { Component } from 'react';

import { connect } from 'react-redux';

import './RoomButton.css';

class RoomButton extends React.Component {
  render() {
    const style = {
        zIndex: 100,
        position: "absolute",
      top: this.props.y,
      left: this.props.x,
      width: this.props.w,
      height: this.props.h
    };

    return <button style={style}> {this.props.name} </button>;
  }
}

export default RoomButton;
