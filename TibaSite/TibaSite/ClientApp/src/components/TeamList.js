import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './TeamList.css';
import { CheckBoxEx } from '../Base/CheckBox';

export class TeamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectModelList: [],
            modelList: [[]],
            contents: <div>Loading...</div>,
            search: () => {
                this.Execute();
            },
        };
        this.Select = this.Select.bind(this);
    }

    componentDidMount() {
        this.Execute();
    }
    Select(model, isSelect) {
        if (isSelect) {
            let list = this.state.selectModelList;
            list.push(model);
            this.setState({ selectModelList: list });
            if (this.props.onSync != null)this.props.onSync(list);
        } else {
            let list = this.state.selectModelList;
            list.splice(list.findIndex(x => x == model),1);
            this.setState({ selectModelList: list });
            if (this.props.onSync != null)this.props.onSync(list);
        }
    }
    async SearchModel() {
        const data = await CommonMethods.getData('team', 'TeamGetAll');
        await this.setState({ modelList: data.teamList });
        console.log(this.state.modelList);
        this.setState({ contents: this.tableRender() });
        return this.tableRender();
    }

    tableRender() {
        let res =
            <div>
                <h1>チーム一覧</h1>
                <ButtonEx displayName="更新" onClick={this.state.search} />
                {this.state.modelList.map((model, index) =>
                    <div className="row rowItem" key="index">
                        {this.props.isSelect != null && this.props.isSelect &&
                            <div className="col-1">
                                <CheckBoxEx displayName="選択" onChecked={(val) => this.Select(model, val)} />
                            </div>
                        }
                        <div className="col-3">
                            <h2>{model.mTeam.teamName}</h2>
                            <p>内容：{model.mTeam.description}</p>
                        </div>
                        {model.players.map((player, pIndex) =>
                            <div className="col-3">
                                <img className="playerImage" src={'http://pbs.twimg.com/profile_images/' + player.imagePath} />
                                <h2>{player.playerName}</h2>
                                <p>内容：{player.description}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        return res;
    }

    async Execute() {
        let res = await this.SearchModel();
    };

    render() {
        return <div>{this.state.contents}</div>
    }
}


