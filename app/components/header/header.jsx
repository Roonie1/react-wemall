"use strict";
import React from "react";
import Menu from "../menu/menu.jsx";
import "./header.css";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showMenu:false
        };
    }

    _handleClick(){
        this.setState({showMenu:!this.state.showMenu});
    }
    render(){
        return(
            <div className="menu_header">
                <div className="menu_topbar">
                    <div className="sort sort_on">
                        <a>比文科技</a>
                        <Menu handleClickShow={this.state.showMenu}></Menu>
                    </div>
                    <a className="head_btn_right" onClick={this._handleClick.bind(this)}>
                        <i className="menu_header_home"></i>
                    </a>
                </div>
            </div>
        )
    }
}