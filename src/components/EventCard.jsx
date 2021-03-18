import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

export default class EventCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			events: []
		}

	}


	deleteEvent(id) {
		console.log('deleting a bookmark')

		axios.delete(baseURL + '/events/' + id, {
			method: 'DELETE'
		}).then(res => {
			const findIndex = this.state.events.findIndex(event => event._id === id)
			const copyEvents = [...this.state.events]
			copyEvents.splice(findIndex, 1)
			this.setState({ events: copyEvents })
		})
	}

	render() {
		return (
			<div>
				<div className="for-backgrounds">
					<h1 className="text-center">Check Out What's Happening</h1>
					<hr className="my-5 large"></hr>
				</div>
				<div className="page-wrapper d-flex">
					<section className="page-content d-flex flex-wrap justify-content-center">
						{ this.props.events.map(event => {
							return (
								<div className="each-item d-flex flex-column rounded position-relative" key={ event._id } >
									<Link to={ event._id } className="router-link"><h5 className="each-title text-start">{ event.Title }</h5></Link>
									<p className="each-name text-start"><strong>Added By:</strong> { event.Creator }</p>
									<p className="each-name text-start"><strong>Date:</strong> <Moment format="MM/DD/YYYY">{ event.Date }</Moment></p>

                  <p className="badge rounded-pill text-center position-absolute">{ event.Category }<i className="fas fa-glass-cheers ml-1"></i></p>
                </div>
              )
            })}
          </section>
        </div>
		</div>
		)
	}

} 
