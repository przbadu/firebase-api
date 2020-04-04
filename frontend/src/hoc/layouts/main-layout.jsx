import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <h1>Header</h1>
    <div style={{ float: 'left', width: '10%' }}>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/second'>Second</Link>
        </li>
      </ul>
    </div>
    <div style={{ float: 'left', width: '90%' }} className='container'>
      {props.children}
    </div>
  </div>
);
