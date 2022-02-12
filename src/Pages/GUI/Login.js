import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../Redux/Actions/authActions';
import { useForm } from '../../Utilitarys/Hooks/useForm';

export const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });


  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className='ar-title'>Login</h3>

      <form
        onSubmit={handleLogin}
        className='animate__animated animate__fadeIn animate__faster'
      >


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

        <button
          className='btn ar-btn btn-block'
          type='submit'
           disabled={loading}
        >
          Login
        </button>


        <div className='ar-social-networks'>


          <div
            className="google-btn"
            onClick={handleGoogleLogin}
            >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>

            <p className="btn-text">
              <b>Sign in with google</b>
            </p>

          </div>

        </div>


        <Link className='ar-link' to='/auth/register'>Create new account</Link>


      </form>
    </>
  )
}