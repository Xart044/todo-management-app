//base
import React, {Component} from 'react';
import {Link} from 'react-router';

//styles
import '../styles/login.scss';

//components
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    label: {
        fontSize: 24,
        fontWeight: 400,
    },
    input: {
        width: '100%'
    }

};

export default class SignInForm extends Component {
    render() {
        return (

            <div className="login-wrapper">
                <Tabs className="auth-container">
                    <Tab label="Register" value="a">
                        <div className="auth-tab">
                            <TextField style={styles.input}
                                       hintText="Name"
                                       floatingLabelText="Name"
                                       type="text"
                                       floatingLabelFixed={false}
                                       required={true}
                                       floatingLabelFocusStyle={styles.label}
                            />
                            <TextField style={styles.input}
                                       hintText="Surname"
                                       floatingLabelText="Surname"
                                       type="text"
                                       floatingLabelFixed={false}
                                       required={true}
                                       floatingLabelFocusStyle={styles.label}
                            />
                            <TextField style={styles.input}
                                       hintText="E-mail"
                                       floatingLabelText="E-mail"
                                       type="email"
                                       floatingLabelFixed={false}
                                       required={true}
                                       floatingLabelFocusStyle={styles.label}
                            />
                            <TextField style={styles.input}
                                       hintText="Password"
                                       floatingLabelText="Password"
                                       type="password"
                                       floatingLabelFixed={false}
                                       required={true}
                                       floatingLabelFocusStyle={styles.label}
                            />
                            <TextField style={styles.input}
                                       hintText="Confirm password"
                                       floatingLabelText="Confirm password"
                                       type="password"
                                       floatingLabelFixed={false}
                                       required={true}
                                       floatingLabelFocusStyle={styles.label}
                            />
                            <div className="auth-btn">
                                <Link to="/login"><RaisedButton label="Log in existed account" secondary={true}/></Link>                                
                                <RaisedButton label="Register" primary={true}/>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>

        );
    }

}
