import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";

export class Contact extends Component {
    render(){
        return(
            <div>
                <h1>연락처</h1>
                <p>
                    연락처들어오는곳
                </p>
                <ContactDetails></ContactDetails>
            </div>
        );
    }
}