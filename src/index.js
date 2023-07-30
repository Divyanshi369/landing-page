import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';

// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
  return(
    <div>
     <Home />
    </div>
  )
}
root.render( <App />)