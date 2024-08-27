
import { Route, Routes } from "react-router";
import Login from "./auth/Login";
import './index.css';
import Dashboard from "./dashboard/dashboard";
import Register from "./auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/authContext";


function App() {

  return (
    <AuthProvider>

          <ToastContainer />
          <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
    </AuthProvider>
   
  );
}

export default App;
