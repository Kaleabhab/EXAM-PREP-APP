import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather'; // Or any icon library

const Breadcrumbs = ({ paths }) => (
  <nav className="flex items-center text-sm text-gray-600 mb-6">
    {paths.map((path, index) => (
      <React.Fragment key={index}>
        {index > 0 && <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />}
        <Link 
          to={path.url} 
          className={`hover:text-blue-600 transition-colors ${
            index === paths.length - 1 ? 'font-medium text-blue-600' : ''
          }`}
        >
          {path.name}
        </Link>
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumbs;