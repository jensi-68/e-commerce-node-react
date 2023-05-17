import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSubMenu = (index) => {
    // setShowSubMenu(!showSubMenu);
    // const isOpen = showSubMenu.includes(index);
    if (showSubMenu ===index) {
        setShowSubMenu(null);
    } else {
        setShowSubMenu(index);
    }
  };

  const menuItems = [
    { title: 'dashboard', path: '/' },
    { title: 'products', subMenuItems: [{ title: 'view products', path: '/ViewProducts' }, { title: 'Add products', path: '/AddProduct' }] },

    // Add more menu items as needed
  ];

  return (
    <div className="flex h-screen fixed top-0 left-0">
    <div className="bg-gray-800 text-white w-60">
      <div className="p-4">
        <h1 className="text-lg font-semibold">Sidebar</h1>
      </div>
      <ul className="text-base">
        {menuItems.map((menuItem, index) => (
          <li className="px-4 py-3 hover:bg-gray-700" key={index}>
            {menuItem.subMenuItems ? (
              <div className="relative">
                <button
                  onClick={() => toggleSubMenu(index)}
                  className="flex items-center w-full focus:outline-none"
                >
                  <span>{menuItem.title}</span>
                  <svg
                    className={`ml-2 h-4 w-4 right-0 absolute transform ${
                        showSubMenu === index ? 'rotate-90' : ''
                    } transition-transform duration-200`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showSubMenu === index && (
                  <ul className="pl-8 mt-1">
                    {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                      <li className="px-4 py-3 hover:bg-gray-700" key={subIndex}>
                        <Link to={subMenuItem.path}>{subMenuItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={menuItem.path}>{menuItem.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
   
  </div>
  );
};

export default Sidebar;