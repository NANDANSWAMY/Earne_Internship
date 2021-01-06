import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com'
import { NavLink } from "react-router-dom";
import { addRecord } from '../actions/record';


const CreateRecord = ({ addRecord, history }) => {
    const [isShown, setIsShown] = useState(false)
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


    const sendEmail = (formData) => {
        const { firstName, email, phone, investmentType, amount } = formData

        const v = {
            email: email,
            name: firstName,
            subject: 'Earnr Investment Plan',
            amount: amount,
            investmentType: investmentType,
            phone: phone

        }
        emailjs.send('service_rtie5xg', 'template_z7md8ti', v, 'user_tvP5Q0du16xIPr97Dqj8Y').then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))


    }

    const onSubmit = async e => {
        e.preventDefault();
        addRecord(formData);
        sendEmail(formData)
        history.push({
            pathname: '/confirm',
            formData
        })
    };
    const minVal = (investmentType) => {
        if (investmentType == "Premium") {
            console.log("yes")
            return '10000'
        } else {
            console.log("no")
            return '25000'
        }

    }
    const maxVal = (investmentType) => {
        if (investmentType == "Premium") {
            console.log("yes")
            return '250000'
        } else {
            console.log("no")
            return '250000'
        }

    }

    return (
        <Fragment>
            <h1> Enter your details to Register with Earnr </h1>
            <form className='register-form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='firstName'
                        value={firstName}
                        required
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={lastName}
                        required
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        required
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='Phone Number'
                        name='phone'
                        value={phone}
                        required
                        onChange={e => onChange(e)}
                    />

                </div>
                <div className="form-group">

                    <input
                        type="date"
                        placeholder="Place of Birth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        required
                        onChange={e => onChange(e)} />
                </div>

                <div className="form-group">
                    <select name="investmentType" value={investmentType} required onChange={e => onChange(e)}>
                        <option value="0">* Select the investment plan</option>
                        <option value="Premium">Premium</option>
                        <option value="Minimum Investment">Minimum Investment</option>

                    </select>

                    <h4 onClick={() => setIsShown(true)}>About</h4>
                    {isShown && (
                        <div>
                            <p>Premium Investment  has a minimum investment of $10,000 and a
                        maximum investment of $250,000 </p>
                            <p>
                                Minimum investment plan has minimum investment of  of $25,000 and a maximum
                                investment of $250,000.
                        </p>
                            <h4 onClick={() => setIsShown(false)}>Hide</h4>

                        </div>
                    )}

                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={amount}
                        min={minVal(investmentType)}
                        max={maxVal(investmentType)}
                        required
                        onChange={e => onChange(e)}

                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
                <NavLink to="/" className='btn btn-primary'>
                    Go Back
      </NavLink>
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
