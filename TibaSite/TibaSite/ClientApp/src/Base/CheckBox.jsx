import React, { Component, useState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './OtherInputs.css'
export class CheckBoxEx extends Component {
    constructor(props) {
        super(props);
        this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
    }

    handleOnChangeValue(e) {
        let value = e.target.checked;
        console.log(this.props);
        this.props.onChecked(value);
    }

    render() { 
        return (
            <div className="cp_ipcheck">
				<label>
                    {this.props.displayName}
                    <input type="checkbox" className="option-input02 checkbox" value={this.props.value} onClick={this.handleOnChangeValue}/>
				</label>
			</div>
        );
    }
}
