// src/components/AddDiagnosisModal.js
import  { useState } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const AddDiagnosisModal = ({ isOpen, onClose, onAddDiagnosis, patientName, isLoading }) => {
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDiagnosis(diagnosis);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-semibold mb-4">Add Diagnosis for {patientName}</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="3"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter diagnosis here..."
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <ReactLoading type="spin" color="#ffffff" height={20} width={20} />
              ) : (
                'Add Diagnosis'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddDiagnosisModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddDiagnosis: PropTypes.func.isRequired,
  patientName: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default AddDiagnosisModal;