import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './TournamentList.css';
import { TeamList } from './TeamList';

export class TournamentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisabledDeside: true,
            validationTeamCount: '',
            stepNo: 0,
            modelList: null,
            targetTournament: null,
            targetTeam: null,
            contents: <div>Loading...</div>,
            search: () => {
                this.Search();
            },
            entry: (model) => {
                this.Entry(model);
            },
        };
        this.Entry = this.Entry.bind(this);
        this.SelectOnSync = this.SelectOnSync.bind(this);
        this.Deside = this.Deside.bind(this);
        this.ShowTournamentPlayerList = this.ShowTournamentPlayerList.bind(this);
        this.PrevToTournamentHome = this.PrevToTournamentHome.bind(this);

    }

    componentDidMount() {
        this.Search();
        this.setState({ stepNo: 0 });
    }

    async SearchModel() {
        const data = await CommonMethods.getData('tournament', 'TournamentGetAll');
        await this.setState({ modelList: data });
        await this.setState({ contents: this.tableRender() });
        return this.tableRender();
    }

    async memory(path) {
        return await CommonMethods.getMemoryStream(path);
    }

    tableRender() {
        let res =
            <div>
                <div>
                {(this.state.stepNo == 0) &&
                    <div>
                        <h1>大会一覧</h1>
                        <ButtonEx displayName="更新" onClick={this.state.search} />
                    {this.state.modelList.map((model, index) =>
                            <div key={index} className="row rowItem">
                                <div className="col-4">
                                    {model.imagePath != '' &&
                                        <img className="image" src={require('../media/tournament/' + model.imagePath)} />
                                    }
                                </div>
                                <div className="col-8">
                                    <h2>{model.title}</h2>
                                    <p> 開催日時：{model.datetime}</p>
                                    <p>内容：{model.content}</p>
                                <div className="row">
                                    <div className="col-6">
                                        <ButtonEx displayName="この大会に参加" onClick={() => { this.Entry(model) }} />
                                    </div>
                                    <div className="col-6">
                                        <ButtonEx displayName="出場プレイヤー一覧" onClick={() => { this.ShowTournamentPlayerList(model) }} />
                                    </div>
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
                </div>
                <div>
                {(this.state.stepNo == 1) &&
                    <div>
                        <ButtonEx displayName="大会一覧に戻る" onClick={this.PrevToTournamentHome} />
                        <TeamList isSelf={true} isSelect={true} onSync={(team) => this.SelectOnSync(team)} />
                        {this.state.isDisabledDeside &&
                            <div className="row">
                                <div className="col-12">
                                    <p className="text-danger">{this.state.validationTeamCount}</p>
                                </div>
                            </div>
                        }
                        <div className="row">
                            <div className="col-12 div-center">
                                <ButtonEx isDisabled={this.state.isDisabledDeside} displayName="このチームで出場する" onClick={this.Deside} />
                            </div>
                        </div>
                        
                    </div>
                }
                {(this.state.stepNo == 2) &&
                        <div>
                            <ButtonEx displayName="大会一覧に戻る" onClick={this.PrevToTournamentHome} />
                            <TeamList tournamentId={this.state.targetTournament.tournamentId} onSync={(team) => this.SelectOnSync(team)} />
                        </div>
                }
                </div>
            </div>
        return res;
    }

    async PrevToTournamentHome() {
        await this.StepChange(0);
    };

    async Search() {
        let res = await this.SearchModel();
    };

    async Entry(model) {
        await this.setState({ targetTournament: model });
        await this.StepChange(1);
    };

    async SelectOnSync(model) {
        let res = false;
        let str = '';
        if (model.length >= 2) {
            res = true;
            str = '複数のチームが選択されています。自身が含まれる参加可能なチームは１つです。';
        }
        if (model.length <= 0) {
            res = true;
            str = '参加予定のメンバーがいるチームを選択してください。';
        }
        if (model.length == 1) {
            res = false;
            str = '';
            let target = model[0];
            await this.setState({ targetTeam: target.mTeam });
        }
        await this.setState({ isDisabledDeside: res });
        await this.setState({ validationTeamCount: str });
        //正しく選択されている
        await this.setState({ contents: this.tableRender() });


    };
    async Deside() {
        await this.StepChange(0);
        await CommonMethods.postData('tournament/EntryExecute', this.state);
    };

    async ShowTournamentPlayerList(model) {
        await this.setState({ targetTournament: model });
        await this.StepChange(2);
        
    }

    async StepChange(num) {
        await this.setState({ stepNo: num });
        await this.setState({ contents: this.tableRender() });
    }

    render() {
        return <div>{this.state.contents}</div>
    }
}


