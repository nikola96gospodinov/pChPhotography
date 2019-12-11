import * as React from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

import AboutHero from '../../../images/AboutHero.jpg'

function About() {
    return (
        <div
            style = {{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '4rem',
                '@media (max-width: 900px)': {
                    display: 'block'
                }
            }}
        >
            <div 
                style = {{
                    background: `url(${AboutHero})`,
                    height: 'calc(100vh - 6rem)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginTop: '3rem',
                    '@media (max-width: 900px)': {
                        margin: '0',
                        height: '50vh'
                    }
                }}
            >
            </div>
            <div
                style = {{
                    '@media (max-width: 900px)': {
                        marginLeft: '1.5rem'
                    }
                }}
            >
                <h1
                    style = {{
                        textAlign: 'left',
                        fontSize: '2.5rem',
                        color: '#222',
                        marginTop: '3rem'
                    }}
                >My Story</h1>
                <p
                    style = {{
                        marginTop: '1.5rem',
                        fontSize: '1.2rem',
                        color: '#555',
                        marginRight: '3rem',
                        '@media (max-width: 900px)': {
                            marginRight: '1.5rem'
                        }
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit nec leo mollis iaculis. Donec varius faucibus massa, a porta nisi fermentum sit amet. Morbi a dolor augue. Duis id nisi non urna dictum vehicula. Aliquam bibendum blandit euismod. Vestibulum suscipit arcu finibus turpis gravida, eu tempus justo cursus. Nam imperdiet consequat bibendum. Sed vestibulum rhoncus est ut pharetra. Donec tortor mi, placerat ut ex non, volutpat suscipit sapien. Praesent id nulla consequat, feugiat ex et, semper justo.

                    In ac consequat metus. Aliquam condimentum arcu vitae vulputate rutrum. Proin eu turpis commodo, varius quam vel, finibus ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sodales congue convallis. Proin a maximus risus. Duis tempus sed lectus vel lobortis. Quisque sit amet elit sagittis, semper nunc varius, porta purus.
                </p>
                <Link
                    to = '/Portfolio'
                    style = {{
                        display: 'inline-block',
                        background: '#222',
                        padding: '1rem 3rem',
                        marginBottom: '3rem',
                        color: '#eee',
                        borderRadius: '1rem',
                        fontSize: '1.3rem',
                        marginTop: '1.5rem',
                        textDecoration: 'none'
                    }}
                >Portfolio</Link>
            </div>
        </div>
    )
}

export default Radium(About)