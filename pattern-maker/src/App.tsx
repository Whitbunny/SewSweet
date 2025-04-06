import { useState } from 'react';
import './App.css';  // Assuming your custom CSS will be here
import Auth from './Components/Auth';  // Authentication component
import PatternPreview from './Components/PatternPreview';  // Preview component for patterns
import Sidebar from './Components/Sidebar';  // Sidebar with drawing tools
import ExportButtons from './Components/exportButtons';  // Component for export options
import UploadPattern from './Components/UploadPattern';  // Component to upload existing patterns
import PatternCanvas from './Components/patternCanvas';  // Main pattern canvas component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [canvasData, setCanvasData] = useState<any>(null);  // To store canvas data

  // Handlers for login and logout
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div className="app">
      {/* Header with login/logout */}
      <header>
        <h1>Sew Sweet</h1>
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Log out</button>
          ) : (
            <Auth onLogin={handleLogin} />
          )}
        </div>
      </header>

      {/* Main content section with sidebar, canvas, and export buttons */}
      <div className="main-content">
        <Sidebar />
        <div className="canvas-section">
          {/* PatternCanvas for creating patterns */}
          <PatternCanvas setCanvasData={setCanvasData} />
          {/* PatternPreview for showing the created pattern */}
          <PatternPreview canvasData={canvasData} />
        </div>

        {/* Export options for the pattern */}
        <ExportButtons canvasData={canvasData} />
      </div>

      {/* UploadPattern allows users to upload an existing pattern */}
      <UploadPattern setCanvasData={setCanvasData} />
    </div>
  );
}

export default App;
