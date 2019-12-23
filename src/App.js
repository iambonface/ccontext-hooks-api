import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
