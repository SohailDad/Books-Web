import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form";


function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center py-4'>
                <div className='md:w-full md:max-w-xl w-xs'>
                    <h1 className='text-pink-500 text-2xl font-bold mt-5 text-center'>Contact</h1>
                    <form method="" onSubmit={handleSubmit(onSubmit)}>
                        <label className="px-3 py-2 border rounded-md flex items-center gap-2 mt-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow outline-none" placeholder="Full Name"
                                {...register("name", { required: true })}
                            />
                        </label>

                        {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                        <label className="px-3 py-2 border rounded-md flex items-center my-3  gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" className="grow outline-none" placeholder="Email"
                                {...register("email", { required: true })}
                            />
                        </label>

                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                        <label className="px-3 py-2 border rounded-md  flex items-center my-3 gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5Zm6 11H5V3h6v9Z" />
                                <path
                                    d="M8 12.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                            </svg>
                            <input type="number" className="grow outline-none" placeholder="Phone Number"
                                {...register("number", { required: true })}
                            />
                        </label>

                        {errors.number && <span className="text-sm text-red-500">This field is required</span>}

                        <textarea
                            placeholder="Bio"
                            className="px-3 py-2 border rounded-md outline-none textarea-lg w-full max-w-xl max-h-40 min-h-40 my-3" 
                            {...register("textarea", { required: true })}
                            >
                        </textarea>
                        {errors.textarea && <span className="text-sm text-red-500">This field is required</span>}
                        <br/>
                        <button className="btn btn-secondary">Send</button>
                    </form>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact