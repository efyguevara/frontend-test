import React from 'react';
import Searcher from '../Searcher/Searcher';
import Footer from '../Footer/Footer';

const Layout = () => {

    return (
        <>
            <div className="searcher">
                <Searcher />
            </div> 

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Layout; 