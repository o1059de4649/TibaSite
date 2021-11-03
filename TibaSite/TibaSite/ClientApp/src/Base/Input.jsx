import React, { Component, useState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './Input.css'
export class InputEx extends Component {
    constructor(props) {
        super(props);
    }

    handleOnChangeValue(e) {
        let value = e.target.value;
        this.props.onSync(value);
    }

    render() { 
        return (
            <div className="cp_iptxt">
                <label className="ef">
                    <input type="text" placeholder={this.props.displayName} value={this.props.value} onChange={e => this.handleOnChangeValue(e)} />
	                </label>
                </div>
        );
    }
}
