import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}



export default class Explore extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cities: [],
			someRandomCity: {
				City: '',
				State: '',
				Activity: ''
			},
		}
	}

	getCities() {
		axios.get(baseURL + '/cities')
			.then(data => {
				console.log(data)
				this.setState({ cities: data.data }, () => {
					this.randomCities()
				})
			})
	}


	componentDidMount() {
		this.getCities()
	}


	randomCities() {

		let randomCity = this.state.cities[Math.floor(Math.random() * this.state.cities.length)];
		console.log(randomCity)
		this.setState({
			someRandomCity: randomCity
		})
	}



	render() {
		return (
			<div>
				<h3>Gather Here: </h3>
				<p>City: </p>

				<p>State: </p>
				<p>Activity: </p>
				{/* <p>City: {this.state.someRandomCity.City} </p>

					<p>State: {this.state.someRandomCity.State} </p>
				<p>Activity: {this.state.someRandomCity.Activity} </p> */}

            </div>
		)
	}
};