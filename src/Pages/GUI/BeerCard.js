import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export const BeerCard = ({ beer }) => {

    const navigate = useNavigate();
    const { auth, drinks } = useSelector(state => state);
    const { brand, letter, name, type } = beer;
    const [{ amount }, setAmount] = useState({ amount: 0 })

    const handleBeerDetail = () => {
        navigate(`/beer/${beer.id}`);
    };

    useEffect(() => {
        if (drinks?.drinks) {
            const amount = drinks.drinks.find(drink => drink.bid === beer.id);
            amount
                ? setAmount(drinks.drinks.find(drink => drink.bid === beer.id))
                : setAmount({ amount: 0 })
        }
    }, [beer.id, drinks.drinks])


    // useMemo(() =>
    // drinks.drinks.find(drink => drink.bid === beer.id),
    // [drinks.drinks, beer.id]);

    return (
        <div className=" me-5 ms-5 mt-5 mb-5 bc-card"
            onClick={handleBeerDetail}>
            <div className=" bc-dualcol">
                {letter}
            </div>
            <div className="">

                <h3>{name}</h3>
                <h5>{brand}</h5>
                <span className="bg-warning bc-label">{type.type}</span>
                <div className='row'>
                    <div title='Alcohol %' className='col bc-info-box'>
                        <div className='bc-info-label'>AVG%</div>
                        <div className='bc-info-data'>{type.alcohol}</div>
                    </div>
                    {
                        auth?.isAuthenticated &&
                        (
                            <div title='Alcohol %' className='col bc-info-box'>
                                <div className='bc-info-label'>drinks</div>
                                <div className='bc-info-data'>{amount ? amount : 0}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

BeerCard.propTypes = {
    beer: PropTypes.object.isRequired
}
