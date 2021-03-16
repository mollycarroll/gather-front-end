import React, { Component } from 'react'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'heroku backend url here'
}

// state accessible as props

export default class EventCard extends Component {

	render() {
			return (
					<div>
            <h1 className="text-center">Check Out What's Happening</h1>
            <hr className="my-5 large"></hr>
            <div className="page-wrapper d-flex">
              <section className="page-content d-flex flex-wrap justify-content-center">

                { this.props.events.map(event => {
                  return (
                    <div className="each-item d-flex flex-column rounded position-relative" key={ event._id } >
                      <h5 className="each-title text-start">{ event.Title }</h5>
                      <p className="each-name text-start"><strong>Added By:</strong> { event.Creator }</p>
                      <p className="each-name text-start"><strong>Date(s):</strong> { event.Date }</p>

                      <p className="badge rounded-pill text-center position-absolute">{ event.Category }<i className="fas fa-glass-cheers ml-1"></i></p>



                </div>
                )
              })}

          </section>

        </div> <
			/div>


		)
	}
} {
	/* <h3>{ event.Title }</h3>
	<p>Creator: { event.Creator }</p>
	<p>Date: { event.Date }</p>
	<p>Category: { event.Category }</p> */
}