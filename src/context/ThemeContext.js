import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { text: 'rgb(38, 38, 38)', nav: 'rgba(255, 255, 255, 1)' },
        dark: { text: 'rgb(255, 255, 255)', nav: 'rgb(38, 38, 38)' }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider