import { types } from "../Types/types";

const initialState = {};

export const drinksReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.drinkLoad:
            return {
                ...state,
                ...action.payload
            };
        case types.drinkFirstRefresh:
            return {
                ...state,
                drinks: [...state.drinks, action.payload.drink]
            }

        case types.drinkUpdateRefresh:
            return {
                ...state,
                drinks: state.drinks.map(
                    drink => drink.id === action.payload.id
                        ? action.payload.drink
                        : drink
                )
            }

        default:
            return state
    }

};
