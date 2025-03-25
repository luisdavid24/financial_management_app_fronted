import React, { useState, useCallback } from "react";
import { login, register } from './api'
import "./Login.css";

export default function Login({ setUser }) {
  const initialFormState = { username: "", password: "", name: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      try {
        const user = isLogin
          ? await login(formData.username, formData.password)
          : await register(formData.name, formData.username, formData.password);
        
        setUser(user);
        setFormData(initialFormState); // 🔹 Limpia los campos después de enviar
      } catch (err) {
        setError(err.response?.data?.error || "Error");
      }
    },
    [formData, isLogin, setUser]
  );

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create an account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
