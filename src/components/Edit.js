import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.address = this.address.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
      console.log('kkkk', this.props.match.params.id)
    axios.get(`http://localhost:3000/api/user/`+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  name (e) {
    const state = this.state.contact
    state.name = e.target.value;
    this.setState({contact:state});
  }
  email (e) {
    const state = this.state.contact
    state.email = e.target.value;
    this.setState({contact:state});
  }
  phoneNumber (e) {
    const state = this.state.contact
    state.phoneNumber = e.target.value;
    this.setState({contact:state});
  }
  address (e) {
    const state = this.state.contact
    state.address = e.target.value;
    this.setState({contact:state});
  }

  onSubmit (e) {
    e.preventDefault();

    const { name, email, phoneNumber, address } = this.state.contact;

    axios.post(`http://localhost:3000/api/user/edit/${this.props.match.params.id}`, { name, email, phoneNumber, address })
      .then((result) => {
        this.props.history.push("/")
      })
      .catch (e => {
          alert ('Terjadi Kesalahan')
      })
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h5 className="panel-title">
              EDIT Users
            </h5>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.contact.name} onChange={this.name} placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="title">Address:</label>
                <input type="text" className="form-control" name="email" value={this.state.contact.email} onChange={this.email} placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="author">City:</label>
                <input type="text" className="form-control" name="phoneNumber" value={this.state.contact.phoneNumber} onChange={this.phoneNumber} placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label for="published_date">Phone Number:</label>
                <input type="text" className="form-control" name="address" value={this.state.contact.address} onChange={this.address} placeholder="Address" />
              </div>
              <button type="submit" className="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;