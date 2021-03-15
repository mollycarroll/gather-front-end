import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

// state accessible as props

export default class EventCard extends Component {

    render() {
        return (
            <div>
                <p>Event Title: { this.state.title }</p>
            </div>
        )
    }
}
