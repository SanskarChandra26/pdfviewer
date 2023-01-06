import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import '../App.css';
import DrawRectangle from './DrawRectangle/DrawRectangle';
function Mypdf() {
   
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <Document file="w.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
      </header> */}
      <center>
        <div>
        
          <Document file="w.pdf " onLoadSuccess={onDocumentLoadSuccess}>
        
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <DrawRectangle>
                <Page 

                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
                </DrawRectangle>
              )
            )}
            
          </Document>
          
        </div>
      </center>
    </div>
  );
  
 
}

export default Mypdf;