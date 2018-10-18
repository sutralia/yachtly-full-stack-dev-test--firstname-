import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    console.log(axios)
    axios.get('http://localhost:3000/api/user')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      });
  }

  delete(id){
    console.log(id);
    axios.post('http://localhost:3000/api/user/'+id)
      .then((result) => {
        alert ('data terhapus')
        this.componentDidMount()
      })
      .catch(e => {
          alert ('terjadi kesalahan')
      })
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h5 className="panel-title">
              User List
            </h5>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>

                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map(u =>
                  <tr>
                    <td>{u.userID}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phoneNumber}</td>
                    <td>{u.address}</td>
                    <td>
                        <Link to={`/user/edit/${u.userID}`}><button className="btn btn-danger">Edit</button></Link>
                        <button onClick={this.delete.bind(this, u.userID)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

