import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './PlayerList.css';
import { CheckBoxEx } from '../Base/CheckBox';

export class PlayerList extends Component {

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
    async Select(model, isSelect) {
        if (isSelect) {
            let list = this.state.selectModelList;
            list.push(model);
            await this.setState({ selectModelList: list });
            if (this.props.onSync != null)this.props.onSync(list);
        } else {
            let list = this.state.selectModelList;
            list.splice(list.findIndex(x => x == model),1);
            await this.setState({ selectModelList: list });
            if (this.props.onSync != null)this.props.onSync(list);
        }
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
                    <div className="rowItem" key={index}>
                        {this.props.isSelect &&
                            <div>
                                <CheckBoxEx displayName="選択" onChecked={(val) => this.Select(model, val)} />
                            </div>
                        }
                        <div className="row">
                            <div className="col-12">
                                <img className="playerImage" src={'http://pbs.twimg.com/profile_images/' + model.imagePath} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4>{model.playerName}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>内容：{model.description}</p>
                            </div>
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


