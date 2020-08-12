import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

function Home(){
    return (
        <>
            <PageHeader />
            <h1>Home</h1>
            <Link to="/">
                Landing
            </Link>
        </>
    )
}

export default Home;