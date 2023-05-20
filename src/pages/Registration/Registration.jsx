import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../utility/hooks/useTitle';

const Registration = () => {
    useTitle('Register')
    const { createAccount, changeInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            toast.error('Passwords did not match!');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }

        const loading = toast.loading('Validating...')

        createAccount(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Account created successfully!', { id: loading });
                // verifyHandler(result.user);
                changeInfo({displayName: name, photoURL})
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, { duration: 4000, id: loading });
            })
    }



    return (
        <div className="flex flex-col items-center min-h-screen pt-5 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <Link to={"/"}>
                    <img src="logo.svg" alt="" />
                </Link>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form onSubmit={handleSignUp}>
                    <div>
                        <label className="label"> Name </label>
                        <div className="flex flex-col items-start">
                            <input type="text" name='name' className="input" required/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="label" > Email </label>
                        <div className="flex flex-col items-start">
                            <input type="email" name='email' className="input" required/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="label" > Photo URL </label>
                        <div className="flex flex-col items-start">
                            <input type="photoURL" name='photoURL' className="input" required/>
                        </div>
                    </div>


                    <div className="mt-4">
                        <label className="label" > Password </label>
                        <div className="flex flex-col items-start">
                            <input type="password" name='password' className="input" required/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="label" > Confirm Password </label>
                        <div className="flex flex-col items-start">
                            <input type="password" name='confirmPassword' className="input" required/>
                        </div>
                    </div>

                    <a href="#" className="text-xs text-purple-600"> Forget Password? </a>

                    <div className="flex items-center mt-4">
                        <button className="button"> Register </button>
                    </div>

                </form>


                <div className="mt-4 text-grey-600">
                    Already have an account?
                    <span> <Link to={'/login'} className="text-purple-600"> Log in </Link> </span>
                </div>

            </div>
        </div>
    );
};

export default Registration;