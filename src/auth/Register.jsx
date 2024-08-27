import  { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserMd, FaUserCog, FaUserInjured, FaHospital, FaIdCard } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AUTH_BASE_URL, DOCTORS_DEPARTMENTS as DEPARTMENTS } from "../utils";
import Input from "../components/Input/Input";



function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialty: "",
    licenseNumber: "",
    department: "",
    employeeId: "",
  });
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("patient");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("userType");
    if (type && ["patient", "doctor", "admin"].includes(type)) {
      setUserType(type);
    } else {
      setUserType("patient");
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${AUTH_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userType }),
      });
      const data = await response.json();


      if (data?.message?.includes("successful")) {
        toast.success(data?.message || "Registration successful");
        navigate("/");
      } else {
        toast.error(data?.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderUserTypeFields = () => {
    switch (userType) {
      case "doctor":
        return (
          <>
          <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a department</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <Input
            id="specialty"
            name="specialty"
            type="text"
            placeholder="e.g., Pediatric Cardiology"
            value={formData.specialty}
            onChange={handleChange}
            icon={FaUserMd}
            label="Specialty"
          />
          <Input
            id="licenseNumber"
            name="licenseNumber"
            type="text"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={handleChange}
            icon={FaIdCard}
            label="License Number"
          />
          <Input
            id="experience"
            name="experience"
            type="number"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            icon={FaHospital}
            label="Years of Experience"
          />
        </>
        );
      case "admin":
        return (
          <Input
            id="employeeId"
            name="employeeId"
            type="text"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            icon={FaUserCog}
            label="Employee ID"
          />
        );
      case "patient":
        return (
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            icon={FaUserInjured}
            label="Date of Birth"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new {userType} account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleRegister}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              icon={FaUser}
              label="Full Name"
            />

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              icon={FaEnvelope}
              label="Email address"
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              icon={FaLock}
              label="Password"
            />

            {renderUserTypeFields()}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;