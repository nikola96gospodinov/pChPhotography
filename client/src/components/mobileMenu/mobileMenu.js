import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Radium from 'radium'

import './mobileMenu.css'

function mobileMenu(props) {
    return (
        <div
            style = {{
                height: '100vh',
                width: '100vw',
                background: '#222',
                zIndex: '40',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed'
            }}
        >   
            <div
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    style = {{
                        margin: '1.5rem'
                    }}
                >
                    <h1
                        style = {{
                            color: '#eee',
                            '@media (min-width: 600px)': {
                                fontSize: '3.5rem'
                            }
                        }}
                    >P.CH</h1>
                    <h3
                        style = {{
                            color: '#ccc',
                            textTransform: 'uppercase',
                            marginTop: '-.3rem',
                            '@media (min-width: 600px)': {
                                fontSize: '2rem'
                            }
                        }}
                    >Photography</h3>
                </div>
                <FontAwesomeIcon
                    onClick = {props.closeMobileMenu}
                    icon = {['fas', 'times-circle']}
                    style = {{
                        fontSize: '2.5rem',
                        color: '#eee',
                        margin: '1.5rem',
                        borderRadius: '10rem'
                    }}
                />
            </div>
            <div
                style = {{
                    marginLeft: '1.5rem',
                    marginTop: '4rem',
                    '@media (min-width: 600px)': {
                        marginTop: '7rem'
                    }
                }}
            >
                <NavLink
                    onClick = {props.closeMobileMenu}
                    key = '3'
                    className = 'nav-link-mobile'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/'
                >Home</NavLink>
                <NavLink
                    onClick = {props.closeMobileMenu}
                    key = '4'
                    className = 'nav-link-mobile'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/portfolio'
                >Portfolio</NavLink>
                <NavLink
                    onClick = {props.closeMobileMenu}
                    key = '5'
                    className = 'nav-link-mobile'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/Contact'
                >Contact</NavLink>
                <NavLink
                    onClick = {props.closeMobileMenu}
                    key = '6'
                    className = 'nav-link-mobile'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/About'
                >About</NavLink>
            </div>
            <div
                style = {{
                    marginLeft: '1.5rem',
                    marginTop: 'auto',
                    marginBottom: '2.5rem'
                }}
            >
                <label
                    style = {{
                        display: 'block',
                        marginBottom: '1.2rem',
                        fontSize: '1rem',
                        fontWeight: '400',
                        letterSpacing: '2px',
                        color: '#ccc',
                        '@media (min-width: 600px)': {
                            fontSize: '1.5rem'
                        }
                    }}
                >Connect</label>
                <a
                    className = 'social'
                    href = 'https://www.instagram.com/p.ch.photography/'
                    target = '_blank'
                >
                    <FontAwesomeIcon
                        icon = {['fab', 'instagram']}
                    />
                </a>
                <a
                    className = 'social'
                    href = 'https://www.facebook.com/peter.chorbadzhiev'
                    target = '_blank'
                >
                    <FontAwesomeIcon
                        icon = {['fab', 'facebook']}
                    />
                </a>
            </div>
        </div>
    )
}

export default Radium(mobileMenu)