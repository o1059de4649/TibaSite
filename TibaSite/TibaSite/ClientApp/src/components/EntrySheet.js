import React, { Component, useState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';

export function EntrySheet(props){
    const [playerName, setPlayerName] = useState("");
    const [twitterId, setTwitterId] = useState("");

    let execute = async function() {
        let state = {
            playerName: playerName,
            twitterId: twitterId,
        };
        await CommonMethods.postData('entry/EntryExecute', state);
    }

    return (
        <div>
        <h1>EntrySheet</h1>

        <p>以下の情報を入力してください。</p>
            
            <InputEx type="text" displayName="TwitterId" className="btn btn-primary" onSync={setPlayerName} />
            <InputEx type="text" displayName="プレイヤー名" className="btn btn-primary" onSync={setTwitterId} />

        <button className="btn btn-primary" onClick={execute}> 決定</button>
        </div>
    );
    
}
