import React from 'react'
import { NavLink } from "react-router-dom";

const confirmPage = formData => {
    console.log(formData)
    const { firstName, lastName, email, phone, investmentType, dateOfBirth, amount } =
        (formData.location && formData.location.formData) || {};
    return (
        <div>
            <NavLink to="/register" activeClassName="active">
                Add Another Record
      </NavLink>
            <NavLink to="/" activeClassName="active">
                Go Back to Main Page
</NavLink>
            <div className="form-details">
                <div>
                    <strong>Username:</strong> {firstName}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>
                <div>
                    <strong>City:</strong> {lastName}
                </div>
                <div>
                    <strong>Phone:</strong> {phone}
                </div>
            </div>
        </div>
    );

}

export default confirmPage
