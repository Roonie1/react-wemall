"use strict";

import React from "react";
import "./item.css";

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            icon:"ico_increase"
        }
    }

    _handleClickDetails(){

    }

    _handleClickAdd(){
        if (this.state.icon === "ico_reduce"){
            this.setState({icon:"ico_increase"});
        } else {
            this.setState({icon:"ico_reduce"});
        }
    }
    render(){
        return(
            <dd menu={this.props.data.id} className="dd">
                <div className="tupian">
                    <img src="" onClick={this._handleClickDetails.bind(this)}/>
                    <a onClick={this._handleClickAdd.bind(this)} className="add">
                        <p className="dish">{this.props.data.name}</p>
                        <p className="price2">{this.props.data.price}元/份</p>
                        <p><del>{this.props.data.oldPrice}元/份</del></p>
                    </a>
                    <a onClick={this._handleClickAdd.bind(this)}  className="reduce" style={{display:"block"}}>
                        <b className={this.state.icon}>减一份</b>
                    </a>
                </div>
            </dd>
        )
    }
}