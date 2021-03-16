import React, { Component } from 'react'
import EventCard from './EventCard'

export default class Home extends Component {
    render() {
        return (
            <div>
                <EventCard events={ this.props.events }/>
            </div>
        )
    }
}
