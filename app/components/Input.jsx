import React from 'react';

const Input = ({ label, placeholder, type }) => {
  const isTextArea = type === 'textarea';
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700">{label}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className="rounded-lg p-5 focus:outline-none focus-visible:ring"
          rows="8"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="rounded-lg p-5 focus:outline-none focus-visible:ring"
        />
      )}
    </div>
  );
};

export default Input;
