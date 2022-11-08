import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const [toggleOrders, setToggleOrders] = useState(false);

    const { state } = useContext(AppContext);
    //const {state:{cart}}=useContext(AppContext);  // Podemos destructurar las propiedades del objeto initialState definidos en el hook useInitialState
    //De esta manera nos evitamos escribir state. cada que hagamos referencia a una propiedad del objeto.

    const handleToggle = () => {
        setToggle(!toggle);
        // setToggle(prevToggle => !prevToggle) //Un tips para cuando tu próximo estado depende del estado anterior!!
        setToggleOrders(false);
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
        setToggle(false);
    }

    return (
        <>
            <nav className='nav-container'>
                <img src={menu} alt="menu" className="nav-menu" />
                <div className="navbar-left">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <ul>
                        <li>
                            <a href="/">All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furnitures</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/">Others</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                        <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                            <img
                                className="navbar-cart"
                                src={shoppingCart}
                                alt="shopping cart"
                            />
                            {state.cart.length > 0 ?
                                <div className='shopping-cart-num'>
                                    {state.cart.length}</div>
                                : null}

                            {/* //{cart.length > 0 && <div>{cart.length}</div>} //otra alternativa */}
                        </li>
                    </ul>
                </div>
            </nav>
            {toggle && <Menu />}
            {/* {toggle ? <Menu /> : null} */}

            {toggleOrders && <MyOrder />}
        </>
    )
}

export default Header