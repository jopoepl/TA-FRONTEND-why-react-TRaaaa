import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './components/button'
import {size, type} from './btninfo'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button size={size.LARGE}/>
    <Button type={type.SECONDARY} size={size.MEDIUM}/>
    <Button type={type.TERTIARY} size={size.SMALL}/>
    <Button disabled/>
    <Button type={type.SECONDARY} size={size.MEDIUM} onClickHandler={() => alert(`HELLO`)}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
