import React, { Component } from 'react'
import EventCard from './EventCard'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'heroku backend url here'
}

export default class Home extends Component {
    render() {
        return (
            <div>
                <EventCard events={ this.props.events }/>
            </div>
        )
    }
}
