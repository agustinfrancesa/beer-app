import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { BeerRouter } from './BeerRouter';
import { Navbar } from '../GUI/Navbar';
import { useDispatch } from 'react-redux';
import { firebase } from '../../Data/DataBase/firebase-config'
import { login } from '../../Redux/Actions/authActions';
import {startLoadingBeers } from '../../Redux/Actions/beerActions';
import { startLoadDrinks } from '../../Redux/Actions/drinkActions';
// import {loadBeers} from '../../Data/Selectors/loadBeers'



export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [loadingInfo, setloadingInfo] = useState(true);

    

    useMemo(async () => await dispatch(startLoadingBeers()).then(() => {
        setloadingInfo(false)
    }), [dispatch]);

    // useEffect(() => {
    //     dispatch(startLoadingBeers()).then(() =>{
    //         setloadingInfo(false)
    //     });
    // }, [loadingInfo, setloadingInfo, dispatch]);


    useEffect(() => {

        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                await dispatch(startLoadDrinks());
            }
            setChecking(false);
        });

    }, [dispatch, setChecking]);






    if (checking || loadingInfo) {
        return (
            <div className="spinner-container">
                {/* TODO  */}
                <div className="orbit-spinner">
                    <div className="orbit"></div>
                    <div className="orbit"></div>
                    <div className="orbit"></div>
                </div>
            </div>
        );
    }
    return (
        <div className='ar-main-app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/*"
                        element={
                            <AuthRouter />
                        } />

                    <Route path="/*"
                        element={
                            <>
                                <Navbar />
                                <BeerRouter />
                            </>
                        } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

