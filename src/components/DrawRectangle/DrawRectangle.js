import './DrawRectangle.css';
import {useEffect, useRef, useState} from 'react';

const DrawRectangle = (props) => {

    let arr=[];
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    
    const [isDrawing, setIsDrawing] = useState(false);
    const [rectangles, setRectangles] = useState([]);
    // const a={};const b={};
    
    const canvasOffSetX = useRef(null);
    const canvasOffSetY = useRef(null);
    const startX = useRef(null);
    const startY = useRef(null);

    useEffect(() => {
       
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 2;
        contextRef.current = context;

        const canvasOffSet = canvas.getBoundingClientRect();
        canvasOffSetX.current = canvasOffSet.top;
        canvasOffSetY.current = canvasOffSet.left;
        
        rectangles.forEach(rectangle => {
            context.fillStyle = "rgba(255, 170, 102, 0.5)"
            context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            // context.fillStyle = "rgba(255, 255, 255, 0.5)"
          });
        
      
      
      
        context.save()
       
    }, [rectangles]);
    
    const startDrawingRectangle = ({nativeEvent}) => {
       
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();

        startX.current = nativeEvent.clientX - canvasOffSetX.current;
        startY.current = nativeEvent.clientY - canvasOffSetY.current;

        setIsDrawing(true);
        // a = startX
        // b= startY
        // arr.push(startX);
        // arr.push(startY);

        // console.log(a)
        // console.log(b)
    };
    var rectWidht;
    var rectHeight;
    const drawRectangle = ({nativeEvent}) => {
        if (!isDrawing) {
            contextRef.current.save()
            contextRef.current.restore()
            return;
        }
  
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();

        const newMouseX = nativeEvent.clientX - canvasOffSetX.current;
        const newMouseY = nativeEvent.clientY - canvasOffSetY.current;

        rectWidht = newMouseX - startX.current;
        rectHeight = newMouseY - startY.current;
        
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        contextRef.current.strokeRect(startX.current, startY.current, rectWidht, rectHeight);
    };
    const show = () => {
        
        return (
            <h1  style={{position:'absolute',top:'10px',right:'20px'}}>
                {arr}
            </h1>
          );
    
        }
    const stopDrawingRectangle = () => {
        
        // contextRef.current.fillRect(startX.current,startY.current,rectWidht,rectHeight)
        setRectangles(rectangles => [...rectangles, {
            x: startX.current,
            y: startY.current,
            width: rectWidht,
            height: rectHeight
          }]);
        setIsDrawing(false);
       
        arr.push(startX.current);
        arr.push(startY.current);
        arr.push(rectWidht);
        arr.push(rectHeight);
        <h1 id='a' style={{position:'absolute',top:'10px',right:'20px'}}>{arr[0]}</h1>
        
        console.log(arr)
        return (
            <>
              {/* Your JSX code goes here */}
              { show() }
            </>
          );
       
       

    };

    return (
        
        <div {...props}>
           
            <canvas className="canvas-container-rect"
                ref={canvasRef}
                onMouseDown={startDrawingRectangle}
                onMouseMove={drawRectangle}
                onMouseUp={stopDrawingRectangle}
        
                //onMouseLeave={stopDrawingRectangle}  
                 >
                    <div></div>
                    
                     
            </canvas>
            { show() } 
           
        </div>
    )
}

export default DrawRectangle;