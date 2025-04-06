// src/components/Sidebar.tsx

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Tools</h3>
      <label>Brush Size</label>
      <input type="range" min="1" max="10" />
      <label>Brush Color</label>
      <input type="color" />
      <button>Undo</button>
      <button>Redo</button>
    </div>
  );
};

export default Sidebar;
