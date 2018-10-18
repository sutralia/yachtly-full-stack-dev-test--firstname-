import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3030/api/user'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/contacts/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  goAdd () {
    this.props.history.push("/user/create")
  }

  goList () {
    this.props.history.push("/user/list")
  }

  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to={`user/create`}>Create User</Link>
                
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`user/list`}>Users</Link>
            </li>
            </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
