import {
    ADD_RECORD,
    GET_PROFILE,
    PROFILE_ERROR

} from '../actions/types'

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}

}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case ADD_RECORD:
            return {
                ...state,
                profiles: [payload, ...state.profiles],
                loading: false
            };
        case GET_PROFILE:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profiles: null
            };
        default:
            return state;

    }
}
