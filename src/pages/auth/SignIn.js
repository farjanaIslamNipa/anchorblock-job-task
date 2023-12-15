import React from 'react';
import logo from '../../assets/images/logo-dark.svg'
import Input from '../../components/app/Input';
import Button from '../../components/app/Button';
import {Link} from 'react-router-dom';

const SignIn = () => {
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
            <div className="mb-5">
              <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Email</label>
              <Input placeholder={'Enter Email'} />
            </div>
            <div className="mb-5">
              <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Password</label>
              <Input placeholder={'Enter Password'} />
            </div>
            <div className="mt-[17px] mb-8 mx-auto max-w-[320px]">
              <Button>Sign In</Button>
            </div>
            <div className='text-lightGray text-base font-medium'>Already have an account? <Link to="/sign-up" className='text-[#377DFF]'>Sign Up</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;