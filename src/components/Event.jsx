import axios from 'axios'
import React, { Component } from 'react'
import EditForm from './EditForm.jsx'

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
			Creator: '',
			Title: '',
			Date: '',
			Category: '',
			Description: '',
      redirect: false
		}

	}

  // refresh data in component on redirect -- research
  // react router docs
  // get data to update on redirect
  // data is loaded on componentDidMount but not reloaded

	componentDidMount() {
		console.log(this.props.match.params.id)
		axios.get(`${baseURL}/events/${this.props.match.params.id}`)
			.then(response => {
				this.setState({
					Creator: response.data.Creator,
					Title: response.data.Title,
					Date: response.data.Date,
					Category: response.data.Category,
					Description: response.data.Description
				})
			})
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		const pack = {
			Creator: this.state.Creator,
			Title: this.state.Title,
			Date: this.state.Date,
			Category: this.state.Category,
			Description: this.state.Description
		}

        axios.put(`${baseURL}/events/${this.props.match.params.id}`, pack)
        .then(response => {
          this.setState({ redirect: true })
        })
    }

    deleteEvent() {
      axios.delete(baseURL + '/events/' + this.props.match.params.id, {
        method: 'DELETE'
      }).then(res => {
        this.setState({ redirect: true })
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
              <h5 className="each-title text-start">{ this.state.Title }</h5>
              <p className="each-name text-start"><strong>Added By:</strong> { this.state.Creator }</p>
              <p className="each-name text-start"><strong>Date(s):</strong> { this.state.Date }</p>
              <p className="badge rounded-pill text-center position-absolute">{ this.state.Category }<i className="fas fa-glass-cheers ml-1"></i></p>
              <p className="each-name text-start"><strong>Description:</strong> { this.state.Description }</p>
              {/* <i className="far fa-trash-alt position-absolute" onClick={() => this.deleteEvent()}></i> */}
            </div>

          </section>

        </div>

        <EditForm
            event={ this.state }
            handleChange={ (e) => this.handleChange(e) }
            handleSubmit={ (e) => this.handleSubmit(e) }
        />

      </div>
		)
	}
}