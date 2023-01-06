import { useEffect, useRef } from 'react';
import PSPDFKit from "pspdfkit";

export default function PdfViewerComponent(props) {
	const containerRef = useRef(null);
    
	useEffect(() => {
		const container = containerRef.current;
	
        
		(async function () {
		
			PSPDFKit.load({
				// Container where PSPDFKit should be mounted.
				container,
				// The document to open.
				document: props.document,
				// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
				baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
			    
            });
           PSPDFKit.addEventListener("createAnnotation", (annotation) => {
  if (annotation.type === "rectangle") {
    const { x, y, width, height } = annotation.rect;
    console.log(`Rectangle created at (${x}, ${y}), width: ${width}, height: ${height}`);
  }
});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, [props.document]);
    
	

	return (
		<div
           
			ref={containerRef}
			style={{ width: '70%', height: '100vh', right:'200px'}}
		/>
        
	);
}
