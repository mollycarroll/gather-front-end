import axios from 'axios'
import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

export default class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            event: {
                id: this.props.event._id,
                creator: this.props.event.Creator,
                title: this.props.event.Title,
                date: this.props.event.Date,
                category: this.props.event.Category,
                description: this.props.event.Description
            } // change these values to blank
        } 
    }

    // componentDidMount -- sets state -- example: id: this.props.event._id
    // props might load before the component so use componentDidMount

    // 'input field in react won't update when changed' search this

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const pack = {
            creator: this.state.creator,
            title: this.state.title,
            date: this.state.date,
            category: this.state.category,
            description: this.state.description
        }

        axios.put(`${baseURL}/events/${this.props.match.params.id}`, pack)
        .then(response => {
            this.setState({ event: response.data })
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='creator'>Creator: </label>
                    <input type='text' name='creator' id='creator' value={ this.state.event.creator } onChange={ (event) => this.handleChange(event) } />

                    <label htmlFor='title'>Title: </label>
                    <input type='text' name='title' id='title' value={ this.state.event.title } onChange={ (event) => this.handleChange(event) } />

                    <label htmlFor='date'>Date: </label>
                    <input type='date' name='date' id='date' value={ this.state.event.date } onChange={ (event) => this.handleChange(event) } />

                    <label htmlFor='category'>Category: </label>
                    <input type='text' name='category' id='category' value={ this.state.event.category } onChange={ (event) => this.handleChange(event) } />

                    <label htmlFor='description'>Description: </label>
                    <input type='textarea' name='description' id='description' value={ this.state.event.description } onChange={ (event) => this.handleChange(event) } />

                    <input type='submit' value='Edit Event' />
                </form>
            </div>
        )
    }
}
