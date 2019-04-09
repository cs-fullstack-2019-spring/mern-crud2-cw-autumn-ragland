import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class CreateRSVP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rsvp_person: '',
            rsvp_going: false
        }
    }
    //update event handlers
    updatePerson = (e) => {
        this.setState({rsvp_person:e.target.value})
    };

    updateGoing = (e) => {
        this.setState({rsvp_going:true})
    };
    //form submission event handler
    submitForm = (e) => {
        e.preventDefault();
        let RSVP = {
            rsvp_person:this.state.rsvp_person,
            rsvp_going:this.state.rsvp_going,
        };
        return fetch('/rsvp',{
            method: 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body:JSON.stringify(RSVP)
        })

    };
    //render form
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={this.state.rsvp_person} onChange={this.updatePerson}/>
                </div>
                <div>
                    <label>Going: </label>
                    <input type="checkbox" value={this.state.rsvp_going} onClick={this.updateGoing}/>
                </div>
                <div>
                    <input type="submit" value={'Create'}/>
                </div>
            </form>
        );
    }
}

export default CreateRSVP;