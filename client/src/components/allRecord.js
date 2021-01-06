import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../actions/record'
import { NavLink } from "react-router-dom";

const Records = ({ getProfiles, allProfiles: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles()

    }, [getProfiles])
    console.log(profiles)
    const renderTable = () => {
        return profiles.map((profile, index) => {
            const { firstName, lastName, email, phone, investmentType, dateOfBirth, amount } = profile
            return (
                <tr key={index}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{investmentType}</td>
                    <td>{phone}</td>
                    <td>{dateOfBirth}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1>Nothing at the moment</h1>
            <table>

                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email </td>
                        <td> Investment Type</td>
                        <td>Phone </td>
                        <td>Date of Birth</td>
                    </tr>
                    {renderTable()}
                </tbody>
            </table>
            <NavLink to="/" activeClassName="active">
                Go Back
      </NavLink>

        </div>
    )
}
Records.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    allProfiles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    allProfiles: state.record
});

export default connect(
    mapStateToProps,
    { getProfiles })
    (Records)
