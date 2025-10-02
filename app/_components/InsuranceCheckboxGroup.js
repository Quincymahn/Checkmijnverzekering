import React, { useState, useRef, useEffect } from "react";

function InsuranceCheckboxGroup({
  insuranceOptions,
  selectedOptions,
  onChange,
  disabled,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = (option) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(newSelection);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const displayText =
    selectedOptions.length === 0
      ? "Maak een keuze"
      : selectedOptions.length === 1
      ? selectedOptions[0]
      : `${selectedOptions.length} verzekeringen geselecteerd`;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex items-center justify-between rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
          error
            ? "border-red-300 bg-red-50"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <span
          className={
            selectedOptions.length === 0 ? "text-slate-400" : "text-slate-700"
          }
        >
          {displayText}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg max-h-96">
          <div className="p-3 space-y-4">
            {insuranceOptions.map((group) => (
              <div key={group.label}>
                <h4 className="px-2 mb-2 text-xs font-semibold text-slate-600">
                  {group.label}
                </h4>
                <div className="space-y-1">
                  {group.options.map((option) => {
                    const isChecked = selectedOptions.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-2.5 rounded-md cursor-pointer transition-colors ${
                          isChecked
                            ? "bg-blue-50 hover:bg-blue-100"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggle(option)}
                          disabled={disabled}
                          className="w-4 h-4 text-[#1b7ced] border-gray-300 rounded focus:ring-2 focus:ring-[#1b7ced]"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer with clear button */}
          {selectedOptions.length > 0 && (
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={() => onChange([])}
                className="text-xs font-medium text-red-600 hover:text-red-800"
              >
                Selectie wissen
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InsuranceCheckboxGroup;
