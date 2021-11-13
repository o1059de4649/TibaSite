import React, { Component, useState, setState } from 'react';
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

                
            <div>
                {(this.props.type == "text" || this.props.type == null || this.props.type == undefined) &&
                    <div className="cp_iptxt">
                        <label className="ef">
                            <div className="disp">
                                <span>{this.props.displayName}</span>
                            </div>
                            <div>
                                <input type="text" placeholder={this.props.displayName} value={this.props.value} onChange={e => this.handleOnChangeValue(e)} />
                            </div>
                        </label>
                    </div>
                }
                {this.props.type == "textarea" &&
                    <div className="cp_iptxt">
                        <label className="ef">
                            <div className="disp">
                                <span>{this.props.displayName}</span>
                            </div>
                            <div>
                            <textarea placeholder={this.props.displayName}
                                cols={this.props.cols}
                                onChange={e => this.handleOnChangeValue(e)}
                                rows={this.props.rows}
                                >
                                    {this.props.value}
                                </textarea>
                            </div>
                        </label>
                    </div>
                }
            </div>

        );
    }
}
