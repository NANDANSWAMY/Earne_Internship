import React from 'react'
import { NavLink } from "react-router-dom";
import Moment from 'react-moment';

const confirmPage = formData => {
    console.log(formData)
    const { firstName, lastName, email, phone, investmentType, dateOfBirth, amount } =
        (formData.location && formData.location.formData) || {};
    return (
        <div>

            <div className="form-details">
                <h2>Thank you for submitting your request</h2>
                <h3>You will be contacted soon. Check your email for confirmation </h3>
                <h3>Below are your submitted details</h3>
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
                    <strong>Amount $: </strong> {amount}
                </div>
                <div>
                    <strong>Date of Birth:</strong> <Moment format='YYYY/MM/DD'>{dateOfBirth}</Moment>
                </div>
            </div>
            <NavLink to="/register" className='btn btn-primary'>
                Add Another Record
  </NavLink>
            <NavLink to="/" className='btn btn-primary'>
                Go Back to Main Page
</NavLink>
        </div>
    );

}

export default confirmPage
