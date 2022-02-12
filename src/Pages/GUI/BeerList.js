import React from 'react'
import { useSelector } from 'react-redux';
import { BeerCard } from './BeerCard'

export const BeerList = () => {


     const {beers} = useSelector( state => state.beers );


    return (
        <div className='bl-beer-list animate__animated animate__fadeIn animate__faster'>
            <h1>BeerList</h1>
            <div className='d-flex flex-row  flex-wrap'>

                {
                    beers.map(beer =>
                        <BeerCard
                            key={beer.id}
                            beer={beer} />)
                }

            </div>
        </div>
    )
}
