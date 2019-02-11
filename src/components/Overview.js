import React from 'react';
import HCard from './HCard';

class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='tags' backgroundColor='tealBG' label='관리 대수' number={3} suffix='대' />
          </div>
          <div className='col-sm-4'>
            <HCard iconName='won sign icon' backgroundColor='pinkBG' label='일 매출' number={1256} suffix='원' />
          </div>
          <div className='col-sm-5'>
            <HCard iconName='calendar alternate outline icon' backgroundColor='amberBG' label='월 매출' number={178356} suffix='원' />
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