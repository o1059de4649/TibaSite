import React, { Component } from 'react';
import * as CommonMethods from '../common/commonMethods';

export class EntrySheet extends Component {
    static displayName = EntrySheet.name;
  
    constructor(props) {
        super(props);
        this.state = { playerName: "", twitterId: "", };
        this.execute = this.execute.bind(this);
    }

    async execute() {
        await CommonMethods.postData('entry/EntryExecute', this.state);
    }

    handleOnChangeUserId(e){
        this.setState({ twitterId : e.target.value });
    }

    handleOnChangeUserName(e) {
        this.setState({ playerName: e.target.value });
    }

    render() {
    return (
        <div>
        <h1>EntrySheet</h1>

        <p>以下の情報を入力してください。</p>
            
            <input type="text" className="btn btn-primary" value={this.state.twitterId} onChange={e => this.handleOnChangeUserId(e)} />
            <input type="text" className="btn btn-primary" value={this.state.playerName} onChange={e => this.handleOnChangeUserName(e)} />

        <button className="btn btn-primary" onClick={this.execute}> 決定</button>
        </div>
    );
    }
}
