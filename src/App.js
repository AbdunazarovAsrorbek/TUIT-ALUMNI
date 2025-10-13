import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import Routes from "./routes";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Routes />
        </Router>
    );
}

export default App;
