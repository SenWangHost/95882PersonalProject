import React from 'react';
import './LoginPanel.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {Dropdown, Button, NavItem} from 'react-materialize';

class LoginPanel extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World</p>
                <Dropdown trigger={
                    <Button>Drop me!</Button>
                }>
                    <NavItem>one</NavItem>
                    <NavItem>two</NavItem>
                    <NavItem divider />
                    <NavItem>three</NavItem>
                </Dropdown>
            </div>
        );
    }
}

export default LoginPanel;