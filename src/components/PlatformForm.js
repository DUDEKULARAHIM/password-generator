import React, { useState } from "react";
import "./PlatformForm.css";

const PlatformForm = ({ platform }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="platform-card">
      {/* Platform Name */}
      <h3 className="platform-title">{platform}</h3>

      {/* Username */}
      <div className="input-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder=""
        />
        <span className="input-label">Username</span>
      </div>

      {/* Password */}
      <div className="input-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
        />
        <span className="input-label">Password</span>
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
};

export default PlatformForm;
