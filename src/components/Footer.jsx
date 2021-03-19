import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid footer">
				<footer>
					<h3 className="text-center pt-3">G A T H E R</h3>
					<hr className="large"></hr>
					<h5 className="text-center">G A T H E R was created by:</h5>
					<p className="text-center footer-text pt-2">Jamera McNeil | Molly Carroll | Jessica Gallagher</p>
					<p className="text-center"><a href='https://github.com/mollycarroll/gather-front-end' className="hover">View on GitHub</a></p>

				</footer>
			</div>
		)
	}
}

export default Footer