import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

function Page1(){
    return (
        <div>
            <h1>Page1</h1>
            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default Page1;