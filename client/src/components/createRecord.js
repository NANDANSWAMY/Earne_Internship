import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addRecord } from '../actions/record';


const CreateRecord = ({ addRecord, history }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        investmentType: '',
        dateOfBirth: '',
        amount: ''
    });

    const { firstName, lastName, email, phone, investmentType, dateOfBirth, amount } = formData;

    const onChange = e =>

        setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async e => {
        e.preventDefault();
        addRecord(formData);
        history.push({
            pathname: '/confirm',
            formData
        })





    };
    return (
        <Fragment>
            <h1> Hey welcome </h1>
            <form className='register-form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='firstName'
                        value={firstName}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        name='lastName'
                        value={lastName}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='Phone Number'
                        name='phone'
                        value={phone}
                        onChange={e => onChange(e)}
                    />

                </div>
                <div className="form-group">

                    <input
                        type="date"
                        placeholder="Place of Birth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={e => onChange(e)} />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={amount}
                        onChange={e => onChange(e)}

                    />
                </div>
                <div className="form-group">
                    <select name="investmentType" value={investmentType} onChange={e => onChange(e)}>
                        <option value="0">* Select the investment plan</option>
                        <option value="Premium">Premium</option>
                        <option value="Minimum Investment">Minimum Investment</option>

                    </select>

                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>

        </Fragment>
    )
}

CreateRecord.propTypes = {
    addRecord: PropTypes.func.isRequired
}
export default connect(
    null,
    { addRecord }
)(CreateRecord);
