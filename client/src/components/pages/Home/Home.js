import React from 'react'
import Radium from 'radium'

import Pic12 from '../../../images/Pic12.jpg'
import Hero from '../../../images/Hero.jpg'

function Home() {
    return (
        <div
            style = {{
                background: `linear-gradient(to right, white, transparent 25%, transparent) ,url(${Pic12})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '100% 60%',
                height: '100vh',
                '@media (max-width: 900px)': {
                    background: `url(${Hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 100%',
                    backgroundRepeat: 'no-repeat'
                }
            }}
        ></div>
    );
};

export default Radium(Home)