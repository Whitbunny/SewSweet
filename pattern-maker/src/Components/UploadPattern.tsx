// src/components/UploadPattern.tsx
import React, { useState } from "react";

interface UploadPatternProps {
  setCanvasData: React.Dispatch<React.SetStateAction<any>>;
}

const UploadPattern: React.FC<UploadPatternProps> = ({ setCanvasData }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (result) {
          setCanvasData(result); // Update canvas data with the file content
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-pattern">
      <h2>Upload Pattern</h2>
      <input type="file" onChange={handleUpload} />
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default UploadPattern;
