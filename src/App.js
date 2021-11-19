import React from 'react'
import Time from './components/Time'
import Weather from './components/Weather'
import Date from './components/Date'
import Quote from './components/Quote'

function App() {
  return (
    <div>
      <Weather />
      <Time />
      <Date />
      <Quote />
    </div>
  );
}

export default App;
