import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Logo.css';
const Logo = () => {
    return (
        <div className='fs-3 text-success'>
            <FontAwesomeIcon icon={faDumbbell} />
            <span>akash's-gym-club</span>
        </div>
    );
};

export default Logo;