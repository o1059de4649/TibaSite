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
            isShiknki: false,
            teamName: '',
            createTeam: () => { this.CreateTeam(); },
            playerList: [],
        };
        this.syncTeamName = this.syncTeamName.bind(this);
        this.CreateTeam = this.CreateTeam.bind(this);
        this.SyncPlayerModelList = this.SyncPlayerModelList.bind(this);
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

    SyncPlayerModelList(playerList) {
        this.setState({ playerList: playerList });
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
                    </div>
                    <div className="row loginForm rap">
                        <div className="col-12">
                            <ButtonEx displayName="チーム作成" onClick={this.state.createTeam} />
                        </div>
                    </div>
                    <PlayerList isSelect={true} onSync={(playerList) => this.SyncPlayerModelList(playerList) } />
                </div>


    }
}


