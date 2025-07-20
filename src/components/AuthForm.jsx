// components/AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit, fields, buttonText, footerText, footerLink, footerLinkText }) => {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((field) => [field.name, '']))
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    onSubmit(e, formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center capitalize">{type}</h2>

        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          {footerText}{' '}
          <a href={footerLink} className="text-blue-500 hover:underline">
            {footerLinkText}
          </a>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
