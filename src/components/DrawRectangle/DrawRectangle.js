import './DrawRectangle.css';
import {useEffect, useRef, useState} from 'react';

const DrawRectangle = () => {

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
            context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
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
    
    const stopDrawingRectangle = () => {
        contextRef.current.fillRect(startX.current,startY.current,rectWidht,rectHeight)
        setRectangles(rectangles => [...rectangles, {
            x: startX.current,
            y: startY.current,
            width: rectWidht,
            height: rectHeight
          }]);
        setIsDrawing(false);
       
        arr.push(startX.current);
        arr.push(startY.current);
        arr.push(rectWidht)
        arr.push(rectHeight)
        console.log(arr)
       

    };

    return (
        <div>
            <canvas className="canvas-container-rect"
                ref={canvasRef}
                onMouseDown={startDrawingRectangle}
                onMouseMove={drawRectangle}
                onMouseUp={stopDrawingRectangle}
                //onMouseLeave={stopDrawingRectangle}  
                 >
            </canvas>
        </div>
    )
}

export default DrawRectangle;