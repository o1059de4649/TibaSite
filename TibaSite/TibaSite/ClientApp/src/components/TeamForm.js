import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { ButtonEx } from '../Base/Button';
import { PlayerList } from '../components/PlayerList';
import './TeamForm.css';

export class TeamForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisabledDeside: true,
            isShiknki: false,
            teamName: '',
            description: '',
            createTeam: () => { this.CreateTeam(); },
            playerList: [],
            maxPlayerCount: 5,
            validationPlayerCount: '',
        };
        this.syncTeamName = this.syncTeamName.bind(this);
        this.CreateTeam = this.CreateTeam.bind(this);
        this.SyncPlayerModelList = this.SyncPlayerModelList.bind(this);
        this.syncDescription = this.syncDescription.bind(this);
    }

    componentDidMount() {
    }

    async memory(path) {
        return await CommonMethods.getMemoryStream(path);
    }

    async CreateTeam() {
        await CommonMethods.postData('team/AddTeam', this.state);
        /*window.location = "../tournament";*/
    };

    syncTeamName(value) {
        this.setState({ teamName: value });
    }


    syncDescription(value) {
        this.setState({ description: value });
    }

    async SyncPlayerModelList(playerList) {
        await this.setState({ playerList: playerList });
        let res = false;
        let str = '';
        if (this.state.playerList.length >= this.state.maxPlayerCount) {
            res = true;
            str = '選択されたプレイヤーの人数が' + this.state.maxPlayerCount + '以上です。';
        }
        if (this.state.playerList.length <= 0) {
            res = true;
            str = 'チームを構成するプレイヤーを選択してください。';
        }
        await this.setState({ isDisabledDeside: res });
        await this.setState({ validationPlayerCount: str });
    }

    render() {
        return <div>
                    <div className="row loginForm">
                        <div className="col-12">
                                <h1>チーム作成</h1>
                        </div>
                    </div>
                    <div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="text" displayName="チーム名称" className="divCenter" onSync={this.syncTeamName} />
                            </div>
                        </div>
                        <div className="row loginForm">
                            <div className="col-12">
                                <InputEx type="textarea" cols="30" rows="10" displayName="チーム説明" className="divCenter" onSync={this.syncDescription} />
                            </div>
                        </div>
                    </div>
                    <div className="row loginForm rap">
                        <div className="col-12">
                            <ButtonEx isDisabled={this.state.isDisabledDeside} displayName="チーム作成" onClick={this.state.createTeam} />
                        </div>
                    </div>
                    {this.state.isDisabledDeside &&
                    <div className="row">
                        <div className="col-12">
                            <p className="text-danger">{this.state.validationPlayerCount}</p>
                        </div>
                    </div>
                    }
                    <PlayerList isSelect={true} onSync={(playerList) => this.SyncPlayerModelList(playerList) } />
                </div>


    }
}


