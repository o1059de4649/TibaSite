import React, { Component, setState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './Home.css'
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            movie1:'\\ClientApp\\src\\media\\SampleMovie.mp4'
        };
    }

    async componentDidMount() {

    }

    async getMemory(path) {

    };

    render () {
      return (
          <div className="mainV">
              <h1>ニートプログラマ千葉の部屋</h1>
              <video autoPlay loop muted >
                  <source src={CommonMethods.memoryMethodURL + this.state.movie1} type="video/mp4" />
              </video>
          </div>
      );
    }
}
