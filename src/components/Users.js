import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  renderTable = () => {
    return this.state.persons.map(user => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.address.street}</td>
        </tr>
      )
    });
  }
  render() {
    return (
      <div>
        <h1 id="title">API Table</h1>
        <table id="users" className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Address street</th>

            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    )
  }
}
