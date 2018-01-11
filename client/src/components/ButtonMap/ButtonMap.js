import React, { Component } from 'react';

import { connect } from 'react-redux';

import RoomButton from '../RoomButton/RoomButton';

import './ButtonMap.css';

import roomMap from './RoomMap.png';

const buttonStyle = {
    zIndex: 100,

}

class ButtonMap extends React.Component {

    getRooms = () =>
            [
                {"name": "Atrium" ,"x":336,"y":401,"w":144,"h":213},
                {"name": "Bazaar" ,"x":769,"y":480,"w":227,"h":106},
                {"name": "Coffee House" ,"x":1561,"y":511,"w":117,"h":76},
                {"name": "Den" ,"x":125,"y":120,"w":116,"h":81},
                {"name": "Forum" ,"x":618,"y":278,"w":303,"h":115},
                {"name": "Galleria" ,"x":337,"y":97,"w":120,"h":77},
                {"name": "Garden" ,"x":1455,"y":2,"w":137,"h":114},
                {"name": "Market" ,"x":1121,"y":157,"w":146,"h":102},
                {"name": "Plaza" ,"x":1014,"y":458,"w":106,"h":129},
                {"name": "Square" ,"x":1741,"y":113,"w":148,"h":116},
                {"name": "Terrace" ,"x":1,"y":121,"w":117,"h":81},
                {"name": "Town Hall" ,"x":1318,"y":2,"w":136,"h":113}
            ];

    render() {
        return (<div>
                <img style={{zIndex: 0}} src={roomMap} />
                {this.getRooms().map((roomData)=>{ return <RoomButton {...roomData} />})}

            </div>

        )
    }
}

export default ButtonMap;
