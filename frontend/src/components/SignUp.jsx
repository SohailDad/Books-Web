import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function SignUp() {
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">SignUp</h3>
                         {/* Full Name */}
                         <div className='mt-4 space-y-2'>
                            <span>Full Name</span>
                            <br />
                            <input type='text' placeholder='Enter your Full Name'
                                className='w-80 px-3 py-1 border rounded-full outline-none'
                            />
                        </div>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-full outline-none'
                            />
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type='password' placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-full outline-none'
                            />
                        </div>
                        {/* Button */}
                        <div className='flex justify-around mt-4 items-center'>
                        <button className='bg-pink-500 rounded-md p-2 text-white hover:bg-pink-600 duration-300'>SignUp</button>
                        <p>
                            Have account?<button className='underline text-blue-700'
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                            >Login</button>
                            <Login/>
                        </p>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp