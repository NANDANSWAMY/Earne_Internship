import React from 'react'
import { Link, Redirect } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Welcome to Investment Application  </h1>
            <div className='buttons'>
                <Link to='/register' className='btn btn-primary'>
                    Sign Up
                </Link>
                <Link to='/records' className='btn btn-primary'>
                    Records
            </Link>
            </div>
        </div>
    )
}

export default Landing
