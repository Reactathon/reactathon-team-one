import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


import MapDialog from '../../components/MapDialog/MapDialog'
=======
import MapDialog from '../../components/MapDialog/MapDialog';
import {addMeeting} from '../../actions/meetingActions';
>>>>>>> 36e4d5af7580df21860b5b927774006efbf32f1f

import './Input.css';

class InputColumn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.addMeeting(this.props.selectedMeeting)
  }

  render() {
    const { title, start, end, attendees, room } = this.props.selectedMeeting;
    console.log(title);
    return (
      <Card>
        <CardContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="amount">Name of Meeting:</InputLabel>
            <Input fullWidth value={title !== undefined && title !== null ? title : ''} />
          </FormControl>

          <label className="time-label">Time:</label>
          <FormControl fullWidth>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="attendees" className="attendees-label"># of Attendees:</InputLabel>
            <Input fullWidth value={attendees !== undefined && attendees !== null ? attendees : ''} />
          </FormControl>

          <CardActions>
            <MapDialog/>
            <Button disabled={this.props.selectedMeeting !== {}} raised color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

//
//   <MapDialog/>
//
//

const mapStateToProps = state => {
  return {
    selectedMeeting: state.selectedMeeting
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addMeeting: meeting => dispatch(addMeeting(meeting))
    }
}
export const InputColumnLink = connect(mapStateToProps, mapDispatchToProps)(InputColumn);
