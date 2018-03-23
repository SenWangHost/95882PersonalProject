import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            // Dropdown Structure
            <div>
                <nav>
                    <div className="nav-wrapper #0277bd light-blue darken-3">
                        <a href="#" className="brand-logo center"><i className="large material-icons">live_tv</i>NEWS FEED</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#"><i className="material-icons left">search</i>Search</a></li>
                            <li><a href="#"><i className="material-icons left">view_module</i>View Services</a></li>
                            <li><a href="#"><i className="material-icons left">refresh</i>Update</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;