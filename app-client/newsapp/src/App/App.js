import React from 'react';
import './App.css';
import LoginPanel from '../LoginPanel/LoginPanel';
import NavBar from '../NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <LoginPanel/>
            </div>
        );
    }
}

export default App;