import React from 'react';

const SubjectCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer" onClick={onClick}>
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SubjectCard;