import React from 'react'
import { NavLink } from "react-router-dom";
import Moment from 'react-moment';

const confirmPage = formData => {
    console.log(formData)
    const { firstName, lastName, email, phone, investmentType, dateOfBirth, amount } =
        (formData.location && formData.location.formData) || {};
    return (
        <div>
            <NavLink to="/register" className='btn btn-primary'>
                Add Another Record
      </NavLink>
            <NavLink to="/" className='btn btn-primary'>
                Go Back to Main Page
</NavLink>
            <div className="form-details">
                <div>
                    <strong>First Name:</strong> {firstName}
                </div>
                <div>
                    <strong>Last Name:</strong> {lastName}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>

                <div>
                    <strong>Phone:</strong> {phone}
                </div>
                <div>
                    <strong>Investment Type:</strong> {investmentType}
                </div>
                <div>
                    <strong>Amount:</strong> {amount}
                </div>
                <div>
                    <strong>Date of Birth:</strong> <Moment format='YYYY/MM/DD'>{dateOfBirth}</Moment>
                </div>
            </div>
        </div>
    );

}

export default confirmPage
