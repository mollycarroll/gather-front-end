import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
// eslint-disable-next-line
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line
import Select from 'react-select';
// eslint-disable-next-line
import Moment from 'moment';

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

export default class NewForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			creator: '',
			title: '',
			date: '',
			category: '',
			description: '',
			redirect: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.dropdownChange = this.dropdownChange(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	dropdownChange(e) {
		this.setState({
			category: e.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		axios.post(baseURL + '/events', {
				Creator: this.state.creator,
				Title: this.state.title,
				Date: this.state.date,
				Category: this.state.category,
				Description: this.state.description
			})
			.then((response) => {

				this.props.handleAddEvent(response.data)
				this.setState({
					creator: '',
					title: '',
					date: '',
					category: '',
					description: '',
					redirect: true
				})

			})
			.catch(function(error) {
				console.log(error)
			})
	}



	render() {
		if(this.state.redirect) {
			return (<Redirect to='/' />)
		}

		return (
			<div className="container-fluid full-screen">
				<h1 className="slight-push text-center my-4">What's Goin' On?</h1>
				<hr className="large push"></hr>

				<Form className="new-form" onSubmit={ (event) => this.handleSubmit(event) }>
					<Form.Group className="pt-4 ml-4">
						<Form.Row>
							<Form.Label column lg={3} htmlFor='creator'>Name:</Form.Label>
							<Col lg={8}>
								<Form.Control type='text' name='creator' id='creator' onChange={ this.handleChange } />
							</Col>
						</Form.Row>
					</Form.Group>
					<Form.Group className="ml-4">
						<Form.Row>
							<Form.Label column lg={3} htmlFor='title'>Event Title:</Form.Label>
							<Col lg={8}>
								<Form.Control type='text' name='title' id='title' onChange={ this.handleChange } />
							</Col>
						</Form.Row>
					</Form.Group>
					<Form.Group className="ml-4">
						<Form.Row>
							<Form.Label column lg={3} htmlFor='date'>Date:</Form.Label>
							<Col lg={8}>
								<Form.Control type='date' name='date' id='date' onChange={ this.handleChange } />
							</Col>
						</Form.Row>
					</Form.Group>
					<Form.Group className="ml-4">
						<Form.Row>
							<Form.Label column lg={3} htmlFor='category'>Category:</Form.Label>
							<Col lg={8}>
								<Form.Control as="select" name='category' id='category' onChange={ this.handleChange }>
									<option>Night-out</option>
									<option>Nature</option>
									<option>Game Night</option>
									<option>Restaurant</option>
									<option>Movie</option>
									<option>House Party</option>
								</Form.Control>
							</Col>
						</Form.Row>
					</Form.Group>
					<Form.Group className="ml-4 pb-3 mb-2">
						<Form.Row>
							<Form.Label column lg={3} htmlFor='description'>Description:</Form.Label>
							<Col lg={8}>
								<Form.Control as='textarea' rows={6} name='description' id='description' onChange={ this.handleChange } />
							</Col>
						</Form.Row>
					</Form.Group>
					<button type = "submit" className="new-form-button">Create New Event <i class="far fa-hand-peace"></i></button>
				</Form>
			</div>
		)
	}
}