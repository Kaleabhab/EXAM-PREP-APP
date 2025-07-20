import React from 'react';

const AnswerOption = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={`p-2 border rounded cursor-pointer ${isSelected ? 'bg-blue-100' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default AnswerOption;
