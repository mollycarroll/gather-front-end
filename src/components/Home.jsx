import React, { Component } from 'react'
import EventCard from './EventCard'
import Footer from './Footer.jsx'

export default class Home extends Component {
	render() {
		return (

			<div className="full-screen">
        <div className="container-fluid px-0 mb-5">
          <div className="hero">
            <p className="text-center hero-text mb-0 d-flex justify-content-center real">G a t h e r</p>
            <p className="text-center hero-text reflection d-flex justify-content-center">G a t h e r</p>
          </div>
        </div>
        <EventCard events={ this.props.events }/>
				<Footer />
  			</div>
		)
	}
}