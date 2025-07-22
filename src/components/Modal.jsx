import React, { useEffect } from 'react';
import { X } from 'react-feather';

const Modal = ({ 
  visible, 
  title, 
  description, 
  onConfirm, 
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  danger = false
}) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    
    return () => document.body.style.overflow = 'auto';
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <button 
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <p className="mt-4 text-gray-600">{description}</p>
        </div>
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-end space-x-3">
          <button 
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className={`px-4 py-2 rounded-md text-white hover:opacity-90 transition ${
              danger ? 'bg-red-600' : 'bg-blue-600'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;