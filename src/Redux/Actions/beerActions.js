import { loadBeerTypesDB, loadBeersDB } from '../../Data/Selectors.js/loadBeerInfo';
import { types } from '../Types/types';


export const startLoadingBeers = () => {
    return async (dispatch) => {
        const beers = await loadBeersDB();
        dispatch(startLoadingBeerTypes());
        dispatch(loadBeers(beers));
    }
};

export const loadBeers = (beers) => ({
    type: types.beerLoad,
    payload: beers
});

export const startLoadingBeerTypes = () => {
    return async (dispatch) => {
        const beerTypes = await loadBeerTypesDB();
        dispatch(loadBeerTypes(beerTypes));
    }
};

export const loadBeerTypes = (beerTypes) => ({
    type: types.beerLoadType,
    payload: beerTypes
});
