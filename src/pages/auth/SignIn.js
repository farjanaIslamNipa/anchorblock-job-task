import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo-dark.svg'
import Input from '../../components/app/Input';
import Button from '../../components/app/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../app/hook';
import {useSignInUserMutation} from '../../features/auth/authApi';
import {setUser} from '../../features/auth/authSlice';
import loader from '../../assets/images/loading.gif'

const SignIn = () => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [notFoundError, setNotFoundError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const [signInUser, {data, isLoading, isError, error, isSuccess}] = useSignInUserMutation();

  const proceedToSignIn = (e) => {
    e.preventDefault()
    signInUser({ ...formData });
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ token: data.token }));
      navigate("/");
      localStorage.setItem("token", data.token);
    }
  })

 
// Handling validation error
  useEffect(() => {
    // Set email error
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = (email) => {
        return emailPattern.test(email);
      }

    if(isError && error?.data?.error === 'Missing email or username'){
      setEmailError(error.data.error)
    }
    if(formData?.email !== ''){
      if(!isValidEmail(formData?.email)){
        setEmailError('Invalid email format')
      }else{
        setEmailError('')
      }
    }

    // Set password error
    if(isError && error?.data?.error === 'Missing password'){
      setPasswordError(error.data.error)
    }
    if(formData?.password !== ''){
      setPasswordError('')
    }

    // User not found error
    if(isError && error?.data?.error === 'user not found'){
      setNotFoundError('user not found')
    }
  }, [isError, error, emailError, passwordError, formData])


  return (
    <div className='bg-white h-screen flex items-center justify-center w-full'>
      <div className='w-full'>
        <div className="bg-white max-w-[320px] xs:max-w-[400px] sm:max-w-[444px] mx-auto pt-[54px] pb-16 px-5  xs:px-10 sm:px-[62px] border border-[#EEE] rounded-2xl shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_20px_24px_-4px_rgba(16,24,40,0.08)]">
        <div className="flex gap-[10px] mb-[22px]">
            <img className='h-11 w-[50px]' src={logo} alt="Stack Logo" />
            <h1 className='text-defaultGray text-[28px] font-bold'>Stack</h1>
          </div>
          <p className='text-dark text-xl leading-6 font-semibold'>Sign in to join with Stack</p>
          <div className="mt-[52px]">
            {notFoundError && <p className='text-[#F04438] pb-1 capitalize text-center'>{ notFoundError }</p>}
            <form onSubmit={proceedToSignIn}>
              <div className="mb-5">
                <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Email</label>
                <Input 
                type={'text'}
                name={'email'}
                error={emailError}
                handleChange={handleInputChange}
                inputValue={formData.email} 
                placeholder={'Enter Email'} 
                />
                {emailError && <p className='text-[#F04438]'>{ emailError }</p>}
                
              </div>
              <div className="mb-5">
                <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Password</label>
                <Input 
                type={'password'}
                name={'password'}
                error={passwordError}
                handleChange={handleInputChange}
                inputValue={formData.password} 
                placeholder={'Enter Password'} 
                />
                {passwordError && <p className='text-[#F04438]'>{ passwordError }</p>}
              </div>
              <div className="mt-[17px] mb-8 mx-auto max-w-[320px]">
                <Button type={'submit'}>
                  {isLoading ? 
                  <img src={loader} alt='loader' className='h-5' />
                  : 
                  'Sign In'}
                  </Button>
              </div>
              <div className='text-lightGray text-base font-medium'>Already have an account? <Link to="/sign-up" className='text-[#377DFF]'>Sign Up</Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;