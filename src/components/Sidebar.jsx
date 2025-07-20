import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 h-full bg-gray-100 p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div>
                <p>Subject</p>
                <p>Difficulty</p>
            </div>
        </aside>
    );
};

export default Sidebar;