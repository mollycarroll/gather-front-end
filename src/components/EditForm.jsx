import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

export default class EditForm extends Component {

	// componentDidMount -- sets state -- example: id: this.props.event._id
	// props might load before the component so use componentDidMount

	// componentDidMount() {
	// axios.get(`${baseURL}/events/${this.props.match.params.id}`)
	// 	.then(response => {
	// 		this.setState({ event: response.data })
	// 	})
	// }

	render() {
		if(this.props.event.redirect) {
			return (
				<Redirect to='/' />
			)
		}

		return (
			<div>
				<form onSubmit={ (e) => this.props.handleSubmit(e) }>
					<label htmlFor='creator'>Creator: </label>
					<input type='text' name='creator' id='Creator' value={ this.props.event.Creator } onChange={ (event) => this.props.handleChange(event) } />
					<br/>
					<label htmlFor='title'>Title: </label>
					<input type='text' name='title' id='Title' value={ this.props.event.Title } onChange={ (event) => this.props.handleChange(event) } />
                    <br/>
                    <label htmlFor='date'>Date: </label>
                    <input type='date' name='date' id='Date' value={ this.props.event.Date } onChange={ (event) => this.props.handleChange(event) } />
                    <br/>
                    {/* <label htmlFor='category'>Category: </label>
                    <input type='text' name='category' id='Category' value={ this.props.event.Category } onChange={ (event) => this.props.handleChange(event) } /> */}

                    <label htmlFor='category'>Category: </label>
                    <input type='text' name='category' id='Category' value={ this.props.event.Category } onChange={ (event) => this.props.handleChange(event) } />

                    <br/>
                    <label htmlFor='description'>Description: </label>
                    <input type='textarea' name='description' id='Description' value={ this.props.event.Description } onChange={ (event) => this.props.handleChange(event) } />
                    <br/>
                    <input type='submit' value='Edit Event' />
                </form>
            </div>
		)
	}
}