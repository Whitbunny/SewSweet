// src/components/ExportButtons.tsx
import React from "react";

interface ExportButtonsProps {
  canvasData: any;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ canvasData }) => {
  const handleExport = (format: string) => {
    if (!canvasData) return;
    // Implement exporting logic here
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="export-buttons">
      <button onClick={() => handleExport("SVG")}>Export as SVG</button>
      <button onClick={() => handleExport("PDF")}>Export as PDF</button>
      <button onClick={() => handleExport("DXF")}>Export as DXF</button>
    </div>
  );
};

export default ExportButtons;
