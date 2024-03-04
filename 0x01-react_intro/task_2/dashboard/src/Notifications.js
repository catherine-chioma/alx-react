import React from 'react';
import './Notifications.css';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button style={{ float: 'absolute', top: '2px', right: '2px' }}>x</button>
    </div>
  );
}
