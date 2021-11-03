import React, { Component, useState, useRef } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { PlayerList } from './PlayerList';

export function EntrySheet(props){
    const [playerName, setPlayerName] = useState("");
    const [twitterId, setTwitterId] = useState("");
    const playerListRef = useRef(null);

    let execute = async function() {
        let state = {
            playerName: playerName,
            twitterId: twitterId,
        };
        var res = await CommonMethods.postData('entry/EntryExecute', state);

        console.log(playerListRef);
        //再度描画
        playerListRef.current.Execute();
    }

    return (
        <div>
            <h1>EntrySheet</h1>

            <p>以下の情報を入力してください。</p>
            
            <InputEx type="text" displayName="TwitterId" className="btn btn-primary" onSync={setPlayerName} />
            <InputEx type="text" displayName="プレイヤー名" className="btn btn-primary" onSync={setTwitterId} />

            <button className="btn btn-primary" onClick={execute}> 決定</button>

            <PlayerList ref={playerListRef}/>
        </div>
    );
    
}
