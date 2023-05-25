import React, { useEffect, useState } from "react";

const Dropdown = ({ handleCheckboxChange, agreement, setAgreement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };
  
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="dropdown-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          Filter
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu"
        >
          <div className="py-1" role="none">
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onChange={handleChange}
              onClick={() => handleCheckboxChange("newPro")}
            >
              <input id="newPro" type="checkbox" className="mr-[10px]" />
              <label htmlFor="newPro">New Prototype</label>
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onChange={handleChange}
              onClick={() => handleCheckboxChange("runPro")}
            >
              <input id="runPro" type="checkbox" className="mr-[10px]" />
              <label htmlFor="runPro">Run Prototype</label>
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onChange={handleChange}
              onClick={() => handleCheckboxChange("visit")}
            >
              <input id="visit" type="checkbox" className="mr-[10px]" />
              <label htmlFor="visit">Visit Amount</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
