import axios from 'axios'
import React, { Component } from 'react'
// eslint-disable-next-line
import { Redirect } from 'react-router-dom'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'https://pure-waters-81977.herokuapp.com'
}

class Explore extends Component {
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


			<div className="push">
				<h2 className="text-center">G a t h e r <i class="far fa-map"></i> H e r e</h2>

				<div className="gather-here">
					{/* after the icon, have it render city, state */}
					<i class="fas fa-globe-americas mt-4"></i><span>City, State</span>
					<br></br><br></br>
					{/* after the icon, have it render activity */}
					<i class="fas fa-info ml-1"></i><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
				</div>





				{/* <p>City: {this.state.someRandomCity.City} </p>

					<p>State: {this.state.someRandomCity.State} </p>
				<p>Activity: {this.state.someRandomCity.Activity} </p> */}

            </div>
		)
	}
};

export default Explore