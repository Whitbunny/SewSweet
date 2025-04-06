// src/components/AvatarCreation.tsx
import React, { useState } from "react";

interface AvatarCreationProps {
  setAvatarData: React.Dispatch<React.SetStateAction<any>>;
}

const AvatarCreation: React.FC<AvatarCreationProps> = ({ setAvatarData }) => {
  const [avatarName, setAvatarName] = useState<string>("");
  const [bodyMeasurements, setBodyMeasurements] = useState({
    bust: 34,
    waist: 28,
    hips: 36,
  });

  const handleSaveAvatar = () => {
    // Here you would add logic to save or send the avatar data
    setAvatarData({
      name: avatarName,
      measurements: bodyMeasurements,
    });
    console.log("Avatar saved:", avatarName, bodyMeasurements);
  };

  return (
    <div className="avatar-creation">
      <h2>Create Avatar</h2>
      <div>
        <label>Avatar Name:</label>
        <input
          type="text"
          value={avatarName}
          onChange={(e) => setAvatarName(e.target.value)}
        />
      </div>

      <div>
        <label>Bust Measurement (in inches):</label>
        <input
          type="number"
          value={bodyMeasurements.bust}
          onChange={(e) =>
            setBodyMeasurements({ ...bodyMeasurements, bust: +e.target.value })
          }
        />
      </div>

      <div>
        <label>Waist Measurement (in inches):</label>
        <input
          type="number"
          value={bodyMeasurements.waist}
          onChange={(e) =>
            setBodyMeasurements({ ...bodyMeasurements, waist: +e.target.value })
          }
        />
      </div>

      <div>
        <label>Hip Measurement (in inches):</label>
        <input
          type="number"
          value={bodyMeasurements.hips}
          onChange={(e) =>
            setBodyMeasurements({ ...bodyMeasurements, hips: +e.target.value })
          }
        />
      </div>

      <button onClick={handleSaveAvatar}>Save Avatar</button>
    </div>
  );
};

export default AvatarCreation;
