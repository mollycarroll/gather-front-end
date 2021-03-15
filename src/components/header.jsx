import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src = '<i class="fab fa-cotton-bureau"></i>'/>
                    <h1>Gather</h1>
                    <nav>
                        Log in,
                        Sign up,
                        Create
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header