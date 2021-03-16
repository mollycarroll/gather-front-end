import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div>
        <nav className="navbar navbar-expand-lg mb-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="fab fa-cotton-bureau"></i><span className="navbar-text ml-2">
              Gather
            </span></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <Link to='/create' className='nav-link'>Create</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
		)
	}
}

export default Header

// class Header extends Component {
// 	render() {
// 		return (
// 			<div>
//         <header class="my-4">
//           <i class="fab fa-cotton-bureau ml-4"></i>
//           <h1 class="header ml-2">Gather</h1>
//                     <nav>
//                         Log in,
//                         Sign up,
//                         Create
//                     </nav>
//                 </header>
//             </div>
// 		)
// 	}
// }