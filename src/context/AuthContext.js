import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signup = dispatch => async ({email, password}) => {
    try {
        // 1) make a request
        const response = await trackerApi.post('/signup', {email, password})
        // 2) store the token
        await AsyncStorage.setItem('token', response.data.token);
        // 3) update our state
        dispatch({type: 'signin', payload: response.data.token})
        // 4) navigate to the main flow
        navigate('TrackList');

    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up.'})
    }
};


const signin = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in.'})
    }
}


const signout = (dispatch) => {
    return () => {
        // somehow sign out
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: false, errorMessage: ''}
)