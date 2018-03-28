import React from 'react';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';

class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Field required>
                    <label>UserName:</label>
                    <input type="text" placeholder="example@gmail.com" />
                </Form.Field>
                <Form.Field required>
                    <label>Password:</label>
                    <input type="password" placeholder='Your Password' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Keep me signed in' />
                </Form.Field>
                <Button type='submit' animated>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name="right arrow"/>
                    </Button.Content>
                </Button>
                <Button>Register</Button>
          </Form>
        );
    }
}

export default LoginForm;