import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'your heroku backend url here'
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

    componentDidMount() {
		this.getCities()
	}

    getCities() {
        axios.get(baseURL + '/events/')
        .then(data => {
            console.log(data)
            this.setState({ cities: data.data})
        })
    }

    
    render() {
        return (
            <div></div>
        )
    }
};