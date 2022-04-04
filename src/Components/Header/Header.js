import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav className='bg-gray-600 text-center text-purple-400  p-3'>
                <Link className='m-1 font-bold hover:text-purple-500 bg-gray-100 p-1 rounded hover:bg-gray-200' to="/home">HOME</Link>
                <Link className='m-1 font-bold hover:text-purple-500 bg-gray-100 p-1 rounded hover:bg-gray-200' to="/review">REVIEWS</Link>
                <Link className='m-1 font-bold hover:text-purple-500 bg-gray-100 p-1 rounded hover:bg-gray-200' to="/dashboard">DASHBOARD</Link>
                <Link className='m-1 font-bold hover:text-purple-500 bg-gray-100 p-1 rounded hover:bg-gray-200' to="/blogs">BLOGS</Link>
            </nav>
        </div>
    );
};

export default Header;