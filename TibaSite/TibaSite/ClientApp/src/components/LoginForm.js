import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { ButtonEx } from '../Base/Button';
import './LoginForm.css';

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShiknki: false,
            screenName: '',
            pin: '',
            password: '',
            repassword: '',
            login: () => {
                this.Login();
            },
            add: () => {
                this.Add();
            },
            createPIN: () => {
                this.CreatePIN();
            },
            validationMessage: '',
            success: false,
        };
        this.syncName = this.syncName.bind(this);
        this.syncPin = this.syncPin.bind(this);
        this.syncPassword = this.syncPassword.bind(this);
        this.syncRepassword = this.syncRepassword.bind(this);
    }

    componentDidMount() {
    }

    async memory(path) {
        return await CommonMethods.getMemoryStream(path);
    }

    async Login() {
        let resObj = await CommonMethods.postData('login/LoginExecute', this.state);
        this.setState({ validationMessage: resObj.response });
        this.setState({ success: resObj.responseObj });
        if (resObj.responseObj) {
            window.location = "../";
        }
    };

    async Add() {
        await CommonMethods.postData('twitter/GetTokenSelf', this.state);
        this.setState({ isShiknki: false });
    };
    async CreatePIN() {
        this.setState({ isShiknki: true });
        var res = await CommonMethods.postData('twitter/OpenTwitter', '');
        window.open(res.url, '_blank');
    };

    syncName(value) {
        this.setState({ screenName: value });
    }

    syncPin(value) {
        this.setState({ pin: value });
    }

    syncPassword(value) {
        this.setState({ password: value });
    }

    syncRepassword(value) {
        this.setState({ repassword: value });
    }

    render() {
        return <div>
                    <div className="row loginForm">
                        <div className="col-12">
                                <h1>????????????</h1>
                        </div>
                    </div>
                    {!this.state.isShiknki &&
                        <div>
                            <div className="row loginForm">
                                <div className="col-12">
                                    <InputEx type="text" displayName="TwitterID" className="divCenter" onSync={this.syncName} />
                                </div>
                            </div>
                            <div className="row loginForm">
                                <div className="col-12">
                                    <InputEx type="text" displayName="???????????????" className="divCenter" onSync={this.syncPassword} />
                                </div>
                            </div>
                        </div>
                         }
                    {this.state.isShiknki &&
                    <div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="text" displayName="PIN" className="divCenter" onSync={this.syncPin} />
                            </div>
                        </div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="text" displayName="???????????????" className="divCenter" onSync={this.syncPassword} />
                            </div>
                        </div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="text" displayName="????????????????????????" className="divCenter" onSync={this.syncRepassword} />
                            </div>
                        </div>
                    </div>
                    }
                    {!this.state.isShiknki &&
                    <div>
                        <div className="row loginForm rap">
                            <div className="col-12">
                                {!this.state.success &&
                                    <div className="loginForm">
                                        <span className="text-danger loginForm">{this.state.validationMessage}</span>
                                    </div>
                                }
                                <ButtonEx displayName="????????????" onClick={this.state.login} />
                            </div>
                        </div>
                        <div className="row loginForm rap">
                            <div className="col-12">
                                <ButtonEx displayName="????????????" onClick={this.state.createPIN} />
                            </div>
                        </div>
                    </div>
                    }
                    {this.state.isShiknki &&
                        <div>
                            <div className="row loginForm rap">
                                <div className="col-12">
                                    <ButtonEx displayName="??????" onClick={this.state.add} />
                                </div>
                            </div>
                        </div>
                    }
                </div>

    }
}


