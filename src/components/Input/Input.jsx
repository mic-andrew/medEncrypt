import PropTypes from "prop-types";

const Input = ({ id, name, type, placeholder, value, onChange, icon: Icon, label }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full ${Icon ? 'pl-10' : 'pl-3'} sm:text-sm border-gray-300 rounded-md py-2`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
};

export default Input;