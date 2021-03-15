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
                { this.props.events.map(event => {
                    return (
                        <div key={ event._id } >
                            <h3>{ event.Title }</h3>
                            <p>Creator: { event.Creator }</p>
                            <p>Date: { event.Date }</p>
                            <p>Category: { event.Category }</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
