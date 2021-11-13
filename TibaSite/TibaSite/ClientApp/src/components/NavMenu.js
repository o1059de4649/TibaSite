import React, { Component, useState, setState, useEffect } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as CommonMethods from '../common/commonMethods';
import './NavMenu.css';
import { ButtonEx } from '../Base/Button';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

    constructor (props) {
    super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            player: null,
            logout: () => { this.Logout(); },
        };
        this.Logout = this.Logout.bind(this);
    }

    toggleNavbar () {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }

    async Logout(value) {
        await CommonMethods.postData('login/LogoutExecute', '');
        window.location = "../";
    }

    async componentDidMount() {
        console.log('log');
        var player = await CommonMethods.postData('common/GetPlayer','');
        this.setState({
            player: player,
        });
    }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">TibaSite</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        {this.state.player == null &&
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                                </NavItem>
                            </ul>
                        }
                        {this.state.player != null &&
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/team-form">CreateTeam</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/team-list">TeamList</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/tournament">Tournament</NavLink>
                                </NavItem>
                                <ButtonEx displayName="Logout" onClick={this.state.logout} />
                                <NavItem>
                                    <img className="" src={"http://pbs.twimg.com/profile_images/" + this.state.player.imagePath} />
                                    <span>{this.state.player.playerName}</span>
                                </NavItem>
                            </ul>
                        }
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
