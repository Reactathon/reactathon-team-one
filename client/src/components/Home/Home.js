import React from 'react';
import { InputColumnLink } from '../Input/Input';
import './Home.css';

const MeetingsColumn = () => <div>Left side</div>;

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-column">
          <MeetingsColumn />
        </div>
        <div className="right-column">
          <InputColumnLink />
        </div>
      </div>
    );
  }
}

export default Home;
