import { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const staticEmail = "test@example.com";
  const staticPassword = "password123";
  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === staticEmail && password === staticPassword) {
        alert("Login successful");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="card">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
