import React from 'react'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div>
                        <span>Email</span>
                        <input type='email' placeholder='Enter your email'/>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login