import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='signin d-flex justify-content-center align-items-center p-5'>
            <div className='content'>
                <h1 className='text-center text-light'>Unlimited movies, TV shows and more.</h1>
                <h2 className='text-center text-light'>Watch anywhere. Cancel anytime.</h2>
                <form>
                    <h3 className='text-center text-light mx-auto'>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="mail-input form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button type='button' className='sign-btn btn btn-danger'>
                                <Link to='/movies' className='text-light btn-text'>GET STARTED</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
