import React, { useState } from "react";
import PlatformForm from "./PlatformForm";
import "./PasswordStorage.css";

function PasswordStorage() {
  const [selectedCategory, setSelectedCategory] = useState("Personal");

  const platformCategories = {
    Personal: ["Personal"],
    "Social Media": ["Facebook", "Instagram", "Telegram", "Snapchat"],
    College: ["UMS"],
    Learning: ["Coursera", "Udemy"],
  };

  return (
    <div className="password-storage">
      <h2 className="storage-title">Password Storage</h2>

      {/* Category Buttons */}
      <div className="platform-buttons">
        {Object.keys(platformCategories).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Platform Forms */}
      <div className="platform-section">
        {platformCategories[selectedCategory].map((platform) => (
          <PlatformForm key={platform} platform={platform} />
        ))}
      </div>
    </div>
  );
}

export default PasswordStorage;
