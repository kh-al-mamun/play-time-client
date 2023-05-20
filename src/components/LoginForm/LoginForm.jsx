import React from 'react';
// import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1>
                <form className="mt-6">

                    <div className="mb-2">
                        <label className="label"> Email </label>
                        <input type="email" className="input" />
                    </div>

                    <div className="mb-2">
                        <label className="label"> Password </label>
                        <input type="password" className="input" />
                    </div>

                    <a href="#" className="text-xs text-purple-600" > Forget Password? </a>

                    <div className="mt-6">
                        <button className="button"> Login </button>
                    </div>
                    
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? 
                    <a href="#" className="font-medium text-purple-600" > Sign up </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;