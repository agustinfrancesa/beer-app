import { db } from '../../Data/DataBase/firebase-config';
import { loadDrinksDB } from '../../Data/Selectors.js/loadDrinks';
import { types } from '../Types/types';



export const startLoadDrinks = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const drinks = await loadDrinksDB(uid);
        dispatch(loadDrinks(drinks, uid));
    }
};


export const loadDrinks = (drinks, uid) => (
    {
        type: types.drinkLoad,
        payload: {
            uid,
            drinks
        }
    });

export const refreshFirstDrink = (id, drink) => ({
    type: types.drinkFirstRefresh,
    payload: {
        id,
        drink: {
            id,
            ...drink
        }
    }
});

export const startAddFirstDrink = (beerId) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newDrink = {
            bid: beerId,
            amount: 1,
        };
        const userDrinksDoc = await db.collection(`${uid}/userDrinks/drinks`).add(newDrink);
        dispatch(refreshFirstDrink(userDrinksDoc.id, newDrink));
    };
};

export const startUpdateDrink = (drink, add) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const drinkToFireStore = { ...drink };
        delete drinkToFireStore.id;

        //Resta o suma...
        add
            ? drinkToFireStore.amount = drink.amount + 1
            : drinkToFireStore.amount = drink.amount - 1;

        db.doc(`${uid}/userDrinks/drinks/${drink.id}`).update(drinkToFireStore)
            .then(
                dispatch(refreshUpdateDrink(drink.id, drinkToFireStore))
            )
            .catch((error) =>
                console.log('error', error)
            )


        // Swal.fire('Saving', drinkToFireStore.title, 'success');
    };
};



export const refreshUpdateDrink = (id, drink) => ({
    type: types.drinkUpdateRefresh,
    payload: {
        id,
        drink: {
            id,
            ...drink
        }
    }
});