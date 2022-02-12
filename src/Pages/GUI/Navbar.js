import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../Redux/Actions/authActions';

export const Navbar = () => {

    const {name, isAuthenticated} = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginLogout = () => {
        isAuthenticated ? dispatch(startLogout()) :  navigate('/auth/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <span className="navbar-brand">Beer App</span>
            </div>
            {
                isAuthenticated && <div className="n-name">{name}</div>
        
            }
            <button
                onClick={handleLoginLogout}
                className={`btn me-2 + ${isAuthenticated ? 'btn-outline-danger' :  'btn-outline-success'}`}
            >
                {isAuthenticated ? 'Logout' :  'Login'}
            </button>
        </nav>
    )
}