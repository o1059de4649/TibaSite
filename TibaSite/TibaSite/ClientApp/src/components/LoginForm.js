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
            playerName: '',
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
        await CommonMethods.postData('login/LoginExecute', this.state);
        window.location = "../";
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
        this.setState({ playerName: value });
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
                                <h1>ログイン</h1>
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
                                    <InputEx type="text" displayName="パスワード" className="divCenter" onSync={this.syncPassword} />
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
                                <InputEx type="text" displayName="パスワード" className="divCenter" onSync={this.syncPassword} />
                            </div>
                        </div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="text" displayName="確認用パスワード" className="divCenter" onSync={this.syncRepassword} />
                            </div>
                        </div>
                    </div>
                    }
                    {!this.state.isShiknki &&
                    <div>
                        <div className="row loginForm rap">
                            <div className="col-12">
                                <ButtonEx displayName="ログイン" onClick={this.state.login} />
                            </div>
                        </div>
                        <div className="row loginForm rap">
                            <div className="col-12">
                                <ButtonEx displayName="新規登録" onClick={this.state.createPIN} />
                            </div>
                        </div>
                    </div>
                    }
                    {this.state.isShiknki &&
                        <div>
                            <div className="row loginForm rap">
                                <div className="col-12">
                                    <ButtonEx displayName="登録" onClick={this.state.add} />
                                </div>
                            </div>
                        </div>
                    }
                </div>

    }
}


