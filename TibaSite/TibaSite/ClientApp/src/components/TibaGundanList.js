import React, { Component, useState, setState, useEffect } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { TableEx } from '../Base/Table';
import { ButtonEx } from '../Base/Button';
import './TeamList.css';
import { UserProf } from '../Base/UserProf';

export class TibaGundanList extends Component {

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
    }

    componentDidMount() {
        this.Execute();
    }

    async SearchModel() {
        let data = null;
        data = await CommonMethods.getData('TibaGundan', 'TibaGundanGetAll');

        await this.setState({ modelList: data });
        this.setState({ contents: this.tableRender() });
        return this.tableRender();
    }

    tableRender() {
        let res =
            <div>
                <h1>千葉軍団のみなさん</h1>
                {this.state.modelList.map((model, index) =>
                    <UserProf
                        playerName={model.playerName}
                        subTitle={model.subTitle}
                        description={model.description}
                        imagePath={model.imagePath}
                        isRight={ index % 2 == 0  }
                    />
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


