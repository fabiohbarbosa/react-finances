import React, { Component } from 'react';

class DropDown extends Component {
  render() {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
          <i className={this.props.icon}></i> <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-messages">
          {this.props.children}
        </ul>
      </li>

    );
  }
}

class DropDownItemFooter extends Component {
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

class DropDownItemDivider extends Component {
  render() {
    return <li className="divider"></li>
  }
}

class DropDownItem extends Component {
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

export default class Navbar extends Component {
  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" role="navigation">
          <style>{"margin-bottom: 0"}</style>

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">Finanças</a>
          </div>

          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-messages">
                <DropDownItem title="John Smith" titleRight="Yesterday">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
                </DropDownItem>
                <DropDownItemDivider/>

                <DropDownItem title="John Smith" titleRight="Yesterday">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
                </DropDownItem>
                <DropDownItemDivider/>

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
              </ul>
            </li>





            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-tasks">
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 1</strong>
                        <span className="pull-right text-muted">40% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                          <style>{"margin-bottom: 0"}</style>
                          <span className="sr-only">40% Complete (success)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 2</strong>
                        <span className="pull-right text-muted">20% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <style>{"width: 20%"}</style>
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 3</strong>
                        <span className="pull-right text-muted">60% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                          <style>{"width: 60%"}</style>
                          <span className="sr-only">60% Complete (warning)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 4</strong>
                        <span className="pull-right text-muted">80% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                          <style>{"width: 80%"}</style>
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="text-center" href="#">
                    <strong>See All Tasks</strong>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-alerts">
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-comment fa-fw"></i> New Comment
                        <span className="pull-right text-muted small">4 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                          <span className="pull-right text-muted small">12 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">
                        <div>
                          <i className="fa fa-envelope fa-fw"></i> Message Sent
                            <span className="pull-right text-muted small">4 minutes ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">
                          <div>
                            <i className="fa fa-tasks fa-fw"></i> New Task
                              <span className="pull-right text-muted small">4 minutes ago</span>
                            </div>
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">
                            <div>
                              <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                <span className="pull-right text-muted small">4 minutes ago</span>
                              </div>
                            </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <a className="text-center" href="#">
                              <strong>See All Alerts</strong>
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                          <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                      </li>
                      <li className="divider"></li>
                      <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                  <ul className="nav" id="side-menu">
                    <li className="sidebar-search">
                      <div className="input-group custom-search-form">
                        <input type="text" className="form-control" placeholder="Search..."/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </span>
                      </div>
                    </li>
                    <li>
                      <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                      <ul className="nav nav-second-level">
                        <li>
                          <a href="flot.html">Flot Charts</a>
                        </li>
                        <li>
                          <a href="morris.html">Morris.js Charts</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
                    </li>
                    <li>
                      <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                      <ul className="nav nav-second-level">
                        <li>
                          <a href="panels-wells.html">Panels and Wells</a>
                        </li>
                        <li>
                          <a href="buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="notifications.html">Notifications</a>
                        </li>
                        <li>
                          <a href="typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="icons.html"> Icons</a>
                        </li>
                        <li>
                          <a href="grid.html">Grid</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                      <ul className="nav nav-second-level">
                        <li>
                          <a href="#">Second Level Item</a>
                        </li>
                        <li>
                          <a href="#">Second Level Item</a>
                        </li>
                        <li>
                          <a href="#">Third Level <span className="fa arrow"></span></a>
                          <ul className="nav nav-third-level">
                            <li>
                              <a href="#">Third Level Item</a>
                            </li>
                            <li>
                              <a href="#">Third Level Item</a>
                            </li>
                            <li>
                              <a href="#">Third Level Item</a>
                            </li>
                            <li>
                              <a href="#">Third Level Item</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                      <ul className="nav nav-second-level">
                        <li>
                          <a href="blank.html">Blank Page</a>
                        </li>
                        <li>
                          <a href="login.html">Login Page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

    )
  }
}
