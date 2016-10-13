import React, { Component } from 'react';

import './navbar.css';

import {
  DropDown,
  DropDownItemFooter,
  DropDownItemDivider,
  DropDownItem
} from './DropDown';

import {
  SidebarItem,
  Sidebar
} from './Sidebar';

class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">{this.props.title}</a>
      </div>
    );
  }
}

export default class Navbar extends Component {
  style() {
    return { 'marginBottom': '0px' };
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={this.style()}>
        <NavbarHeader title="Finanças"/>

        <DropDown icon="fa fa-envelope fa-fw">
          <DropDownItem title="John Smith" titleRight="Yesterday">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
          </DropDownItem>
          <DropDownItemDivider/>

          <DropDownItem title="John Smith" titleRight="Yesterday">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
          </DropDownItem>
          <DropDownItemDivider/>

          <DropDownItemFooter>
            Read All Messages
          </DropDownItemFooter>
        </DropDown>

        <Sidebar>
          <SidebarItem icon="fa fa-dashboard fa-fw" name="Dashboard" href="index.html"/>
          <SidebarItem icon="fa fa-bar-chart-o fa-fw" name="Charts"/>
        </Sidebar>
      </nav>
    );
  }
}
