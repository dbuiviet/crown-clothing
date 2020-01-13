import React from 'react';

import './homepage.style.scss';
import Directory from '../../components/directory/directory.cpn';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
);

export default Homepage;
