import * as React from 'react'
import Radium from 'radium'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    backgroundPosition: '100% 35%',
                    '@media (max-width: 600px)': {
                        backgroundPosition: '50% 35%'
                    }
                }}
            >
                <div
                    style = {{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        background: 'rgba(0, 0, 0, .4)',
                        height: 'inherit'
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
                    <a
                        href = '#form'
                        style = {{
                            ':hover': {
                                color: '#ccc'
                            }
                        }}
                    >
                        <FontAwesomeIcon
                            icon = {['fas', 'chevron-down']}
                            style = {{
                                color: '#eee',
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                                marginTop: '.5rem',
                                ':hover': {
                                    color: '#ccc'
                                }
                            }}
                        />
                    </a>
                </div>
            </div>
            <Form/>
        </div>
    );
};

export default Radium(Contact)