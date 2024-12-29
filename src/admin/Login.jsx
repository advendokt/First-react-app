// src/Pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {

    const handleLogin = () => {
      // Add console log to check login process
      console.log("Attempting to login...");
      
      // Perform authentication logic here
      // If successful:
      setIsAuthenticated(true);
      console.log("User logged in, authenticated:", true);
    };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Простой тест для авторизации
  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая валидация для проверки пароля и логина
    if (email === 'admin@example.com' && password === 'admin123') {
      setIsAuthenticated(true); // Авторизация успешна
      navigate('/admin'); // Перенаправление в админ панель
    } else {
      setError('Invalid credentials. Please try again.'); // Если неверные данные
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
      <h2 className="text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
