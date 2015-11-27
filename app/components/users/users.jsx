"use strict";
import React from "react";
import UserLoad from "../user-load/user-load.jsx";
import UserOrder from "../user-order/user-order.jsx";

export default class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        var style={margin: "11px 8px 10px 8px"};
        return (
            <div style={style}>
                <UserLoad></UserLoad>
                <UserOrder></UserOrder>
            </div>
        )
    }
}