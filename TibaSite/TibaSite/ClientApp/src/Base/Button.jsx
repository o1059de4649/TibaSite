import React, { Component, useState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './Button.css'
export class ButtonEx extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div>
                <button onClick={this.props.onClick} href="" class="btn btn-border">{this.props.displayName}</button>
            </div>
        );
    }
}
