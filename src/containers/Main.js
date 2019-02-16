import React from 'react';

import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.outputEvent = this.outputEvent.bind(this);
}
/*
outputEvent(event) {
  // the event context comes from the Child
  this.setState({ count: this.state.count++ });
}*/

outputEvent = (e, { value }) => this.setState({count : value })

  render()  {
    const variable = 5;
    return (
      <div>
        <Header pageTitle='대시보드' clickHandler={this.outputEvent}/>
        <Overview />
        <GraphSection />
        Count: { this.state.count }
      </div>
    );
  }
}

export default Main;