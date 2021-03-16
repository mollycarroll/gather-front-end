import React, { Component } from 'react'
import Home from './components/Home.jsx'
import Header from './components/header.jsx'
import NewForm from './components/NewForm.jsx'
import Event from './components/Event.jsx'
import axios from 'axios'
import {
	HashRouter as Router,
	Switch,
	Route
  } from 'react-router-dom'

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

		this.handleAddEvent = this.handleAddEvent.bind(this)
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
	}

	handleAddEvent(event) {
		const copyEvents = [...this.state.events]
		console.log(event)
		copyEvents.unshift(event)
		this.setState({
			events: copyEvents,
			creator: '',
            title: '',
            date: '',
            category: '',
            description: ''
		})
	}

	updateEvent(event) {
		axios.put(baseURL + '/events/' + event.id)
	}

	render() {
		return (
			<Router>
				<div>
        			<Header />
					<Switch>
					<Route exact path='/'>
						<Home events={ this.state.events } />
					</Route>
					
					<Route path='/:id'>
						<Event />
					</Route>

					<Route path='/create'>
						<NewForm handleAddEvent={ (event) => this.handleAddEvent(event) } />
					</Route>

					<Route path='/my'>
						{/* my events page component here */}
					</Route>
					</Switch>
      			</div>
	  		</Router>
		)
	}
}

export default App;