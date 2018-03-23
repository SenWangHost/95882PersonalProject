import React from 'react';
import './LoginPanel.css';

import { Card, Icon, Image } from 'semantic-ui-react'

class LoginPanel extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Content header='About Amy' />
                    <Card.Content>
                        This is description that we needs!
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