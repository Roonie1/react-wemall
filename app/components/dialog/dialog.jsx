"use strict";
import React from "react";
import "./dialog.css";

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showDialog:this.props.showDialog
        }
    }

    _handleClick(){
        this.setState(!this.state.showDialog);
    }

    render(){
        let style= {
            display: "block"
        }
        if (!this.state.showDialog){
            style={
                display:"none"
            }
        }
        return(
            <div className="dialog" style={style} onClick={this._handleClick.bind(this)}>
                <div className="popup">
                    <div className="imgPopup">
                        <img src=""/>
                            <h3></h3>
                            <p className="jianjie"></p>
                    </div>
                </div>
                <a className="close" onClick={this._handleClick.bind(this)}>X</a>
            </div>
        )
    }
}