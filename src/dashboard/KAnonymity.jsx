import { useState } from "react";
import { FaLock, FaToggleOn, FaToggleOff } from "react-icons/fa";

const KAnonymity = () => {
  const [kValue, setKValue] = useState(2);
  const [attributes, setAttributes] = useState({
    name: true,
    phone: true,
    date: false,
    age: false,
    clinic: false,
    diagnosis: false,
  });

  const handleToggle = (attribute) => {
    setAttributes((prev) => ({ ...prev, [attribute]: !prev[attribute] }));
  };

  const handleApplyKAnonymity = () => {
    const anonymizedAttributes = Object.entries(attributes)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    console.log(`Applying K-Anonymity with k=${kValue}`);
    console.log(`Anonymized attributes: ${anonymizedAttributes.join(", ")}`);
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <FaLock className="mr-2" />
        K-Anonymity Settings
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* <div className="mb-4">
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
        </div> */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Attributes to Anonymize
          </label>
          {Object.entries(attributes).map(([attribute, value]) => (
            <div
              key={attribute}
              className="flex items-center justify-between py-2"
            >
              <span className="text-gray-700">{attribute}</span>
              <button
                onClick={() => handleToggle(attribute)}
                className={`focus:outline-none ${
                  value ? "text-green-500" : "text-gray-400"
                }`}
              >
                {value ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
              </button>
            </div>
          ))}
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
