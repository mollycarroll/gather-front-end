import React, { Component } from 'react'
import EventCard from './EventCard'
import FormTest from './FormTest'

export default class Home extends Component {
	render() {
		return (

			<div className="for-backgrounds">
        <div className="container-fluid px-0 mb-5 for-backgrounds">
          <div className="hero">
            <p className="text-center hero-text mb-0 d-flex justify-content-center real">Gather</p>
            <p className="text-center hero-text reflection d-flex justify-content-center">Gather</p>
          </div>
        </div>
				<FormTest />
        <EventCard events={ this.props.events }/>
  			</div>
		)
	}
}