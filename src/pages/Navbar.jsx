import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/task">Task</Link>
                </li>
            </ul>
        </nav>
    )
}