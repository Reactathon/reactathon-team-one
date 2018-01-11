import React from 'react';
import { connect } from 'react-redux';

import './Input.css';

const ButtonMap = () => <div>Buttons</div>;
class InputColumn extends React.Component {
  // constructor(props) {

  // }

  render() {
    const { name, start, end, attendees } = this.props.selectedMeeting;
    return (
      <div className="input-container">
        <label className="name-label">
          Name of Meeting:
          {name !== undefined && name !== null ? (
            <label>{name}</label>
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
