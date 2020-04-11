import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (

            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-aria">

                            <img src={logo} alt="logo missing"/>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex">
                                
                                <span className="cart-icon">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;