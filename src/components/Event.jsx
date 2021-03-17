import axios from 'axios'
import React, { Component } from 'react'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
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
        <h1 className="text-center">Get the Deets</h1>
        <hr className="my-5 large"></hr>
        <div className="page-wrapper d-flex">
          <section className="page-content d-flex flex-wrap justify-content-center">
            <div className="each-item d-flex flex-column rounded position-relative">
              <h5 className="each-title text-start">{ this.state.event.Title }</h5>
              <p className="each-name text-start"><strong>Added By:</strong> { this.state.event.Creator }</p>
              <p className="each-name text-start"><strong>Date(s):</strong> { this.state.event.Date }</p>
              <p className="badge rounded-pill text-center position-absolute">{ this.state.event.Category }<i className="fas fa-glass-cheers ml-1"></i></p>
              <p className="each-name text-start"><strong>Description:</strong> { this.state.event.Description }</p>
            </div>

          </section>

        </div>

      </div>
		)
	}
}