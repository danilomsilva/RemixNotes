import React from 'react';

const Input = ({ label, placeholder, type, id, name }) => {
  const isTextArea = type === 'textarea';
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-white/75" htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="rounded-lg p-5 focus:outline-none focus-visible:ring"
          rows="8"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="rounded-lg p-5 focus:outline-none focus-visible:ring"
        />
      )}
    </div>
  );
};

export default Input;
