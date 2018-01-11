import React, {Component} from 'react'

import { connect } from 'react-redux'

import './RoomButton.css'

import React from 'react'

class RoomButton extends React.Component {

    render() {

        const style = {
        top: this.props.y;
        left: this.props.x;
        width: this.props.w;
        height: this.props.h;
        }

    return  <button label={this.props.roomName} style={style} />
    }
};

export default RoomButton;

