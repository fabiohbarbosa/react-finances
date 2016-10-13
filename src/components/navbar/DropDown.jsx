import React, { Component } from 'react';

export class DropDown extends Component {
  render() {
    return (
      <ul className="nav navbar-top-links navbar-right">
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <i className={this.props.icon}></i> <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu dropdown-messages">
            {this.props.children}
          </ul>
        </li>
      </ul>
    );
  }
}

export class DropDownItemFooter extends Component {
  render() {
    return (
      <li>
        <a className="text-center" href="#">
          <strong>{this.props.children} &nbsp;</strong>
          <i className="fa fa-angle-right"></i>
        </a>
      </li>
    );
  }
}

export class DropDownItemDivider extends Component {
  render() {
    return <li className="divider"></li>
  }
}

export class DropDownItem extends Component {
  render() {
    return (
      <li>
        <a href="#">
          <div>
            <strong>{this.props.title}</strong>
            <span className="pull-right text-muted">
              <em>{this.props.titleRight}</em>
            </span>
          </div>
          <div>{this.props.children}</div>
        </a>
      </li>
    );
  }
}

/*
export DropBox;
export DropDownItemFooter;
export DropDownItemDivider;
export DropDownItem;
*/
