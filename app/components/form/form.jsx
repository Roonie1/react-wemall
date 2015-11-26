"use strict";
import React from "react";
import "./form.css";

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <form>
                <div className="contact-info">
                    <ul>
                        <li className="title">联系信息</li>
                        <li>
                            <table style={{padding: "0", margin: "0", width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td width="80px"><label className="ui-input-text">联系人：</label></td>
                                    <td>
                                        <div className="ui-input-text">
                                            <input type="text" className="ui-input-text"/>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td width="80px"><label className="ui-input-text">联系电话：</label></td>
                                    <td>
                                        <div className="ui-input-text">
                                            <input type="tel" className="ui-input-text"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="80px"><label className="ui-input-text">支付方式：</label></td>
                                    <td colspan="2"><select className="selectstyle">
                                        <option value="0">货到付款</option>
                                        <option value="1">支付宝在线支付</option>
                                        <option value="2">微信支付</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td width="80px"><label className="ui-input-text">地址：</label></td>
                                    <td><textarea className="ui-input-text"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="80px"><label className="ui-input-text">备注：</label></td>
                                    <td><textarea className="ui-input-text"></textarea></td>
                                </tr>
                                </tbody>
                            </table>

                            <div className="footReturn">
                                <a className="submit">确定提交</a>
                            </div>

                        </li>
                    </ul>
                </div>
            </form>
        )
    }
}
