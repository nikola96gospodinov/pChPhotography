import * as React from 'react'
import Radium from 'radium'

import Form from './Form'

import Pic8 from '../../../images/Pic8.jpg'

function Contact() {
    return (
        <div>
            <div
                style = {{
                    background: `url(${Pic8})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <h1
                    style = {{
                        fontSize: '3rem',
                        color: 'white'
                    }}
                >Get in Touch</h1>
                <h3
                    style = {{
                        fontSize: '1.2rem',
                        marginTop: '-.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: '#ccc',
                        '@media (max-width: 600px)': {
                            textAlign: 'center',
                            margin: '-.5rem 1rem'
                        }
                    }}
                >Looking forward to hearing from you</h3>
            </div>
            <Form/>
        </div>
    );
};

export default Radium(Contact)