import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PersonIcon from 'material-ui/svg-icons/social/person';

import BaseComponent from 'components/BaseComponent';
import Link from 'components/Link';
import {actions, dispatchers} from 'api/actions';

class Login extends BaseComponent {

    render() {

        const fieldStyle = {
            marginBottom: 20
        };

        return (
            <Form>

                <div style={{
                    padding: 20,
                    backgroundColor: this.props.muiTheme.palette.primary1Color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <PersonIcon style={{
                        color: this.props.muiTheme.palette.alternateTextColor,
                        width: 96,
                        height: 96
                    }}/>
                </div>

                <div style={{padding: 20}}>

                    < FormsyText
                        name="username"
                        floatingLabelText={this.getString('fieldUsernameLabel')
                        }
                        floatingLabelFixed={true}
                        validationErrors={
                            {
                                'isDefaultRequiredValue': this.getString('fieldErrorRequired')
                            }
                        }
                        required
                        style={fieldStyle}
                    />

                    < br />

                    < FormsyText
                        name="password"
                        type="password"
                        floatingLabelText={this.getString('fieldPasswordLabel')
                        }
                        floatingLabelFixed={true}
                        validationErrors={
                            {
                                'isDefaultRequiredValue': this.getString('fieldErrorRequired')
                            }
                        }
                        required
                        style={fieldStyle}
                    />

                    < br />

                    < RaisedButton
                        type="submit"
                        label={this.getString('buttonLogin')}
                        secondary={true}
                        fullWidth={true}
                        style={{
                            ...fieldStyle,
                            height: 52
                        }}/>

                    <Link href="route-register">
                        <FlatButton
                            label={this.getString('buttonRegister')}
                            secondary={true}
                            fullWidth={true}
                        />
                    </Link>


                </div>

            </
                Form >
        )
    }
}

const themeWrapper = muiThemeable()(Login);
export default connect((store) => ({store}), dispatchers)(themeWrapper);