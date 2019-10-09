import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <div className="row">
            <img className="headingImg" src={require('../assets/javLGQbV.png')} />
            <h3 style={{ textAlign: "center" }}>
                Welcome to Motion Auto Insurance
        </h3>
        </div>


    );
}



export default Header;
