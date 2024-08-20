import React, { useState } from "react";
import PropTypes from "prop-types";

const AddPatient = ({ isOpen, onClose, onAddPatient, patientCount }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    age: "",
    clinic: "",
    diagnosis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const anonymizeData = (data) => {
    const newPatientNumber = patientCount + 1;
    return {
      name: `Patient ${newPatientNumber}`,
      phone: data.phone.slice(0, 3) + "xxxx" + data.phone.slice(-4),
      date: data.date,
      age: data.age,
      clinic: data.clinic,
      diagnosis: data.diagnosis,
    };
  };

  const handleAddPatient = () => {
    const anonymizedData = anonymizeData(formData);
    onAddPatient(anonymizedData);
    setFormData({
      name: "",
      phone: "",
      date: "",
      age: "",
      clinic: "",
      diagnosis: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-[40%] shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Add Patient
          </h3>
          <form className="mt-2 text-left">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={key}
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  placeholder={
                    key === "name"
                      ? "Will be anonymized"
                      : `e.g., ${
                          key === "phone"
                            ? "1234567890"
                            : key === "date"
                            ? "Jan 2024"
                            : key === "age"
                            ? "20-39"
                            : ""
                        }`
                  }
                />
              </div>
            ))}
          </form>
          <div className="items-center px-4 py-3">
            <button
              id="cancel-btn"
              className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mb-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              id="add-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleAddPatient}
            >
              Add Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddPatient.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPatient: PropTypes.func.isRequired,
  patientCount: PropTypes.number.isRequired,
};

export default AddPatient;
