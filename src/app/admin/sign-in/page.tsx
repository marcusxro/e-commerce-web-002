const SignIn = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <div className='flex flex-col items-center justify-center w-full lg:w-1/3 bg-white rounded-lg shadow-xl p-8'>
                <h1 className='text-3xl font-semibold text-black mb-6 text-center'>Admin Sign In</h1>

                <form className='w-full'>
                    {/* Email Input */}
                    <div className='flex flex-col gap-2 mb-4'>
                        <label className='text-black font-medium'>Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-full py-3 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200'
                        />
                    </div>

                    {/* Password Input */}
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='text-black font-medium'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-full py-3 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200'
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type='submit'
                        className='w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-200'
                    >
                        Sign In
                    </button>
                </form>

                {/* Additional Actions
                <div className='w-full text-center mt-6'>
                    <p className='text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <span className='text-blue-500 cursor-pointer hover:text-blue-600'>
                            Contact Support
                        </span>
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default SignIn;
