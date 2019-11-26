import * as React from 'react'
import Radium from 'radium'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Pic1 from '../../../images/Pic1.jpg'
import Pic2 from '../../../images/Pic2.jpg'
import Pic3 from '../../../images/Pic3.jpg'
import Pic4 from '../../../images/Pic4.jpg'
import Pic5 from '../../../images/Pic5.jpg'
import Pic6 from '../../../images/Pic6.jpg'
import Pic7 from '../../../images/Pic7.jpg'
import Pic8 from '../../../images/Pic8.jpg'
import Pic9 from '../../../images/Pic9.jpg'

function Portfolio() {
    const pictures = [
        {
            pic: Pic1,
            hasInstagramLink: false,
            instagramLink: '',
            title: ''
        }, 
        {
            pic: Pic2,
            hasInstagramLink: false,
            instagramLink: '',
            title: ''
        }, 
        {
            pic: Pic3,
            hasInstagramLink: false,
            instagramLink: '',
            title: ''
        }, 
        {
            pic: Pic4,
            hasInstagramLink: false,
            instagramLink: '',
            title: ''
        }, 
        {
            pic: Pic5,
            hasInstagramLink: true,
            instagramLink: 'https://www.instagram.com/p/B1N7FNZHtU_/',
            title: 'Looking up, never down.'
        }, 
        {
            pic: Pic6,
            hasInstagramLink: true,
            instagramLink: 'https://www.instagram.com/p/B1YZFK0p9a8/',
            title: 'Follow the lines and follow your dreams. Let your heart talk.'
        }, 
        {
            pic: Pic7,
            hasInstagramLink: true,
            instagramLink: 'https://www.instagram.com/p/B1MDQWyn0qA/',
            title: 'Which lines does your eye follow? Are you on the ground or are you exploring the sky?'
        }, 
        {
            pic: Pic8,
            hasInstagramLink: false,
            instagramLink: '',
            title: ''
        }, 
        {
            pic: Pic9,
            hasInstagramLink: true,
            instagramLink: 'https://www.instagram.com/p/B1YbP2zJxk8/',
            title: 'Alleys in Varna'
        }
    ]

    const ShowPictures = () => {
        return pictures.map((picture, i) => {
            return (
                <div
                    key = {i}
                    style = {{
                        background: `url(${picture.pic})`,
                        height: '85vh',
                        backgroundSize: 'cover',
                        '@media (max-width: 900px)': {
                            marginBottom: '1.5rem',
                            backgroundPosition: 'center',
                            height: '70vh'
                        }
                    }}
                >
                    <div
                        key = {1000 + i}
                        style = {{
                            opacity: '0',               
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            background: 'rgba(51, 51, 51, .8)',
                            ':hover': {
                                opacity: '1'
                            }
                        }}
                    >
                        <h3
                            style = {{
                                color: '#ddd',
                                textAlign: 'center',
                                margin: '1rem',
                                fontSize: '1.2rem',
                                '@media (max-width: 600px)': {
                                    display: 'none'
                                }
                            }}
                        >{picture.title}</h3>
                        {
                            picture.hasInstagramLink ? 
                            <div
                                style = {{
                                    textAlign: 'center'
                                }}
                            >
                                <h2
                                    style = {{
                                        color: '#ddd'
                                    }}
                                >View on:</h2>
                                <a
                                    key = {100000 + i}
                                    style = {{
                                        display: 'inline-block',
                                        marginRight: '.5rem',
                                        fontSize: '1.2rem',
                                        padding: '.5rem .8rem',
                                        background: '#ddd',
                                        color: '#222',
                                        border: '2px solid #ddd',
                                        borderRadius: '10rem',
                                        cursor: 'pointer',
                                        ':hover': {
                                            background: '#222',
                                            color: '#ddd'
                                        }
                                    }}
                                    href = {picture.instagramLink}
                                    target = '_blank'
                                >
                                    <FontAwesomeIcon
                                        icon = {['fab', 'instagram']}
                                    />    
                                </a>
                            </div> 
                            : 
                            <div
                                style = {{
                                    textAlign: 'center'
                                }}
                            >
                                <h2
                                    style = {{
                                        color: '#ddd'
                                    }}
                                >
                                    Follow on Instagram for more:
                                </h2>
                                <a
                                    key = {100000 + i}
                                    style = {{
                                        display: 'inline-block',
                                        marginRight: '.5rem',
                                        fontSize: '1.2rem',
                                        padding: '.5rem .8rem',
                                        background: '#ddd',
                                        color: '#222',
                                        border: '2px solid #ddd',
                                        borderRadius: '10rem',
                                        cursor: 'pointer',
                                        ':hover': {
                                            background: '#222',
                                            color: '#ddd'
                                        }
                                    }}
                                    href = 'https://www.instagram.com/p.ch.photography/'
                                    target = '_blank'
                                >
                                    <FontAwesomeIcon
                                        icon = {['fab', 'instagram']}
                                    />    
                                </a>
                            </div>
                        }
                    </div>
                </div>
            )
        })
    }

    return (
        <div
            style = {{
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '1rem',
                '@media (max-width: 900px)': {
                    display: 'inline-block',
                    padding: '1.5rem',
                    paddingTop: '6rem'
                }
            }}
        >
            {ShowPictures()}
        </div>
    );
};

export default Radium(Portfolio)