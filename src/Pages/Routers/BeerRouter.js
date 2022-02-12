import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BeerList } from '../GUI/BeerList';
import { BeerDetail } from '../GUI/BeerDetail';
import { useSelector } from 'react-redux';

export const BeerRouter = () => {
    const {isAuthenticated} = useSelector( state => state.auth );
    return (
        <div className='ba-container'>
            <Routes>
                <Route path="/beer-app/*"
                    element={
                        <BeerList isAuthenticated={isAuthenticated}/>
                    } />
                <Route path="/beer-app/beer/:beerId"
                    element={
                        <BeerDetail isAuthenticated={isAuthenticated}/>
                    } />
            </Routes>
        </div>
    )
}