import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>  
    <App />
    </BrowserRouter>
 
 </React.StrictMode>,rootElement)
})


 



