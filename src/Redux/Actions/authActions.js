import Swal from 'sweetalert2'
import { types } from "../Types/types";
import {
    googleAuthProvider,
    firebase,
} from '../../Data/DataBase/firebase-config'
import { finishLoading, startLoading } from "./guiActions";
// import { startLogoutCleaning } from './notes';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
})


export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: error.message,
                })
            });
    }
};

export const startRegisterWithPasswordEmail = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));

            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: error.message
                })
            })
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
};

export const login = (uid, displayName) => (
    {
        type: types.aLogin,
        payload: {
            uid,
            displayName
        }
    });

export const startLogout = () => {
    return async (dispatch, getState) => {
        const { name } = getState().auth;

        await firebase.auth().signOut();
        Toast.fire({
            icon: 'success',
            title: `Bye ${name}`
        });
        dispatch(logout());
        // dispatch(startLogoutCleaning());
    }
};


export const logout = () => (
    {
        type: types.aLogout
    }
);