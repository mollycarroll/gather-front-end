import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

export default class FormTest extends Component {
	render() {
		return (
			<Form>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={1} htmlFor='creator'>Name:</Form.Label>
            <Col className="col-sm-2">
              <Form.Control type="text" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={1} htmlFor='title'>Event Title:</Form.Label>
            <Col className="col-sm-2">
              <Form.Control type="text" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={1} htmlFor='date'>Date:</Form.Label>
            <Col className="col-sm-2">
              <Form.Control type="date" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={1} htmlFor='category'>Date:</Form.Label>
            <Col className="col-sm-2">
              <Form.Control as="select">
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
        <Button type="submit">Create New Event</Button>
      </Form>
		)
	}
}