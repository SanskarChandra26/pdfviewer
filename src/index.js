import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Pages from './components/pages';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/PdfViewerComponent';
import RectangleSelector from './components/home';
import MyPdf from './components/pages';
import PdfViewerComponent from './components/PdfViewerComponent';
import DrawRectangle from './components/DrawRectangle/DrawRectangle';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     
     
    <BrowserRouter>
    {/* <MyPdf> */}
    
    <div style={{position: "relative"}}>
       
      <DrawRectangle style={{position: "absolute", height: "500 vh", width: "100%", zIndex: 100}}/>
      {/* <Home/> */}
      <MyPdf style={{position: "absolute", overflow: "auto"}}/> 
    </div>
    </BrowserRouter>
    {/* <Pages/> */}
     
    {/* <App /> */}
     
  
    {/* <Test/>
    */}
   {/* <RectangleSelector /> */}
    
     {/* </BrowserRouter> */}
  </React.StrictMode>
);


