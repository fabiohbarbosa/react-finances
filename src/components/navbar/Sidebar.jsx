import React, { Component } from 'react';

export class SidebarItem extends Component {
  constructor() {
    super();
    this.state = {
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
        if (child.type.name === 'SidebarItemSecondLvl') {
          this.setState( {containAnotherItemLvl: true} );
          break;
        }
      }
    }
  }

  arrow() {
    if (this.state.containAnotherItemLvl) {
      return (
        <span className="fa arrow"></span>
      )
    }
  }

  render() {
    return (
      <li>
        <a href={this.state.href}>
          <i className={this.props.icon}></i> { this.arrow() }
          {this.props.name}
        </a>
        {this.props.children}
      </li>
    );
  }
}

export class SidebarItemSecondLvl extends Component {
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

    if (this.props.children && this.props.children.length) {
      for (let i = 0 ; i < this.props.children.length ; i++) {
        let child = this.props.children[i];
        if (child.type.name === 'SidebarItemThirdLvl') {
          this.setState( {containAnotherItemLvl: true} );
          break;
        }
      }
    }
  }

  arrow() {
    if (this.state.containAnotherItemLvl) {
      return (
        <span className="fa arrow"></span>
      )
    }
  }

  render() {
    return (
      <ul className="nav nav-second-level">
        <li>
          <a href={this.state.href}>
            <i className={this.props.icon}></i> { this.arrow() }
            {this.props.name}
          </a>
          {this.props.children}
        </li>
      </ul>
    );
  }
}

export class SidebarItemThirdLvl extends Component {
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
    return (
      <ul className="nav nav-third-level">
        <li>
          <a href={this.state.href}>
            <i className={this.props.icon}></i>
            {this.props.name}
          </a>
          {this.props.children}
        </li>
      </ul>
    );
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
