import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BasicModal from './BasicModal';

const UserData = () => {
  const [value, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [dialog, showDialog] = useState(false);
  const getRequest = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const persons = res.data;
      setValues(persons);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getRequest();
  }, []);
  const handleInputs = (user) => {
    console.log(user);
    // showDialog(true);
  }
  const renderTable = () => {
    return value.map(user => {
      return (
        <tr key={user.id} onClick={(() => { handleInputs(user) })}>
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
        </tr >
      )
    });
  }
  if (loading) {
    return (
      <div>Loading Please Wait...</div>
    );
  }
  else if (Object.keys(value).length === 0) {
    return (
      <div>No Data Found</div>
    );
  }
  else if (dialog) {
    return (
      <BasicModal userData={userData} />
    );
  }
  else {
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
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    )
  }
}
export default UserData;