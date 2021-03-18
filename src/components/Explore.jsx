import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}



export default class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            City: '',
            State: '',
            Activity: ''
        }
    }

    
    render() {
        return (
            <div>
                <h3>Gather Here: </h3>
            </div>
        )
    }
};