import axios from 'axios'

import {
    ADD_RECORD,
    GET_PROFILE,
    PROFILE_ERROR
} from './types'

export const addRecord = (formData) => async dispatch => {
    console.log(formData)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/users', formData, config)
        dispatch({
            type: ADD_RECORD,
            payload: res.data
        });
        console.log("success")

    }
    catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            console.log(errors);
        }

    }
}

export const getProfiles = () => async dispatch => {
    try {
        const res = await axios.get('/api/users')
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}