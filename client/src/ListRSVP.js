import React, { Component } from 'react';
import UpdateRSVP from "./UpdateRSVP";

class ListRSVP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rsvp:[],
            editData:{},
            editing:false,
        }
    }
    //pass data on load
    componentDidMount() {
        fetch('/rsvp')
            .then(data => data.json())
            .then(jsonData => this.setState({rsvp:jsonData}))
    }
    //update event handler
    updateButton = (e) => {
        this.setState({editing:true});
        fetch("/rsvp/" + e.target.value)
            .then(data=>data.json())
            .then(response=>this.setState({editData:response}))
            .then(()=>console.log(this.state.editData))
            .then(()=>console.log(this.state.editData.rsvp_person))

    };
    //delete event handler
    deleteButton = (e) => {
        console.log('delete');
        return fetch('/rsvp',{
            method: 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode:'cors',
            body:JSON.stringify({_id:e.target.value})
        })
    };
    //structure and render add items and conditional form
    render() {

        let mapRSVP = this.state.rsvp.map((eachRSVP)=>{
            return(
                    <div key={eachRSVP._id}>
                        <hr/>
                        <p>Person:{eachRSVP.rsvp_person}</p>
                        <p>Going:{eachRSVP.rsvp_going + ' '}</p>
                        <button value={eachRSVP._id} onClick={this.updateButton}>Update</button>
                        <button value={eachRSVP._id} onClick={this.deleteButton}>Delete</button>
                    </div>
            )
        });

        let showEdit = '';
        if(this.state.editing){
            showEdit=<UpdateRSVP editData={this.state.editData}/>
        }
        else{
            showEdit=''
        }

        return (
            <div className="App">
                {showEdit}
                {mapRSVP}
            </div>
        );
    }
}

export default ListRSVP;