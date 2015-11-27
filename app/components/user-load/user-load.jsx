"use strict";
import React from "react";
import "./user-load.css";

export default class UserLoad extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="page_tag_load">
                <div className="btn-group">
                    <div className="del">
                        <img src="/app/public/img/ajax-loader.gif" alt="loader"/>正在获取订单...
                    </div>
                </div>
            </div>
        )
    }
}