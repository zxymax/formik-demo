import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Demo1} from './pages/Demo1'
import { Demo2} from './pages/Demo2'
import { Demo3} from './pages/Demo3'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}>
    <Route path="demo-1" element={<Demo1/>}/>
    <Route path="demo-2" element={<Demo2/>}/>
    <Route path="demo-3" element={<Demo3/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
