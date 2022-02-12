import { db } from "../DataBase/firebase-config";


export const loadBeerTypesDB = async ( ) => {
    const beerTypesSnap = await db.collection(`Types/`).get();
    const types = [];
    beerTypesSnap.forEach( snapChild => {
        types.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    });
    return types;
}

export const loadBeersDB = async ( ) => {
    const beersSnap = await db.collection(`Beers/`).get();
    const beers = [];
    beersSnap.forEach( snapChild => {
        beers.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    });
    return beers;
}

