import React, { useState } from "react";
import "./CredentialForm.css";

const CredentialForm = () => {
  const [form, setForm] = useState({
    category: "Personal",
    platform: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.platform || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const existing =
      JSON.parse(localStorage.getItem("credentials")) || [];

    existing.push({ ...form, id: Date.now() });

    localStorage.setItem("credentials", JSON.stringify(existing));

    alert("Credential saved successfully");

    // Reset form
    setForm({
      category: "Personal",
      platform: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="credential-form">
      <h2>Add Credentials</h2>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>Personal</option>
        <option>Social Media</option>
        <option>Others</option>
      </select>

      <input
        name="platform"
        placeholder="Platform Name"
        value={form.platform}
        onChange={handleChange}
      />

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />

      {/* Password + Show/Hide */}
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span
          style={{
            position: "absolute",
            right: "12px",
            top: "10px",
            cursor: "pointer",
            fontSize: "13px",
            color: "#22d3ee",
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>

      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default CredentialForm;
