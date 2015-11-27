"use strict";
import React from "react";
import "./user-order.css";

export default class UserOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <ul className="round">
                <table width="100%" border="0" cellPadding="0" cellSpacing="0" class="cpbiaoge">
                    <tr>
                        <th>订单编号</th>
                        <th class="cc">订单金额</th>
                        <th class="cc">支付状态</th>
                        <th class="cc">发货状态</th>
                    </tr>
                    <tbody>

                    </tbody>
                </table>
            </ul>
        )
    }

}