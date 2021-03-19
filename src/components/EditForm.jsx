// eslint-disable-next-line
import axios from 'axios'
// eslint-disable-next-line
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
	// eslint-disable-next-line
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

export default class EditForm extends Component {

	render() {
		if(this.props.event.redirect) {
			return (
				<Redirect to='/' />
			)
		}

		return (

			<Form className="edit-form" onSubmit={ (e) => this.props.handleSubmit(e) }>
        <Form.Group className="pt-4 ml-4">
          <Form.Row>
            <Form.Label column lg={3} htmlFor='creator'>Name:</Form.Label>
            <Col lg={8}>
              <Form.Control type='text' name='creator' id='Creator' value={ this.props.event.Creator } onChange={ (event) => this.props.handleChange(event) } />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="ml-4">
          <Form.Row>
            <Form.Label column lg={3} htmlFor='title'>Event Title:</Form.Label>
            <Col lg={8}>
              <Form.Control type='text' name='title' id='Title' value={ this.props.event.Title } onChange={ (event) => this.props.handleChange(event) } />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="ml-4">
          <Form.Row>
            <Form.Label column lg={3} htmlFor='date'>Date:</Form.Label>
            <Col lg={8}>
              <Form.Control type='date' name='date' id='Date' value={ this.props.event.Date } onChange={ (event) => this.props.handleChange(event) } />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="ml-4">
          <Form.Row>
            <Form.Label column lg={3} htmlFor='category'>Category:</Form.Label>
            <Col lg={8}>
              <Form.Control as="select" name='category' id='Category' value={ this.props.event.Category } onChange={ (event) => this.props.handleChange(event) }>
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
							<Form.Control as='textarea' rows={6} name='description' id='Description' value={ this.props.event.Description } onChange={ (event) => this.props.handleChange(event) } />
						</Col>
					</Form.Row>
				</Form.Group>
				<button className="edit-button" type = "submit">Edit Event</button>
								</Form>

		)
	}
}

// 								<div>
// 									<form onSubmit={ (e) => this.props.handleSubmit(e) }>
// 										<label htmlFor='creator'>Creator: </label>
// 										<input type='text' name='creator' id='Creator' value={ this.props.event.Creator } onChange={ (event) => this.props.handleChange(event) } />
// 										<br/>
// 										<label htmlFor='title'>Title: </label>
// 										<input type='text' name='title' id='Title' value={ this.props.event.Title } onChange={ (event) => this.props.handleChange(event) } />
// 										<br/>
// 										<label htmlFor='date'>Date: </label>
// 										<input type='date' name='date' id='Date' value={ this.props.event.Date } onChange={ (event) => this.props.handleChange(event) } />
// 										<br/>
// 										{/* <label htmlFor='category'>Category: </label>
// 										<input type='text' name='category' id='Category' value={ this.props.event.Category } onChange={ (event) => this.props.handleChange(event) } /> */}
//
// 										<label htmlFor='category'>Category: </label>
// 										<input type='text' name='category' id='Category' value={ this.props.event.Category } onChange={ (event) => this.props.handleChange(event) } />
//
// 										<br/>
// 										<label htmlFor='description'>Description: </label>
// 										<input type='textarea' name='description' id='Description' value={ this.props.event.Description } onChange={ (event) => this.props.handleChange(event) } />
// 		<br/>
// 		<input type='submit' value='Edit Event' />
// 	</form>
// </div>