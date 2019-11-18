import React from 'react';
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
        </div>
    );
}

export default App;
