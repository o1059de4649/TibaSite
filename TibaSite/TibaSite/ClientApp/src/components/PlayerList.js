import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';

export class PlayerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: ['TwitterID', '名称', '説明', '画像'],
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
                <ButtonEx displayName="検索" onClick={this.state.search} />
                <TableEx type="text" columns={this.state.columns} modelList={this.state.modelList} />
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


