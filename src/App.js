import React, { Component } from 'react'
import EventCard from './components/EventCard.jsx'
import Header from './components/Header.jsx'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
	baseURL = 'http://localhost:3003'
} else {
	baseURL = 'your heroku backend url here'
}

console.log(`your current base url is ${baseURL}`)

class App extends Component {
	render() {
		return (
			<div>
        <Header />
        <EventCard />
      </div>
		)
	}
}

export default App;