import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { SmurfContext } from '../contexts/SmurfContext';
import { Route } from 'react-router-dom';
import { SmurfList } from './SmurfList';
import { AddSmurf } from './AddSmurf';
import { Smurf } from './Smurf';


export function SmurfContainer () {
    const [smurfs, setSmurfs] = useState()
    const [update, setUpdate] = useState(false)

    const addSmurf = (input) => {
        axios.post('http://localhost:3333/smurfs', input)
            .then(res => console.log(res))

            .catch(err => console.log(err))
        
    }

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                setSmurfs(res.data)
            })
            .catch(err => console.log(err))
    }, [update])
    console.log(smurfs)

    return(
        <SmurfContext.Provider value={{smurfs, addSmurf, setUpdate, update}}>
            <Route exact path='/' component={SmurfList}/>
            <Route exact path='/smurf/:id' component={Smurf} />
            <Route exact path='/addSmurf' component={AddSmurf} />
        </SmurfContext.Provider>
    )
}