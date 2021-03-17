import React, { Component } from 'react'
import EventCard from './EventCard'

export default class Home extends Component {
	render() {
		return (

			<div>
        <div className="container-fluid px-0 mb-5">
          <div className="hero">
            <p className="text-center hero-text mb-0 d-flex justify-content-center real">Gather</p>
            <p className="text-center hero-text reflection d-flex justify-content-center">Gather</p>
          </div>
        </div>

        <EventCard events={ this.props.events }/>

            </div>
		)
	}
}