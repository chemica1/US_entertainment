import React from 'react';

import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 0 };
    this.outputEvent = this.outputEvent.bind(this);
}

outputEvent = (e, { value }) => this.setState({name : value })

  render()  {
    const variable = 5;
    return (
      <div>
        <Header pageTitle='대시보드' clickHandler={this.outputEvent}/>
        <Overview name={this.state.name} />
        <GraphSection />
        name: { this.state.name }
      </div>
    );
  }
}

export default Main;