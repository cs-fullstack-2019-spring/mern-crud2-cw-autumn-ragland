import React, { Component } from 'react';

class UpdateRSVP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rsvp_person: '',
            rsvp_going: false
        };
        console.log(this.props.editData.rsvp_person)
    }
    //update event handlers
    updatePerson = (e) => {
        this.setState({rsvp_person:e.target.value})
    };

    updateGoing = () => {
        this.setState({rsvp_going:true})
    };
    //from submit event handler
    submitForm = (e) => {
        e.preventDefault();
        let RSVP = {
            rsvp_person:this.state.rsvp_person,
            rsvp_going:this.state.rsvp_going,
        };
        return fetch('/rsvp/' + this.props.editData._id,{
            method: 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body:JSON.stringify(RSVP)
        });

    };
    //render form
    render() {
        return (

            <form onSubmit={this.submitForm}>
                <div>
                    <label>Name: </label>
                    <input type="text"  placeholder={this.props.editData.rsvp_person} value={this.state.rsvp_person} onChange={this.updatePerson}/>
                </div>
                <div>
                    <label>Going: </label>
                    <input type="checkbox" value={this.state.rsvp_going} onClick={this.updateGoing}/>
                </div>
                <div>
                    <input type="submit" value={'Update'}/>
                </div>
            </form>
        );
    }
}

export default UpdateRSVP;