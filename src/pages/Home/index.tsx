import React, { useEffect, useState } from 'react'
import './styles.css';

import { Link } from 'react-router-dom';
import ConnectionsController from '../../controllers/ConnectionsController';

function Home(){

    const connectionsController = new ConnectionsController();

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        connectionsController.create();

        connectionsController.index().then(ret => {
            setTotalConnections(ret);
        });
        

    }, [])

    return (
        <>
            <h1>Home</h1>
            <Link to="/Page1">
                Page 1
            </Link>
            <p>Total: {totalConnections}</p>
        </>
    )
}

export default Home;