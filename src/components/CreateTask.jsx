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
                body: JSON.stringify(task)

            }
        )

        alert("Task added!")

        setName('')
        setDesc('')
        setImageUrl('')
        setDuration(0)
        setPriority('Low')

    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Name of Task: </label>
            <input type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <br/>
            <br/>
            <label>Description: </label>
            <input type="text"
            required
            value={description}
            onChange={(e) => setDesc(e.target.value)} />
            <br/>
            <br/>
            <label>Image URL: </label>
            <input type="text"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} />
            <br/>
            <br/>
            <label>Duration in Hours: </label>
            <input type="number"
            required
            value={duration}
            onChange={(e) => setDuration(e.target.value)} />
            <br/>
            <br/>
            <label>Priority: </label>
            <select 
                    value={priority} 
                    onChange = {(e) => setPriority(e.target.value)} > 
                    <option selected value="Low">Low</option> 
                    <option value="Medium">Medium</option> 
                    <option value="High">High</option> 
            </select> 
            <br/>
            <br/>
            <button>Add Task</button>
        </form>
    )




}