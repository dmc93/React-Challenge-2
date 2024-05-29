// import homeImage from '../homeImage.jpg'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return(
        <div className='body'>
            
                <div className='featurePanel'>
                <h1 className='homeTitle'>Professionalism at our core.</h1>
                <p className='featureText'>Hire us now for your professional service requirements.</p>
                <button className='bannerButton'><Link to="/shop">Browse services</Link></button>
                </div>
                {/* <img className='homeImage' src=""/> */}

                


        </div>
    )
}

export default HomePage;