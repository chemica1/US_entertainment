import React from 'react';

import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';

class Main extends React.Component {
  render()  {
    return (
      <div>
        <Header pageTitle='대시보드'/>
        <Overview />
        <GraphSection />
      </div>
    );
  }
}

export default Main;