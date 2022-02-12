import { types } from "../Types/types";

export const authReducer = (state = {isAuthenticated: false}, action) => {

    switch (action.type) {
        
        case types.aLogin:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                isAuthenticated: true
            }

        case types.aLogout:
            return { 
                isAuthenticated: false
            }

        default:
            return state;
    }

};