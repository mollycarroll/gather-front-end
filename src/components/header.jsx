import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div>
        <nav class="navbar navbar-expand-lg mb-5">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="fab fa-cotton-bureau"></i></a>
            <span class="navbar-text">
              Gather
            </span>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Log In</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Create</a>
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