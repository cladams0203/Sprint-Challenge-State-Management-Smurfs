import React, { useState, useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'
import axios from 'axios'

export function EditSmurf(props) {
    const {setUpdate, update } = useContext(SmurfContext)
    const [form, setForm] = useState({
        name:'',
        age: '',
        height: '',
        id: props.match.params.id.toString()
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3333/smurfs/${props.match.params.id}`, form)
            .then(res => {
                console.log(res)
            
                setForm({
                    name: '',
                    age: '',
                    height: ''
                })

                props.history.push('/')
                setUpdate(!update)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                value={form.name}
                onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                placeholder='Name of Smurf'
            />
            <input
                name='age'
                value={form.age}
                onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                placeholder='Name of Smurf'
            />
            <input
                name='height'
                value={form.height}
                onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                placeholder='Name of Smurf'
            />
            <button type='submit'>Edit Smurf</button>
        </form>
    )
}