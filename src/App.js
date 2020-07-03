import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement,reset} from './actions';

function App() {

  const counter = useSelector(state => state.myCount);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(reset())}>RESET</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
