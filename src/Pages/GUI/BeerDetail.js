import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { startAddFirstDrink, startUpdateDrink } from '../../Redux/Actions/drinkActions';

export const BeerDetail = () => {

    const dispatch = useDispatch();
    const { auth, beers, drinks } = useSelector(state => state);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    const { beerId } = useParams();
    const beer = useMemo(() =>
        beers.beers.find(beer => beer.id === beerId),
        [beers.beers, beerId]);

    const drink = useMemo(() =>
        drinks.drinks.find(drink => drink.bid === beerId),
        [drinks.drinks, beerId]);


    if (!beer) {
        return <Navigate to='/' />
    }

    const handleAddDrink = (add) => {
        console.log('drink?.amount ', drink?.amount >= 0)
        drink?.amount >= 0
            ? dispatch(startUpdateDrink(drink, add))
            : dispatch(startAddFirstDrink(beerId))
    };


    return (
        <div className='bd-beer-detail animate__animated animate__fadeIn animate__faster'>
            <div className="bd-beer-can-container">
                <img className="bd-beer-can"
                    src="https://reubensbrews.com/wp-content/uploads/2019/11/mind_the_gapsticker_web.png"
                    alt="beer can" />
            </div>
            <div className='bd-beer-detail-up'>
                <div>
                    <div>
                        <h5>{beer.brand}</h5>
                        <h3>{beer.name}</h3>
                        <div className='bd-label'>{beer.type.type}</div>

                    </div>
                </div>
            </div>
            <div className='bd-beer-detail-down'>

                <div>


                    <div className='bd-beer-detail-description'>
                        <p>{beer.description}</p>
                        <button onClick={handleBack} className='btn ba-btn btn-block'>Go to list</button>
                    </div>

                    <div className='bd-beer-detail-info'>


                        <div >
                            <div>
                                label
                            </div>
                        </div>

                        <div >
                            <div>
                                AVG
                            </div>
                            <div>
                                {beer.type.alcohol}
                            </div>
                        </div>



                        {
                            auth.isAuthenticated &&
                            (
                                <>
                                    <div >
                                        <div>
                                            Drinks
                                        </div>
                                        <div>
                                            {drink?.amount ? drink.amount : 0}
                                        </div>
                                    </div>
                                    <div className='bd-add-remove-Drink'>
                                        <div onClick={() => handleAddDrink(true)}>
                                            +
                                        </div>
                                        {
                                            drink?.amount > 0 &&
                                            <div onClick={() => handleAddDrink(false)}>
                                                -
                                            </div>
                                        }

                                    </div>
                                </>
                            )
                        }


                    </div>
                </div>


            </div>
        </div >
    )
}
