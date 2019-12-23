import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark
        return (
            <nav style={{ background: theme.nav, color: theme.text }}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar