import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorBox from './color'
import Colors from './colors.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className="container">
      {Colors.gray.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.red.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.grape.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.violet.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.indigo.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.cyan.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.teal.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  <section className="container">
      {Colors.green.map((color)=> 
    <ColorBox color={color} />
  )}
  </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
