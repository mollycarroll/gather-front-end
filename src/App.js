import React, { Component } from 'react'
import EventCard from './components/EventCard.jsx'
import Header from './components/header.jsx'
import axios from 'axios'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'your heroku backend url here'
}

console.log(`your current base url is ${baseURL}`)

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			events: []
		}


	}

	componentDidMount() {
		this.getEvents()
	}

	getEvents() {
		axios.get(baseURL + '/events')
		.then(data => {
			console.log(data)
			this.setState({ events: data.data })
		})

		// fetch(baseURL + '/events')
		// .then(data => { return data.json() }, error => console.log(error))
		// .then(parsedData => this.setState({ events: parsedData }), error => console.log(error))
	}

	render() {
		return (
			<div>
        <Header />
        <EventCard events={ this.state.events }/> 
      </div>
		)
	}
}
// map over this.props.events inside event card

export default App;