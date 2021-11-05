import React, { Component, useState, useRef } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { ButtonEx } from '../Base/Button';
import { PlayerList } from './PlayerList';

export function EntrySheet(props){
    const [playerName, setPlayerName] = useState("");
    const [res, setRes] = useState("");
    const playerListRef = useRef(null);

    let execute = async function () {
        let stateTwitter = {
            playerName: playerName,
        }
        setRes("ユーザー検索中...");
        //トークン取得
        var user = await CommonMethods.postData('twitter/GetTokens', stateTwitter);
        if (user.response == "No") {
            setRes("存在しないユーザーです。");
            return;
        }
        let stateEntry = {
            twitterId: user.id,
            playerName: playerName,
            description: user.description,
        }
        setRes("ユーザー確認中...");
        //確認
        var res = await CommonMethods.postData('entry/EntryExecute', stateEntry);
        setRes(res.response);
        //再度描画
        playerListRef.current.Execute();
    }

    return (
        <div>
            <h1>EntrySheet</h1>

            <p>以下の情報を入力してください。</p>
            <InputEx type="text" displayName="TwitterID" className="btn btn-primary" onSync={setPlayerName} />
            <ButtonEx onClick={execute} displayName="決定" />
            <span>{res}</span>
            <PlayerList ref={playerListRef}/>
        </div>
    );
    
}
