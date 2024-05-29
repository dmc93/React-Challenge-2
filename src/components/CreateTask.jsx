import { useState, useEffect } from "react";

export default function CreateTask() {

    const [name, setName] = useState('')
    const [description, setDesc] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [duration, setDuration] = useState(0)
    const [priority, setPriority] = useState('low')


    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {name, description, imageUrl, duration, priority}

        fetch("http://localhost:8000/tasks",
            {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(animal)

            }
        )

        alert("Animal added!")

        setName('')
        setSpecies('')
        setAge('')

    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Name of Animal: </label>
            <input type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <br/>
            <br/>
            <label>Species: </label>
            <input type="text"
            required
            value={species}
            onChange={(e) => setSpecies(e.target.value)} />
            <br/>
            <br/>
            <label>Age: </label>
            <input type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)} />
            <br/>
            <br/>
            <button>Add Animal</button>
        </form>
    )




}