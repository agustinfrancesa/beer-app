import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Login } from '../GUI/Login'
import { Register } from '../GUI/Register'
import { useSelector } from 'react-redux';

export const AuthRouter = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector( state => state.auth );
    const handleBack = () => {
        navigate('/beer-app/');
    };
    return (
        isAuthenticated
            ?
            <Navigate to="/beer-app/" />
            :
            (<div className='ar-main'>
                <div className='ar-box-container'>
                    <div className='ar-back' onClick={handleBack}>X</div>
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<Navigate to="login" replace="true" />} />
                    </Routes>
                </div>
            </div>)
    );
}
