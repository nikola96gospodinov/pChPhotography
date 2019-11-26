import React, { Component } from 'react'
import Radium from 'radium'

import SideMenu from '../components/sideMenu/SideMenu'
import MobileHeader from '../components/mobileMenu/MobileHeader/MobileHeader'
import MobileMenu from '../components/mobileMenu/mobileMenu'

class Layout extends Component {
    state = {
        mobileMenuOpen: false
    }

    mobileMenuToggleHandler = () => {
        this.setState((prevState) => {
            return {mobileMenuOpen: !prevState.mobileMenuOpen}
        })
    }

    render(){
        let mobileMenu = null

        if (this.state.mobileMenuOpen) {
            mobileMenu = <MobileMenu closeMobileMenu = {this.mobileMenuToggleHandler}/>
        }

        return(
            <React.Fragment>
                <MobileHeader openMobileMenu = {this.mobileMenuToggleHandler}/>
                {mobileMenu}
                <div
                    style = {{
                        display: 'grid',
                        gridTemplateColumns: '1fr 4fr',
                        height: '100vh',
                        '@media (max-width: 900px)': {
                            display: 'block'
                        }
                    }}
                >
                    <div
                        style = {{
                            display: 'fixed',
                            zIndex: '10',
                            background: 'white',
                            '@media (max-width: 900px)': {
                                display: 'none'
                            }
                        }}
                    >
                        <SideMenu/>
                    </div>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Radium(Layout)