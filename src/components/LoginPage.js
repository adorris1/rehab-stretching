import React from 'react';
import ReactMixin from 'react-mixin';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import { Link, History  } from 'react-router';
import Context from './../Context';
import UserActions from '../actions/UserActions';

export default class LoginPage extends React.Component{
    render() {
        return (
            <DocumentTitle title={`Login`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Login</h3>
                            <hr />
                        </div>
                    </div>
                    <LoginForm redirectTo="/profile" />
                </div>
            </DocumentTitle>
        );
    }

}
