import React from 'react';

const SignIn = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            {/* Left Side (Form) */}
            <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-1/2 zpx-6 py-10'>
                <form className='w-full max-w-md'>
                    <h1 className='text-4xl font-bold text-black mb-6 text-center'>Sign In</h1>

                    <div className='flex flex-col gap-2 mb-4'>
                        <label className='text-black'>Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-full py-3 px-4 rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='text-black'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-full py-3 px-4 rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-200'
                    >
                        Sign In
                    </button>
                  <div className='my-5 w-full text-center'>
                  <p>or <span className='text-blue-500 cursor-pointer hover:text-blue-600'>Register here</span></p>
                  </div>
                </form>
            </div>

            {/* Right Side (Image/Decoration) */}
            <div className='w-full lg:w-1/2 h-[300px] lg:h-auto bg-yellow-500 rounded-t-[3rem] lg:rounded-t-none lg:rounded-l-[5rem]'>
         
            </div>
        </div>
    );
};

export default SignIn;
