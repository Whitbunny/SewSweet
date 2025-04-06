// src/components/FabricSimulation.tsx
import React, { useState } from "react";

interface FabricSimulationProps {
  setFabricData: React.Dispatch<React.SetStateAction<any>>;
}

const FabricSimulation: React.FC<FabricSimulationProps> = ({ setFabricData }) => {
  const [fabricColor, setFabricColor] = useState<string>("#FF5733");
  const [fabricType, setFabricType] = useState<string>("Cotton");

  const handleFabricChange = () => {
    setFabricData({
      color: fabricColor,
      type: fabricType,
    });
    console.log("Fabric set to:", fabricType, fabricColor);
  };

  return (
    <div className="fabric-simulation">
      <h2>Fabric Simulation</h2>
      <div>
        <label>Fabric Type:</label>
        <select
          value={fabricType}
          onChange={(e) => setFabricType(e.target.value)}
        >
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Linen">Linen</option>
          <option value="Wool">Wool</option>
          <option value="Polyester">Polyester</option>
          <option value="Denim">Denim</option>
          <option value="Leather">Leather</option>
          <option value="Nylon">Nylon</option>
          <option value="Chiffon">Chiffon</option>
          <option value="Satin">Satin</option>
          <option value="Velvet">Velvet</option>
          <option value="Crepe">Crepe</option>
          <option value="Taffeta">Taffeta</option>
          <option value="Lace">Lace</option>
          <option value="Tweed">Tweed</option>
          <option value="Georgette">Georgette</option>
          <option value="Brocade">Brocade</option>
          <option value="Jersey">Jersey</option>
        </select>
      </div>

      <div>
        <label>Fabric Color:</label>
        <input
          type="color"
          value={fabricColor}
          onChange={(e) => setFabricColor(e.target.value)}
        />
      </div>

      <button onClick={handleFabricChange}>Apply Fabric</button>
    </div>
  );
};

export default FabricSimulation;
