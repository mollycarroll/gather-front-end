import axios from 'axios'
import React, { Component } from 'react'
import EditForm from './EditForm.jsx'
import Confirm from './Confirm.jsx'
import Explore from './Explore.jsx'
import { withRouter } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

class Event extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Creator: '',
			Title: '',
			Date: '',
			Category: '',
			Description: '',
			redirect: false,
			editForm: true
		}

	}

	componentDidMount() {
		console.log(this.props.match.params.id)
		console.log(this.state.redirect)
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
			[e.target.id]: e.target.value
		})
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
				window.location.reload(false)
			})
	}

	deleteEvent() {
		axios.delete(baseURL + '/events/' + this.props.match.params.id, {
			method: 'DELETE'
		}).then(res => {
			this.setState({ redirect: true })
			window.location.reload(false)
		})
	}

	toggleEditForm() {
		this.setState({ editForm: !this.state.editForm })
	}

	render() {
		const editForm = this.state.editForm
		return (
			<div className="container-fluid for-backgrounds full-screen">
				<Explore className="push"/>

				{/* <Explore cities = {this.props.cities}/> */}
				<h1 className="slight-push text-center my-4">Get the Deets</h1>
				<hr className="large push"></hr>

				<div className="container-fluid for-backgrounds">
					<section className="page-content-show d-flex flex-wrap justify-content-center slight-push">
						<div className="each-item-show d-flex flex-column rounded position-relative">
							<h5 className="each-title text-start">{ this.state.Title }</h5>
							<p className="each-name text-start"><strong>Added By:</strong> { this.state.Creator }</p>
							<p className="each-name text-start"><strong>Date(s):</strong> { this.state.Date }</p>
							<p className="rounded-pill position-absolute text-center pt-1">{ this.state.Category }<i className="fas fa-icons ml-2"></i></p>
							<i class="fas fa-pencil-alt position-absolute" onClick={ () => this.toggleEditForm() }></i>
							<p className="each-name text-start"><strong>Description:</strong> { this.state.Description }</p>
							<a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20300319%2F20300320&text=Let%27s%20Gather%21" target="_blank" rel="noreferrer" title="Save Event in my Calendar" ><i class="far fa-calendar-alt position-absolute pt-1"></i></a>
							<a href="https://www.facebook.com/sharer/sharer.php?u=https://mighty-savannah-40031.herokuapp.com/#/" target="_blank" rel="noreferrer">
								<i class="fab fa-facebook-f position-absolute pt-1"></i></a>
							<a href="https://twitter.com/intent/tweet?url=https://mighty-savannah-40031.herokuapp.com/#/&text=" target="-blank" rel="noreferrer"><i class="fab fa-twitter position-absolute pt-1"></i></a>
							<a href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://mighty-savannah-40031.herokuapp.com/#/%0A" target="_blank" rel="noreferrer"><i class="far fa-envelope position-absolute pt-1"></i></a>

							<Confirm className="container-fluid" onConfirm={() => {
								this.deleteEvent();
							}}
								body="Are you sure you want to delete this?"
							title="⚠️ Heads Up!">
								<i className="far fa-trash-alt position-absolute"></i>
							</Confirm>
						</div>
					</section>
				</div>
				<div className="for-backgrounds container-fluid full-screen">
					{ this.state.editForm &&
						<EditForm
							event={ this.state }
							handleChange={ (e) => this.handleChange(e) }
							handleSubmit={ (e) => this.handleSubmit(e) }
						/>
					}
				</div>

			</div>

		)
	}
}

export default withRouter(Event)