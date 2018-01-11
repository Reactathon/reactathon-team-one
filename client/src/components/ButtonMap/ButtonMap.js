import React, { Component } from 'react';

import { connect } from 'react-redux';

import RoomButton from '../RoomButton/RoomButton';

import './ButtonMap.css';

import roomMap from './RoomMap.png';

const origWidth=1889;
const origHeight=614;
const finalWidth=1024;
const finalHeight=333;
const percent_width=finalWidth/origWidth;
const percent_height=finalHeight/origHeight;
const button_translate_x=25;
const button_translate_y=68;

class ButtonMap extends React.Component {

    getRooms = () =>
            [
                {"name": "Atrium" ,"x":336*percent_width+button_translate_x,"y":401*percent_height+button_translate_y,"w":144*percent_width,"h":213*percent_height},
                {"name": "Bazaar" ,"x":769*percent_width+button_translate_x,"y":480*percent_height+button_translate_y,"w":227*percent_width,"h":106*percent_height},
                {"name": "Coffee House" ,"x":1561*percent_width+button_translate_x,"y":511*percent_height+button_translate_y,"w":117*percent_width,"h":76*percent_height},
                {"name": "Den" ,"x":125*percent_width+button_translate_x,"y":120*percent_height+button_translate_y,"w":116*percent_width,"h":81*percent_height},
                {"name": "Forum" ,"x":618*percent_width+button_translate_x,"y":278*percent_height+button_translate_y,"w":303*percent_width,"h":115*percent_height},
                {"name": "Galleria" ,"x":337*percent_width+button_translate_x,"y":120*percent_height+button_translate_y,"w":97*percent_width,"h":77*percent_height},
                {"name": "Garden" ,"x":1455*percent_width+button_translate_x,"y":2*percent_height+button_translate_y,"w":137*percent_width,"h":114*percent_height},
                {"name": "Market" ,"x":1121*percent_width+button_translate_x,"y":157*percent_height+button_translate_y,"w":146*percent_width,"h":102*percent_height},
                {"name": "Plaza" ,"x":1014*percent_width+button_translate_x,"y":458*percent_height+button_translate_y,"w":106*percent_width,"h":129*percent_height},
                {"name": "Square" ,"x":1741*percent_width+button_translate_x,"y":113*percent_height+button_translate_y,"w":148*percent_width,"h":116*percent_height},
                {"name": "Terrace" ,"x":1*percent_width+button_translate_x,"y":121*percent_height+button_translate_y,"w":117*percent_width,"h":81*percent_height},
                {"name": "Town Hall" ,"x":1318*percent_width+button_translate_x,"y":2*percent_height+button_translate_y,"w":136*percent_width,"h":113*percent_height}
            ];


    render() {
        return (<div>
                <img style={{height:finalHeight, width:finalWidth, top:0, left:0}} src={roomMap} width={finalWidth} height={finalHeight} />
                {this.getRooms().map((roomData)=>{ return <RoomButton key={roomData.name} {...roomData} />})}

            </div>

        )
    }
}

export default ButtonMap;
