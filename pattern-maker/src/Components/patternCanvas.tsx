// src/components/PatternCanvas.tsx
import React, { useEffect, useRef } from "react";
import fabric from "fabric";

interface patternCanvasProps {
  setCanvasData: React.Dispatch<React.SetStateAction<any>>;
}

const PatternCanvas: React.FC<patternCanvasProps> = ({ setCanvasData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#fff",
    });

    canvas.isDrawingMode = true;
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.width = 2;
      canvas.freeDrawingBrush.color = "#000";
    }

    canvas.on("object:modified", () => {
      setCanvasData(canvas.toJSON());
    });

    return () => {
      canvas.dispose();
    };
  }, [setCanvasData]);

  return <canvas ref={canvasRef} id="patternCanvas" />;
};

export default PatternCanvas;
