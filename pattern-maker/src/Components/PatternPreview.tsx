// src/components/PatternPreview.tsx
import React from 'react';

interface PatternPreviewProps {
  canvasData: any;
}

const PatternPreview: React.FC<PatternPreviewProps> = ({ canvasData }) => {
  return (
    <div className="pattern-preview">
      <h2>Pattern Preview</h2>
      <div>
        {canvasData ? (
          <div className="canvas-preview">
            <canvas id="previewCanvas" width="800" height="600" />
            {/* Logic to render canvas data can be added here */}
          </div>
        ) : (
          <p>No pattern to preview.</p>
        )}
      </div>
    </div>
  );
};

export default PatternPreview;
