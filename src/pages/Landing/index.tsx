import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

function Landing(){
    return (
        <div>
            <h1>Landing</h1>
            <Link to="/Home">
                Home
            </Link>
        </div>
    )
}

export default Landing;