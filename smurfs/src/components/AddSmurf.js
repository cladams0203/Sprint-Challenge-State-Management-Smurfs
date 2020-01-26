import React, { useContext, useState } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'


export function AddSmurf(props) {
    const { addSmurf, setUpdate, update } = useContext(SmurfContext)
    const [form, setForm] = useState({
        name:'',
        age: '',
        height: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addSmurf(form)
        setForm({
            name: '',
            age: '',
            height: ''
        })

        props.history.push('/')
        setUpdate(!update)
        
    }

    return(
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
            <button type='submit'>Add Smurf</button>
        </form>
    )
}