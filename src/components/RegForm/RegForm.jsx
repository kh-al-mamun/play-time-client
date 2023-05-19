import React from "react";

export default function Registration() {
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <img src="logo.svg" alt="" />
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form>
                        <div>
                            <label className="label"> Name </label>
                            <div className="flex flex-col items-start">
                                <input type="text" className="input" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="label" > Email </label>
                            <div className="flex flex-col items-start">
                                <input type="email" className="input" />
                            </div>
                        </div>


                        <div className="mt-4">
                            <label className="label" > Password </label>
                            <div className="flex flex-col items-start">
                                <input type="password" className="input" />
                            </div>
                        </div>

                        <a href="#" className="text-xs text-purple-600"> Forget Password? </a>

                        <div className="flex items-center mt-4">
                            <button className="button"> Register </button>
                        </div>

                    </form>


                    <div className="mt-4 text-grey-600">
                        Already have an account?
                        <span> <a className="text-purple-600" href="#"> Log in </a> </span>

                    </div>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>


                    <div className="my-6 space-y-2">

                        <button className="loginWith">
                            <p>Login with Google</p>
                        </button>

                        <button className="loginWith">
                            <p>Login with GitHub</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}