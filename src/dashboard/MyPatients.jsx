// src/components/MyPatients.js
import { useState, useEffect } from "react";
// import { FaUserInjured, FaPlus } from "react-icons/fa";
import { API_BASE_URL } from "../utils";
import AddDiagnosisModal from "./AddDiagnosisModal";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";


const MyPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddDiagnosisModal, setShowAddDiagnosisModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchMyPatients();
  }, []);

  const fetchMyPatients = async () => {
    try {
      setLoading(true);
      console.log(user);
      const response = await fetch(`${API_BASE_URL}/doctors/${user.id}/patients`);
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDiagnosis = (patient) => {
    setSelectedPatient(patient);
    setShowAddDiagnosisModal(true);
  };

  const handleDiagnosisAdded = async (diagnosis) => {
    try {
      const response = await fetch(`${API_BASE_URL}/doctors/${selectedPatient._id}/diagnosis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ diagnosis }),
      });

      if (response.ok) {
        toast.success('Diagnosis added successfully');
        // Refresh the patient list to show the updated diagnosis
        fetchMyPatients();
        setShowAddDiagnosisModal(false);
      } else {
        console.error('Failed to add diagnosis');
      }
    } catch (error) {
      console.error('Error adding diagnosis:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Patients</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(patients) && patients.length > 0 ? (
  patients.map((patient) => (
    <tr key={patient._id} className="hover:bg-gray-50">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.date}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.age}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.diagnosis || 'N/A'}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleAddDiagnosis(patient)}
          className="text-blue-600 hover:text-blue-900"
        >
          {patient.diagnosis?"Update Diagnosis":"Add Diagnosis"}
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6" className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
      No patients found.
    </td>
  </tr>
)}

            </tbody>
          </table>
        </div>
      )}

      <AddDiagnosisModal
        isOpen={showAddDiagnosisModal}
        onClose={() => setShowAddDiagnosisModal(false)}
        onAddDiagnosis={handleDiagnosisAdded}
        patientName={selectedPatient?.name}
      />
    </div>
  );
};

export default MyPatients;