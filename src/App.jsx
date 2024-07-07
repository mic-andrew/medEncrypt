
import { Route, Routes } from "react-router";
import Login from "./auth/Login";
import Dashboard from "./dashboard/dashboard";
import './index.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
