import { db } from "../DataBase/firebase-config";


export const loadDrinksDB = async (uid) => {
    const drinksSnap = await db.collection(`${uid}/userDrinks/drinks`).get();
    const drinks = [];
    drinksSnap.forEach(snapChild => {
        drinks.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    });
    return drinks;
}
