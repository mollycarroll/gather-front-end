import axios from 'axios'
import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

export default class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {
                creator: '',
                title: '',
                date: '',
                category: '',
                description: ''
            }
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`${baseURL}/events/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ event: response.data })
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.event.Title }</h1>
                <h3>Creator: { this.state.event.Creator }</h3>
                <p>Date: { this.state.event.Date }</p>
                <p>Category: { this.state.event.Category }</p>
                <p>Description: { this.state.event.Description }</p>
            </div>
        )
    }
}
