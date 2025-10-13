import {login} from "../../../helper/helper";
import {loginSuccess, logoutUserSuccess, apiError} from './reducer';

export const loginUser = (user, history, lang) => async (dispatch) => {
    try {
        let response;
        response = login(user);

        let data = await response;
        if (data) {
            localStorage.setItem("authAlumni", JSON.stringify(data));
            dispatch(loginSuccess(data));
            history.push(`/${lang}/profile`)
            // console.log(data);
        }
    } catch (error) {
        dispatch(apiError(error));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem("authAlumni");
        dispatch(logoutUserSuccess(true));

    } catch (error) {
        dispatch(apiError(error));
    }
};
