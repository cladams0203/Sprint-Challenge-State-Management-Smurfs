import React, { useContext, useEffect } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'
import { Link } from 'react-router-dom';
import axios from 'axios'

export function Smurf(props) {
    const { smurfs, setUpdate, update } = useContext(SmurfContext)
    const smurf = smurfs && smurfs.filter(item => item.id.toString() === props.match.params.id)
   
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3333/smurfs/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setUpdate(!update)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            {smurf && smurf.map((item, index) => {
                return(
                <div key={index}>
                    <h2> {item.name} </h2>
                    <p>Age: {item.age}  </p>
                    <p>Height: {item.height}  </p>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/editsmurf/${item.id}`}>
                        <button>Edit Smurf</button>
                    </Link>
                </div>
                )
            })}
        </div>
    )
}