import React from 'react';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <>
            <header className="bg-slate-900 py-4 px-8 rounded flex-col space-y-5 md:space-y-0 md:flex-row flex justify-between items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul className="flex items-center space-x-5 text-white">
                        <li><a href="/Shop">Shop</a></li>
                        <li><a href="/Order">Order</a></li>
                        <li><a href="/Inventory">Inventory</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
