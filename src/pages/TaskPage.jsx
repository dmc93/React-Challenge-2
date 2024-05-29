import { Link } from 'react-router-dom'
import CreateTask from '../components/CreateTask';
import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';

const TaskPage = () => {

    const apiURL = 'http://localhost:8000/tasks'
    const [items, setItems] = useState(['']);


    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => setItems(data))

    }, [])



    return(
        <div className='body'>
            
            
            <CreateTask />
            <br/>
            <br/>
            <div className="taskItems">
                {items.map((item) => (
                        <TaskCard
                        name = {item.name}
                        description = {item.description}
                        duration = {item.duration}
                        priority = {item.priority}
                        imageUrl = {item.imageUrl}
                        />
                ))}
            </div>
                


        </div>
    )
}

export default TaskPage;