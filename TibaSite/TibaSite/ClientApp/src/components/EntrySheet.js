import React, { Component, useState, useRef } from 'react';
import * as CommonMethods from '../common/commonMethods';
import { InputEx } from '../Base/Input';
import { ButtonEx } from '../Base/Button';
import { PlayerList } from './PlayerList';

export function EntrySheet(props){
    const [playerName, setPlayerName] = useState("");
    const [res, setRes] = useState("");
    const playerListRef = useRef(null);

    return (
        <div>
            <h1>EntrySheet</h1>
            <PlayerList ref={playerListRef}/>
        </div>
    );
    
}
