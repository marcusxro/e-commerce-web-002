import Image from 'next/image';
import React from 'react';
import imageHeader from '../../../../assets/auth/signin.jpg';
import logoIcon from '../../../../assets/LOGO.jpg'

const SignIn = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            {/* Left Side (Form) */}
            <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-1/2 zpx-6 py-10'>
                <form className='w-full max-w-md flex flex-col'>
                    <Image
                        src={logoIcon}
                        alt="logo"
                        width={300}
                        height={300}
                        className='mb-6 mx-auto'
                    />
                    <h1 className='text-[4.4rem] font-bold text-black mb-6 text-center'>Sign In</h1>

                    <div className='flex flex-col gap-2 mb-4'>
                        <label className='text-black text-xl'>Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-full py-3 px-4 text-black text-xl rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='text-black text-xl'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-full py-3 px-4 text-black text-xl rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <button
                        type="submit"
                        className='text-black text-xl w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-200'
                    >
                        Sign In
                    </button>
                  <div className='my-5 w-full text-center'>
                  <p>or <span className='text-blue-500 cursor-pointer hover:text-blue-600'>Register here</span></p>
                  </div>
                </form>
            </div>

            {/* Right Side (Image/Decoration) */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-auto flex justify-center items-center bg-yellow-500 
                            rounded-t-[3rem] lg:rounded-tr-none lg:rounded-br-none 
                            lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={imageHeader}
                        alt="headerOne"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
