// src/components/ExportOptions.tsx
import React from "react";
import fabric from "fabric";

interface ExportOptionsProps {
  canvasData: any; // Data from Fabric.js canvas
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ }) => {
  const handleExport = (format: string) => {
    const canvas = new fabric.Canvas("patternCanvas");
    switch (format) {
      case "SVG":
        const svgData = canvas.toSVG();
        const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
        const svgUrl = URL.createObjectURL(svgBlob);
        const svgLink = document.createElement("a");
        svgLink.href = svgUrl;
        svgLink.download = "pattern.svg";
        svgLink.click();
        break;
      case "PDF":
        const pdfData = canvas.toDataURL();
        // Use a library like jsPDF for exporting as PDF
        const jsPDF = require("jspdf");
        const doc = new jsPDF();
        doc.addImage(pdfData, "JPEG", 10, 10);
        doc.save("pattern.pdf");
        break;
      case "DXF":
        // DXF export logic (can use libraries or custom implementation)
        console.log("Exporting as DXF (to be implemented)");
        break;
      default:
        console.log("Unsupported format");
    }
  };

  return (
    <div className="export-options">
      <h2>Export Pattern</h2>
      <button onClick={() => handleExport("SVG")}>Export as SVG</button>
      <button onClick={() => handleExport("PDF")}>Export as PDF</button>
      <button onClick={() => handleExport("DXF")}>Export as DXF</button>
    </div>
  );
};

export default ExportOptions;
