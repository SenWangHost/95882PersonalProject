import React from 'react';

import NavBar from '../NavBar/NavBar';
import LoginPanel from '../LoginPanel/LoginPanel';
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