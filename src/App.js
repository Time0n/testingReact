import React from 'react';
import Navbar from './Navbar';
import './Greeter'
import Greeter from './Greeter';
import MoodToggler from './MoodToggler';
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Navbar/>
      <Greeter name="General Kenobi" age={4}/>
      <Counter></Counter>
      <Counter step={5}></Counter>
      <MoodToggler></MoodToggler>
    </div>
    
  );
}

export default App;
