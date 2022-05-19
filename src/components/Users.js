import React, { Component } from 'react'
import axios from 'axios';
import BasicModal from './BasicModal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@mui/material/Button';

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
  updateChange = async (user) => {
    const items = user;
    const userId = items.id;
    try {
      const resp = await axios({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/users/' + userId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      });
      const updatedPersons = this.state.persons.map(values => values.id === userId ? { ...values, ...items } : values);
      this.setState({
        persons: updatedPersons,
      });
      this.closeButton();
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
  deleteChange = async (id) => {
    try {
      const resp = await axios({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/users/' + id,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const deletePersons = this.state.persons.filter((resp) => {
        return resp.id !== id;
      });
      this.setState({
        persons: deletePersons,
      });
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
  componentDidMount() {
    this.getRequest();
  }
  handleInput = (user) => {
    this.setState({ data: user, open: true });
  }
  closeButton = () => {
    this.setState({ open: false });
  }
  renderTable = () => {
    return this.state.persons.map(user => {
      return (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>{user.website}</TableCell>
          <TableCell>{user.address.street}</TableCell>
          <TableCell>{user.address.suite}</TableCell>
          <TableCell>{user.address.city}</TableCell>
          <TableCell>{user.address.zipcode}</TableCell>
          <TableCell>{user.company.name}</TableCell>
          <TableCell>{user.company.catchPhrase}</TableCell>
          <TableCell>{user.company.bs}</TableCell>
          <TableCell>{user.address.geo.lat}</TableCell>
          <TableCell>{user.address.geo.lng}</TableCell>
          <TableCell>
            <Button variant="contained" onClick={() => { this.handleInput(user) }}>Edit</Button>
            <Button variant="contained" onClick={() => { this.deleteChange(user.id) }}>Delete</Button>
          </TableCell>
        </TableRow>
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
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>UserName</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Address street</TableCell>
                  <TableCell>Address suite</TableCell>
                  <TableCell>Address city</TableCell>
                  <TableCell>Address Zipcode</TableCell>
                  <TableCell>company Name</TableCell>
                  <TableCell>company catchPhrase</TableCell>
                  <TableCell>company bs</TableCell>
                  <TableCell>geo lat</TableCell>
                  <TableCell>geo  lng</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </TableContainer>
        </div>
      )
    }
  }
}


