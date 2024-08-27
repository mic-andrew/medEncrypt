import  { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL } from '../utils';
import propTypes from 'prop-types';

const AddDoctorModal = ({ isOpen, onClose, onDoctorAdded }) => {
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    department: '',
    specialty: '',
    experience: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/doctors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDoctor),
      });
      const data = await response.json();
      onDoctorAdded(data);
      onClose();
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Add New Doctor</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleAddDoctor}>
          {Object.keys(newDoctor).map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block text-gray-700 text-sm font-bold mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={key === 'experience' ? 'number' : 'text'}
                id={key}
                name={key}
                value={newDoctor[key]}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorModal;

AddDoctorModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onDoctorAdded: propTypes.func.isRequired,
}