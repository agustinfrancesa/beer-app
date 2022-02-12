import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithPasswordEmail } from '../../Redux/Actions/authActions';
import { setErrorAction, UnsetErrorAction } from '../../Redux/Actions/guiActions';
import { useForm } from '../../Utilitarys/Hooks/useForm';

export const Register = () => {


    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const { name, email, password, passwordConfirm } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithPasswordEmail(email, password, name));
        }

    };

    const isFormValid = () => {

        if (validator.isEmpty(name)) {
            dispatch(setErrorAction('name is invalid'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction('email is invalid'));
            return false;
        } else if (password.length < 5 || password !== passwordConfirm) {
            dispatch(setErrorAction('password is invalid of confirmartion does not match'));
            return false;
        }
        dispatch(UnsetErrorAction());
        return true;
    };

    return (
        <>
            <h3 className='ar-title'>Register</h3>

            {
                msgError &&
                (<div
                    className='ar-alert-error'>
                    {msgError}
                </div>)

            }

            <form
                className='animate__animated animate__fadeIn animate__faster'>
                <input
                    className='ar-input'
                    type='name '
                    placeholder='name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    className='ar-input'
                    type='text'
                    placeholder='email'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    className='ar-input'
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    className='ar-input'
                    type='password'
                    placeholder='confirm password'
                    name='passwordConfirm'
                    value={passwordConfirm}
                    onChange={handleInputChange}
                />

                <button
                    className='btn ar-btn btn-block'
                    type='submit'
                    onClick={(e) => handleRegister(e)}
                    disabled={loading}
                >
                    Register
                </button>


                <Link className='ar-link' to='/auth/login'>Alredy registerd</Link>


            </form>
        </>
    );
};
