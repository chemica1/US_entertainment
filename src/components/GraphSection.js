import React from 'react';
import { 
  ComposedChart, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  AreaChart
} from 'recharts';

const DATA = [
  { month: 'Jan', sale: 125123, orders: 171282  },
  { month: 'Feb', sale: 105467, orders: 152382  },
  { month: 'Mar', sale: 86345,  orders: 256222  },
  { month: 'Apr', sale: 192567, orders: 302823  },
  { month: 'May', sale: 135836, orders: 223563  },
  { month: 'Jun', sale: 93536,  orders: 234674  },
  { month: 'Jul', sale: 182576, orders: 345143  },
  { month: 'Aug', sale: 76737,  orders: 176332  },
  { month: 'Sep', sale: 162342, orders: 223425  },
  { month: 'Oct', sale: 114764, orders: 340289  },
  { month: 'Nov', sale: 204695, orders: 426264  },
  { month: 'Dec', sale: 232687, orders: 456292  }
];

const PRODUCTS = [
  { month: 'Jan', 1: 234, 2: 178, 3: 112 },
  { month: 'Feb', 1: 325, 2: 155, 3: 161 },
  { month: 'Mar', 1: 202, 2: 145, 3: 191 },
  { month: 'Apr', 1: 228, 2: 168, 3: 111 },
  { month: 'May', 1: 347, 2: 171, 3: 114 },
  { month: 'Jun', 1: 304, 2: 158, 3: 111 }
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
	const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);
  
  return (
  	<div className="customized-tooltip-content">
    	<p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
      	{
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{color: entry.color}}>
            	{`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

class GraphSection extends React.Component {

  render() {
    return (
      <section className='graphSection'>
        <div className='row'>
          <div className='col-md-8'>
            <h2>월 매출 추이</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={DATA}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend margin={{ top: 20 }} />
                <CartesianGrid strokeDasharray='3 3' />
                <Area type='monotone' dataKey='orders' fill='#efefef' name='orders' />
                <Bar dataKey='sale' barSize={30} fill='#8BC34A' name='sale' />
              </ComposedChart>
            </ResponsiveContainer>
            
          </div>
          <div className='col-md-4'>
            <h2>기기별 매출비</h2>
            <ResponsiveContainer width="100%" height={378}>
              <AreaChart 
                data={PRODUCTS}
                stackOffset='expand'
                margin={{ top: 20, right: 20, bottom: 20, left: -20 }} >
                  <XAxis dataKey='month' />
                  <YAxis tickFormat={toPercent} />
                  <Tooltip content={renderTooltipContent}/>
                  <Area type='monotone' dataKey='1' stackId="1" stroke='#8884d8' fill='#8884d8' />
                  <Area type='monotone' dataKey='2' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                  <Area type='monotone' dataKey='3' stackId="1" stroke='#ffc658' fill='#ffc658'/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default GraphSection;