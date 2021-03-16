import axios from 'axios'
import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            creator: '',
            title: '',
            date: '',
            category: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    /* curl -X DELETE http://localhost:3003/events/6050baa7943b9d1b27318beb */

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
                description: ''
            })
            
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ (event) => this.handleSubmit(event) }>
                    <label htmlFor='creator'>Creator: </label>
                    <input type='text' name='creator' id='creator' onChange={ this.handleChange } />

                    <label htmlFor='title'>Title: </label>
                    <input type='text' name='title' id='title' onChange={ this.handleChange } />

                    <label htmlFor='date'>Date: </label>
                    <input type='date' name='date' id='date' onChange={ this.handleChange } />

                    <label htmlFor='category'>Category: </label>
                    <input type='text' name='category' id='category' onChange={ this.handleChange } />

                    <label htmlFor='description'>Description: </label>
                    <input type='textarea' name='description' id='description' onChange={ this.handleChange } />

                    <input type='submit' value='Create new event' />
                </form>
            </div>
        )
    }
}
