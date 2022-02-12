import { types } from "../Types/types";




export const startLoading = () => {
    return {
        type: types.uiStartLoading,
        payload: {loading:true}
    }
};

export const finishLoading = () => {
    return {
        type: types.uiFinishLoading,
        payload:  {loading:false}
    }
};


export const setErrorAction = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
};

export const UnsetErrorAction = () => {
    return {
        type: types.uiUnsetError,
    }
};