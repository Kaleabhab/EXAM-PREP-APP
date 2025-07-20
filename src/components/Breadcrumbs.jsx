import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => (
  <nav className="text-sm text-gray-500">
    {paths.map((path, index) => (
      <span key={index}>
        {index > 0 && ' > '}
        <Link to={path.url}>{path.name}</Link>
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;