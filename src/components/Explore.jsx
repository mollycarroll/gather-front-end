import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            City: '',
            State: '',
            Activity: ''
        }
    }

    componentDidMount() {
		console.log(this.props.match.params.id)
		console.log(this.state.redirect)
		axios.get(`${baseURL}/cities/${this.props.match.params.id}`)
			.then(response => {
				this.setState({
					City: response.data.City,
					State: response.data.State,
					Activity: response.data.Activity,
				})
			})
	}
    
    render() {
        return (
            <div></div>
        )
    }
};