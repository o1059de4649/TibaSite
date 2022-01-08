import React, { Component, useState, setState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import '../components/Home.css'
export class UserProf extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (    
            <div>
                {this.props.isRight &&
					<div className="row mt-4">
						<div className="col-lg-9 col-12 order-lg-2">
							<div className="wf-balloon wf-balloon-left px-4">
								<h3 className="font-weight-bold">{this.props.playerName}</h3>
								<p className="font-weight-bold text-muted">{this.props.subTitle}</p>
								<p>
									{this.props.description}
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-12 order-lg-1">
							<img src={require('../media/img/' + this.props.imagePath)} alt="" className="img-fluid rounded-circle mt-2" />
						</div>
					</div>
                }

				{ !this.props.isRight &&
					<div className="row mt-4">
						<div className="col-lg-9 col-12">
							<div className="wf-balloon wf-balloon-right px-4">
								<h3 className="font-weight-bold">{this.props.playerName}</h3>
								<p className="font-weight-bold text-muted">{this.props.subTitle}</p>
								<p>
									{this.props.description}
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-12">
							<img src={require('../media/img/' + this.props.imagePath)} alt="" className="img-fluid rounded-circle mt-2" />
						</div>
					</div>
				}
            </div>

        );
    }
}
