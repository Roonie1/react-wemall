"use strict";

import React from "react";
import Header from "../header/header.jsx";
import Announce from "../announce/announce.jsx";
import Footer from "../footer/footer.jsx";
import Section from "../section/section.jsx";

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:"比文科技"
        }
    }

    render(){
        let style={
            display:"block"
        };
        return(
            <div style={style}>
                <Header></Header>
                <Announce content={this.state.content}></Announce>
                <Section></Section>
                <Footer></Footer>
            </div>
        )
    }
}