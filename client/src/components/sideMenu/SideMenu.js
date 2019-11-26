import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Radium from 'radium'

import './SideMenu.css'

const SideMenu = () => {
    return (
        <div
            style = {{
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 7rem)',
                position: 'fixed'
            }}
        >
            <div>
                <h1
                    style = {{
                        fontSize: '3rem'
                    }}
                >P.CH</h1>
                <h3
                    style = {{
                        fontSize: '1.5rem',
                        marginTop: '-.5rem',
                        color: '#333',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px'
                    }}
                >Photography</h3>
            </div>
            <div
                style = {{
                    marginTop: '3rem'
                }}
            >
                <NavLink
                    key = '3'
                    className = 'nav-link'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/'
                >Home</NavLink>
                <NavLink
                    key = '4'
                    className = 'nav-link'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/portfolio'
                >Portfolio</NavLink>
                <NavLink
                    key = '5'
                    className = 'nav-link'
                    exact
                    activeStyle = {{
                        color: '#00aaaf',
                        fontWeight: '900'
                    }}
                    to = '/Contact'
                >Contact</NavLink>
                <NavLink
                    key = '6'
                    className = 'nav-link'
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
                    marginTop: 'auto'
                }}
            >
                <label
                    style = {{
                        display: 'block',
                        marginBottom: '1.2rem',
                        fontSize: '1rem',
                        fontWeight: '400',
                        letterSpacing: '2px'
                    }}
                >Connect</label>
                <a
                    key = '1'
                    style = {{
                        marginRight: '.5rem',
                        fontSize: '1.2rem',
                        padding: '.7rem',
                        background: '#222',
                        color: '#fff',
                        border: '2px solid #222',
                        borderRadius: '10rem',
                        ':hover': {
                            background: '#fff',
                            color: '#3f729b',
                            border: '#3f729b 2px solid'
                        }
                    }}
                    href = 'https://www.instagram.com/p.ch.photography/'
                    target = '_blank'
                >
                    <FontAwesomeIcon
                        icon = {['fab', 'instagram']}
                    />
                </a>
                <a
                    key = '2'
                    style = {{
                        marginRight: '.5rem',
                        fontSize: '1.2rem',
                        padding: '.7rem',
                        background: '#222',
                        color: '#fff',
                        border: '2px solid #222',
                        borderRadius: '10rem',
                        ':hover': {
                            background: '#fff',
                            color: '#3b5998',
                            border: '#3b5998 2px solid'
                        }
                    }}
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

export default Radium(SideMenu)