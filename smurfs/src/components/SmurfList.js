import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SmurfContext } from '../contexts/SmurfContext'
import { SmurfCard } from './SmurfCard'



export function SmurfList() {

    const { smurfs } = useContext(SmurfContext)

    

    

    return(
       
            <div>
                <Link to='/addSmurf'>
                    <button> Add a Smurf </button>
                </Link>
                {smurfs && smurfs.map((item, index) => {
                    return (
                    <Link to={`/smurf/${item.id}`} key={index}>
                        <SmurfCard  smurf={item}/>
                    </Link>
                        )
                })}
            </div>
        
    )
}