import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './TournamentList.css';

export class TournamentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modelList: null,
            contents: <div>Loading...</div>,
            search: () => {
                this.Search();
            },
            entry: () => {
                this.Entry();
            },
        };

    }

    componentDidMount() {
        this.Search();
    }

    async SearchModel() {
        const data = await CommonMethods.getData('tournament', 'TournamentGetAll');
        await this.setState({ modelList: data });
        console.log(this.state.modelList);
        this.setState({ contents: this.tableRender() });
        return this.tableRender();
    }

    async memory(path) {
        return await CommonMethods.getMemoryStream(path);
    }

    tableRender() {
        let res =
            <div>
                <h1>大会一覧</h1>
                <ButtonEx displayName="更新" onClick={this.state.search} />
                {this.state.modelList.map((model, index) =>
                    <div className="row rowItem">
                        <div className="col-4">
                            <img className="image" src={require('../media/tournament/' + model.imagePath)} />
                        </div>
                        <div className="col-8">
                            <h2>{model.title}</h2>
                            <p> 開催日時：{model.datetime}</p>
                            <p>内容：{model.content}</p>
                            <ButtonEx displayName="この大会に参加" onClick={this.state.entry} />
                        </div>

                    </div>

                )}
            </div>
        return res;
    }

    async Search() {
        let res = await this.SearchModel();
    };
    async Entry() {

    };

    render() {
        return <div>{this.state.contents}</div>
    }
}


