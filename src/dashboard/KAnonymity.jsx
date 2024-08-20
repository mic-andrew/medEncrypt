import { useState } from "react";
import { FaLock } from "react-icons/fa";

const KAnonymity = () => {
  const [kValue, setKValue] = useState(2);
  const [sensitiveAttributes, setSensitiveAttributes] = useState(["diagnosis"]);
  const [quasiIdentifiers, setQuasiIdentifiers] = useState(["age", "zipcode"]);

  const handleApplyKAnonymity = () => {
    // Implement K-Anonymity logic here
    console.log(`Applying K-Anonymity with k=${kValue}`);
    console.log(`Sensitive attributes: ${sensitiveAttributes.join(", ")}`);
    console.log(`Quasi-identifiers: ${quasiIdentifiers.join(", ")}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <FaLock className="mr-2" />
        K-Anonymity Settings
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kValue"
          >
            K Value
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kValue"
            type="number"
            value={kValue}
            onChange={(e) => setKValue(parseInt(e.target.value))}
            min="2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Sensitive Attributes
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={sensitiveAttributes.join(", ")}
            onChange={(e) => setSensitiveAttributes(e.target.value.split(", "))}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quasi-identifiers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={quasiIdentifiers.join(", ")}
            onChange={(e) => setQuasiIdentifiers(e.target.value.split(", "))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleApplyKAnonymity}
          >
            Apply K-Anonymity
          </button>
        </div>
      </div>
    </div>
  );
};

export default KAnonymity;
