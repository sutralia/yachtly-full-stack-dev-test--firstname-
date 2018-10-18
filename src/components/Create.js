import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      address: ''
    };
    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.address = this.address.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  name (e) {
    this.setState({name: e.target.value});
  }
  email (e) {
    this.setState({email: e.target.value});
  }
  phoneNumber (e) {
    this.setState({phoneNumber: e.target.value});
  }
  address (e) {
    this.setState({address: e.target.value});
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(e)
    const { name, email, phoneNumber, address } = this.state;

    axios.post('http://localhost:3000/api/user/add', { name, email, phoneNumber, address })
    .then((result) => {
        this.props.history.push("/")
    })
    .catch (e => {
        alert ('terjadi kesalahan')
    })
  }

  render() {
    const { name, email, phoneNumber, address } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h5 className="panel-title">
              Create User
            </h5>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="isbn">Name:</label>
                <input type="text" className="form-control" name="name" onChange={this.name} value={name} placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="title">Email:</label>
                <input type="text" className="form-control" name="email" onChange={this.email} value={email}  placeholder="email" />
              </div>
              <div className="form-group">
                <label for="author">Phone Number:</label>
                <input type="text" className="form-control" name="phoneNumber" onChange={this.phoneNumber} value={phoneNumber}  placeholder="phoneNumber" />
              </div>
              <div className="form-group">
                <label for="published_date">Address:</label>
                <input type="text" className="form-control" name="address" onChange={this.address} value={address}  placeholder="address" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;