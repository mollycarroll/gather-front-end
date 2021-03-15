import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

export default class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.event._id,
            creator: this.props.event.creator,
            title: this.props.event.title,
            date: this.props.event.date,
            category: this.props.event.category
        }
    }

    render() {
        return (
            <div>
                <p>Event Title: { this.state.title }</p>
            </div>
        )
    }
}
