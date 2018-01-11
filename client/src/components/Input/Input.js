import React from 'react';
import { connect } from 'react-redux';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import MapDialog from '../../components/MapDialog/MapDialog';
import { addMeeting } from '../../actions/meetingActions';

// import './Input.css';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

class InputColumn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.props.addMeeting({
      title: this.state.title,
      attendees: this.state.attendees,
      organiser: 'Spongebob Squarepants'
    });
  }

  render() {
    const { title, start, end, attendees, room } = this.props.selectedMeeting;
    return (
      <Card>
        <CardContent>
          {title !== undefined && title !== null ? (
            <label>{title}</label>
          ) : (
            <FormControl fullWidth>
              <InputLabel htmlFor="amount">Name of Meeting:</InputLabel>
              <Input
                fullWidth
                value={title !== undefined && title !== null ? title : ''}
              />
            </FormControl>
          )}

          <label className="time-label">Time:</label>
          <FormControl fullWidth>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>

          {attendees !== undefined && attendees !== null ? (
            <label># of Attendees: {attendees}</label>
          ) : (
            <FormControl fullWidth>
              <InputLabel htmlFor="attendees">
                # of Attendees:
              </InputLabel>
              <Input
                fullWidth
                value={
                  attendees !== undefined && attendees !== null ? attendees : ''
                }
              />
            </FormControl>
          )}
          {room !== undefined && room !== null ? (
            <label>Room: {room}</label>
          ) : null}

          <CardActions>
            <MapDialog />
            <Button
              disabled={this.props.selectedMeeting !== {}}
              raised
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMeeting: {
      start:
        state.selectedMeeting.start === undefined
          ? undefined
          : state.selectedMeeting.start.toLocaleTimeString(
              'en-US',
              dateOptions
            ),
      end:
        state.selectedMeeting.end === undefined
          ? undefined
          : state.selectedMeeting.end.toLocaleTimeString('en-US', dateOptions),
      title:
        state.selectedMeeting.title === undefined
          ? undefined
          : state.selectedMeeting.title,
      room:
        state.selectedMeeting.room === undefined
          ? undefined
          : state.selectedMeeting.room,
      attendees:
        state.selectedMeeting.attendees === undefined
          ? undefined
          : state.selectedMeeting.attendees
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMeeting: meeting => dispatch(addMeeting(meeting))
  };
};
export const InputColumnLink = connect(mapStateToProps, mapDispatchToProps)(
  InputColumn
);
