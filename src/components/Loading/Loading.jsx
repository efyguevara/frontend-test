import React from 'react';
import './index.css';
import activityIndicator from '../../assets/static/activityIndicator.svg';

const Loading = () => {
    const loadingIcon = <img src={activityIndicator} alt="icon loading" />
    return (
        <div className="loading">
            {loadingIcon}
        </div>
    )
}
export default Loading;