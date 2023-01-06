import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home';
import Pages from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/PdfViewerComponent';
import RectangleSelector from './components/home';
import MyPdf from './components/pages';
import PdfViewerComponent from './components/PdfViewerComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Home/>
    {/* <BrowserRouter> */}
    {/* <MyPdf> */}
    {/* <App/> */}
    {/* <Home/>
    </MyPdf> */}
    </BrowserRouter>
    {/* <Pages/> */}
     
    {/* <App /> */}
     
  
    {/* <Test/>
    */}
   {/* <RectangleSelector /> */}
    
     {/* </BrowserRouter> */}
  </React.StrictMode>
);


