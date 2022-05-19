import React, { Component } from 'react'
import axios from 'axios';
import BasicModal from './BasicModal';

export default class Users extends Component {
  state = {
    persons: [],
    loading: true,
    open: false,
    data: [],
  };
  getRequest = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const persons = res.data;
      this.setState({ persons, loading: false });
    } catch (err) {
      console.error(err);
    }
  }
  componentDidMount() {
    this.getRequest();
  }
  handleInput(user) {
    this.setState({ data: user, open: true });
  }
  closeButton = () => {
    this.setState({ open: false });
  }
  updateChange = (user) => {
    const items = user;
    const userId = items.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    }).then(data => {
      console.log(data);
      const updatedPersons = this.state.persons.map(values => values.id === userId ? { ...values, ...items } : values);
      this.setState({
        persons: updatedPersons,
      });
      this.closeButton();
    });
  }
  renderTable = () => {
    return this.state.persons.map(user => {
      return (
        <tr key={user.id} onClick={() => { this.handleInput(user) }}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.address.street}</td>
          <td>{user.address.suite}</td>
          <td>{user.address.city}</td>
          <td>{user.address.zipcode}</td>
          <td>{user.company.name}</td>
          <td>{user.company.catchPhrase}</td>
          <td>{user.company.bs}</td>
          <td>{user.address.geo.lat}</td>
          <td>{user.address.geo.lng}</td>
        </tr>
      )
    });
  }
  render() {
    if (this.state.loading) {
      return (

        <div>Loading Please...</div>
      );
    }
    else if (this.state.persons.length === 0) {
      return (
        <div>No Data Found</div>
      );
    }
    else {
      return (
        <div>
          <BasicModal open={this.state.open} data={this.state.data} closeButton={this.closeButton}
            updateChange={this.updateChange} />
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
                <th>Address suite</th>
                <th>Address city</th>
                <th>Address Zipcode</th>
                <th>company Name</th>
                <th>company catchPhrase</th>
                <th>company bs</th>
                <th>geo lat</th>
                <th>geo  lng</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      )
    }
  }
}


