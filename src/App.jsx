
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./auth/Login";
import Dashboard from "./dashboard/dashboard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
