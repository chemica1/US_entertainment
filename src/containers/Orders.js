import React from 'react';
import Header from '../components/Header';
import LatestSection from '../components/LatestSection';

const Orders = () =>
  <div className='ordersContainer'>
    <Header pageTitle='판매현황' />
    <div className='mainContainer'>
      <h2>실시간 판매현황(구현중)</h2>
    </div>
    <div>
    <LatestSection /> 
    </div>
  </div>;

export default Orders;