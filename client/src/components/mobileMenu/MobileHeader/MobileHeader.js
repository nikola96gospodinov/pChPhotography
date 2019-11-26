import * as React from 'react'
import Radium from 'radium'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MobileHeader(props) {
    return (
        <header
            style = {{
                height: '10vh',
                width: '100%',
                background: 'rgba(255, 255, 255, .9)',
                position: 'fixed',
                zIndex: '30',
                display: 'none',
                '@media (max-width: 900px)': {
                    display: 'block',
                },
                '@media (max-width: 400px)': {
                    height: '12vh'
                }
            }}
        >
            <div
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 'inherit'
                }}
            >
                <div
                    style = {{
                        marginLeft: '1.5rem'
                    }}
                >
                    <h1
                        style = {{
                            fontSize: '1.5rem',
                            '@media (min-width: 600px)': {
                                fontSize: '2.4rem'
                            }
                        }}
                    >P.CH</h1>
                    <h3
                        style = {{
                            textTransform: 'uppercase',
                            marginTop: '-.3rem',
                            color: '#333',
                            '@media (min-width: 600px)': {
                                fontSize: '1.5rem'
                            }
                        }}
                    >Photography</h3>
                </div>
                <div
                    onClick = {props.openMobileMenu}
                >
                    <FontAwesomeIcon icon = {['fas', 'bars']}
                        style = {{
                            color: '#eee',
                            padding: '0.9rem',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            background: '#222',
                            borderRadius: '300px',
                            marginRight: '1.5rem',
                            marginTop: '.25rem',
                            border: '2px solid #eee'
                        }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Radium(MobileHeader)