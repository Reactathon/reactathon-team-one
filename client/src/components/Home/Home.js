import React from 'react';
import { InputColumnLink } from '../Input/Input';
import {MeetingCalendar} from '../../components/MeetingCalendar/MeetingCalendar'
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-column">
          <MeetingCalendar />
        </div>
        <div className="right-column">
          <InputColumnLink />
        </div>
      </div>
    );
  }
}

export default Home;
