import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white rounded-md px-3.5 py-2.5 text-l font-semibold shadow-sm ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
