"use strict";
import React from "react";
import Announce from "../announce/announce.jsx";
import Section from "../section/section.jsx";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            announce:"比文科技"
        }
    }

    render(){
        return(
            <div>
                <Announce content={this.state.announce}></Announce>
                <Section></Section>
            </div>
        )
    }
}