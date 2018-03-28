import React from 'react';
import './LoginPanel.css';

import { Card, Icon, Image } from 'semantic-ui-react';
import LoginForm from '../LoginForm/LoginForm';

class LoginPanel extends React.Component {
    render() {
        return (
            <div>
                <Card className="centered">
                    <Card.Content header='Login or Register' />
                    <Card.Content>
                        <LoginForm />
                    </Card.Content>
                    <Card.Content extra>
                    <Icon name='user' />
                        4 Friends
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default LoginPanel;