import React, { Component } from 'react';

export class SidebarItem extends Component {
  constructor() {
    super();
    this.state = { href: '' };
  }

  componentDidMount() {
    if (this.props.href) {
      this.setState( {href: this.props.href} );
    } else {
      this.setState( {href: '#'} ); // default href
    }
  }

  render() {
    return <li> <a href={this.state.href}><i className={this.props.icon}></i> {this.props.name}</a> </li>
  }
}

export class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
}
