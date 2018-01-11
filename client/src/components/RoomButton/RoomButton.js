import React, { Component } from 'react';

import { connect } from 'react-redux';

import './RoomButton.css';
import {selectRoom} from '../../actions/meetingActions.js'

class MyRoomButton extends React.Component {
  render() {
    const style = {
        zIndex: 100,
        position: "absolute",
      top: this.props.y,
      left: this.props.x,
      width: this.props.w,
      height: this.props.h
    };

    return <button style={style} onClick={() => this.props.selectRoom(this.props.name)}> {this.props.name} </button>;
  }
}

const mapStateToProps = state => {
  return {
    room: state.room
  }
}

const mapDispatchToProps = dispatch => {
    return {
        selectRoom: room => dispatch(selectRoom(room))
    }
}

const RoomButton = connect(mapStateToProps, mapDispatchToProps)(MyRoomButton)

export default RoomButton