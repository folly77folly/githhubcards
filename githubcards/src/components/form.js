import React, { Component } from 'react'
import axios from 'axios'

export default class form extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : "",
        }
    }

    handleChange = (e)=>{
        this.setState ({
            value : e.target.value,
        })
    }

    handleSubmits = async(e)=>{
        console.log('hi');
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.value}`);
        // console.log(resp);
        this.props.onSubmit(resp.data);
        this.setState({
            value:'',
        })
    }    

    render() {
        return (
            <div style={{display:'flex',justifyContent:'center', marginBottom:'7px'}}>
                <form action="#" onSubmit={this.handleSubmits} style={{padding:'7px', backgroundColor:'grey',width:'350px'}}>
                    <input text="type" placeholder="Github Name" onChange= { this.handleChange } value ={this.state.value}/>
                    <button>Add User</button>
                </form>
            </div>
        )
    }
}
