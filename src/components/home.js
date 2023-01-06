import * as React from 'react'
import { Link } from "react-router-dom";
import PdfViewerComponent from './PdfViewerComponent';
const Home = () => {
  return (
    <div >
        <h3>Documents</h3>
        <hr></hr>
        
        {/* <Link to='/view-pdf/https://arxiv.org/pdf/2212.08011.pdf'>
          <PdfViewerComponent document='https://arxiv.org/pdf/2212.08011.pdf' />
          Sample document 1.pdf
        </Link> */}
        <Link to='/view-pdf/https://arxiv.org/pdf/2212.07937.pdf'>
          <PdfViewerComponent document='https://arxiv.org/pdf/2212.07937.pdf' />
          Sample document 2.pdf
        </Link>
        <Link to='/view-pdf/https://arxiv.org/pdf/2212.07931.pdf'>
          <PdfViewerComponent document='https://arxiv.org/pdf/2212.07931.pdf' />
          Sample document 3.pdf
        </Link>
    </div>
  )
}

export default Home