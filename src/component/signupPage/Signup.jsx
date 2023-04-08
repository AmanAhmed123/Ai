import React from "react"
import { Link } from 'react-router-dom';
import SignupForm from "./SignupForm"
export default function Signup() {
    return (
        <div className="login-page vw-100 vh-100 position-relative d-flex justify-content-center align-items-center">
            <header className="login-header position-absolute d-flex justify-content-between align-items-center top-0 left-0 w-100 text-white px-4">
                <p className="py-3 text-white">chat g6</p>
                <div className="d-flex align-items-center gap-3">
                    <button className="form-Btn">
                        <Link to="/login" className="text-decoration-none text-white">
                            Login
            </Link>
                    </button>
                </div>
            </header>
            <div className="container">

                <div className="row justify-content-center w-100 m-0">
                    <div className="col-10 col-sm-6 col-lg-4 p-0 ">
                        <div className="login-card ">
                            <h2 className="text-white mb-4">Signup</h2>
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}