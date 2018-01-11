import React from 'react';
import { connect } from 'react-redux';
import MapDialog from '../../components/MapDialog/MapDialog'

import './Input.css';

const ButtonMap = () => <div>Buttons</div>;
class InputColumn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    const { title, start, end, attendees, room } = this.props.selectedMeeting;
    console.log(this.props.selectedMeeting);
    return (
      <div className="input-container">
        <label className="name-label">
          Name of Meeting:
          {title !== undefined && title !== null ? (
            <label>{title}</label>
          ) : (
            <input type="text" />
          )}
        </label>
        <label className="time-label">
          Time:
          <label className="from-label">
            From:
            {start !== undefined && start !== null ? (
              <label>{start}</label>
            ) : (
              <input type="text" />
            )}
          </label>
          <label className="to-label">
            To:
            {end !== undefined && end !== null ? (
              <label>{end}</label>
            ) : (
              <input type="text" />
            )}
          </label>
        </label>
        <label className="attendees-label">
          # of Attendees
          {attendees !== undefined && attendees !== null ? (
            <label>{attendees}</label>
          ) : (
            <input type="text" />
          )}
        </label>
        <MapDialog/>
        <button className="submit-button">Submit</button>
        <label className="room-button-label">
          Select Room
          {room !== undefined && room !== null ? (
            <label>{room}</label>
          ) : (
            <button className="room-button">Select Room</button>
          )}
        </label>
        {this.props.selectedMeeting === {} ? (
          <button className="submit-button" onClick={this.handleSubmit}>
            Submit
          </button>
        ) : (
          <div />
        )}
        <ButtonMap />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMeeting: state.selectedMeeting
  };
};

export const InputColumnLink = connect(mapStateToProps)(InputColumn);
