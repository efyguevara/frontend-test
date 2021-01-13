import React from 'react';
import Searcher from './Searcher/Searcher';
import Footer from './Footer/Footer';
import Welcome from '../templates/Welcome/Welcome';

const Layout = () => {
    return (
        <>
           <Searcher />
            <Welcome />
            <Footer />
        </>
    )
}

export default Layout; 