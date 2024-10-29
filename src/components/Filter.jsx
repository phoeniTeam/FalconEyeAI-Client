import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa6';

function Filter({ onFilterChange }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const trandformation = [
        'All',
        'Image Restore',
        'Generative Fill',
        'Object Removal',
        'Object Recolor',
        'Background Removal',
    ];

    return (
        <>
            <div className="dropdown dropdown-hover max-md:dropdown-end">
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 "
                >
                    <FaFilter className="text-grayLight w-5 h-5" />
                </div>
                {menuOpen && (
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-grayLight rounded-box z-[1] w-52 p-2 shadow"
                    >
                        {trandformation.map((item, index) => (
                            <li key={index} className="py-[1px] ">
                                <div
                                    onClick={() => {
                                        onFilterChange(item);
                                        setMenuOpen(false);
                                    }}
                                    className="hover:bg-[#131313] cursor-pointer"
                                >
                                    {item}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Filter;
