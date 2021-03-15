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
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <div>
                <form>
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
