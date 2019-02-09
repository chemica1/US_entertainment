import React from 'react';
import HCard from './HCard';

class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-4'>
            <HCard iconName='tags' backgroundColor='tealBG' label='users' number={42356} />
          </div>
          <div className='col-sm-4'>
            <HCard iconName='won sign icon' backgroundColor='pinkBG' label='products' number={1256} />
          </div>
          <div className='col-sm-4'>
            <HCard iconName='calendar alternate outline icon' backgroundColor='amberBG' label='revenue' number={178356} prefix='$' />
          </div>
       
        </div>
      </section>
    )
  }
}

export default Overview;
/*
<div className='col-sm-3 '>
<HCard iconName='bar-chart' backgroundColor='cyanBG' label='goal' number={85} suffix='%' />
</div>
*/