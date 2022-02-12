import { types } from "../Types/types";

const initialState = [];

export const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.beerLoadType:
            return {
                ...state,
                types: [...action.payload]
            };

        case types.beerLoad:
            return {
                ...state,
                beers: [...action.payload]
            };

        default:
            return state
    }

};
