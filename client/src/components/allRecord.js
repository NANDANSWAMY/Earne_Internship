import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../actions/record'
import { NavLink } from "react-router-dom";
import Moment from 'react-moment';

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
                    <td><Moment format='YYYY/MM/DD'>{dateOfBirth}</Moment></td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1 className="title">List of All Registered Users</h1>
            <table className="records">

                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email </th>
                        <th> Investment Type</th>
                        <th>Phone </th>
                        <th>Date of Birth</th>
                    </tr>
                    {renderTable()}
                </tbody>
            </table>
            <NavLink to="/" className='btn btn-primary'>
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
