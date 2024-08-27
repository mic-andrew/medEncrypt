import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PatientList from "./PatientList";
import SideBar from "./SideBar";
import DashboardHome from "./DashboardHome";
import LogoutModal from "./LogoutModal";
import KAnonymity from "./KAnonymity";
import Analytics from "./Analytics";
import Settings from "./Settings";
import DoctorsDashboard from "./Doctors";
import MyPatients from "./MyPatients";

function Dashboard() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, tokens, etc.)
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar setShowLogoutModal={setShowLogoutModal} />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className=" mx-auto px-6 py-8">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="patients" element={<PatientList />} />
            <Route path="doctors" element={<DoctorsDashboard />} />

            <Route path="k-anonymity" element={<KAnonymity />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="my-patients" element={<MyPatients />} />
          </Routes>
        </div>
      </div>
      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;
