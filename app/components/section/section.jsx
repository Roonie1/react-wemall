"use strict";
import React from "react";
import Item from "../item/item.jsx";
import Dialog from "../dialog/dialog.jsx";
import "./section.css";

export default class Session extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: [
                {
                    id:1,
                    name:"蔬菜",
                    price:1,
                    oldPrice:1.50,
                    content:"好吃"
                },
                {
                    id:1,
                    name:"水果",
                    price:10,
                    oldPrice:11,
                    content:"好吃"
                }
            ]

        }
    }

    render(){
        let Items =[];
        for(let i=0;i<this.state.data.length;i++){
            Items.push(<Item data={this.state.data[i]}></Item>)
        }
        return(
            <section className="section">
                <section className="list listimg">
                    <dl>
                        <dt>菜单</dt>
                        <div className="ccbg">
                            {Items}
                        </div>
                    </dl>
                </section>
                <Dialog showDialog={false}></Dialog>
            </section>
        )
    }
}