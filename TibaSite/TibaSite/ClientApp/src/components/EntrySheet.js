import React, { Component, useState, useRef } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { PlayerList } from './PlayerList';

export function EntrySheet(props){
    const [pin, setPin] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [description, setDescription] = useState("");
    const [session, setSession] = useState("");
    const playerListRef = useRef(null);

    let getPin = async function () {
        //別プラウザ起動認証
        var session = await CommonMethods.postData('twitter/OpenTwitter');
        setSession(session);
    }

    let execute = async function () {
        if (pin == "") return;
        let stateTwitter = {
            pin: pin,
            session: session,
            playerName: playerName,
        }
        //トークン取得
        var user = await CommonMethods.postData('twitter/GetTokens', stateTwitter);

        let stateEntry = {
            twitterId: user.id,
            playerName: playerName,
            description: user.description,
        }

        //確認
        var res = await CommonMethods.postData('entry/EntryExecute', stateEntry);
        //再度描画
        playerListRef.current.Execute();
        setPin("");
    }

    return (
        <div>
            <h1>EntrySheet</h1>

            <p>以下の情報を入力してください。</p>
            <button className="btn btn-primary" onClick={getPin}> PINを発行</button>
            <InputEx type="text" displayName="PIN" className="btn btn-primary" onSync={setPin} />
            <InputEx type="text" displayName="TwitterID" className="btn btn-primary" onSync={setPlayerName} />
            <button className="btn btn-primary" onClick={execute}> 決定</button>


            <PlayerList ref={playerListRef}/>
        </div>
    );
    
}
