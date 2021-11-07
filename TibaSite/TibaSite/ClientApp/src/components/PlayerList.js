import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './PlayerList.css';

export class PlayerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modelList: [[]],
            contents: <div>Loading...</div>,
            search: () => {
                this.Execute();
            },
        };

    }

    componentDidMount() {
        this.Execute();
    }

    async SearchModel() {
        const data = await CommonMethods.getData('player', 'PlayerGetAll');
        await this.setState({ modelList: data });
        console.log(this.state.modelList);
        this.setState({ contents: this.tableRender() });
        return this.tableRender();
    }

    tableRender() {
        let res =
            <div>
                <h1>プレイヤー一覧</h1>
                <ButtonEx displayName="更新" onClick={this.state.search} />
                {this.state.modelList.map((model, index) =>
                    <div className="row rowItem">
                        <div className="col-2">
                            <img className="playerImage" src={'http://pbs.twimg.com/profile_images/' + model.imagePath} />
                        </div>
                        <div className="col-10">
                            <h2>{model.playerName}</h2>
                            <p>内容：{model.description}</p>
                        </div>

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


