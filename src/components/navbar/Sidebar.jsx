import React, { Component } from 'react';

export class SidebarItem extends Component {
  constructor() {
    super();
    this.state = {
      lvl: 1,
      href: '' ,
      containAnotherItemLvl: false
    };
  }

  componentDidMount() {
    if (this.props.href) {
      this.setState( {href: this.props.href} );
    } else {
      this.setState( {href: '#'} ); // default href
    }

    if (this.props.children && this.props.children.length) {
      for (let i = 0 ; i < this.props.children.length ; i++) {
        let child = this.props.children[i];
        if (child.type.name === 'SidebarItem') {
          this.setState( {containAnotherItemLvl: true} );
          break;
        }
      }
    }
  }

  mainLvl() {
    if (this.props.lvl > 0) {
      return;
    }
    return (
      <li>
        <a href={this.state.href}>
          <i className={this.props.icon}></i>
          { this.state.containAnotherItemLvl ? <span className="fa arrow"></span> : null }
          {this.props.name}
        </a>
        {this.props.children}
      </li>
    );
  }

  style() {
    let px = 15 + this.props.lvl * 10;
    return { 'paddingLeft': px };
  }

  render() {
    if (!this.props.lvl || this.props.lvl < 0) {
      return (
        <li>
          <a href={this.state.href}>
            <i className={this.props.icon}></i>
            { this.state.containAnotherItemLvl ? <span className="fa arrow"></span> : null }
            {this.props.name}
          </a>
          {this.props.children}
        </li>
      );
    } else {
      return (
        <ul className="nav nav-second-level">
          <li>
            <a href={this.state.href} style={this.style()}>
              <i className={this.props.icon}></i>
              { this.state.containAnotherItemLvl ? <span className="fa arrow"></span> : null }
              {this.props.name}
            </a>
            {this.props.children}
          </li>
        </ul>
      )
    }
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
