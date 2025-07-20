import React from 'react';

const Modal = ({ visible, title, description, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;