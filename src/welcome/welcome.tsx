import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';


const Welcome: React.FC = () => {
    return (
        <div>
            <img className="fitContentImg" src={require('../assets/PLuSd7YM.jpeg')} />
        </div>
    )
}

export default Welcome;
