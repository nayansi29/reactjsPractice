import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@material-ui/icons/Close";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default function BasicModal(props) {
  const [user, setUser] = useState({ ...props.data });
  const [userDetails, setUserDetails] = useState({});
  React.useEffect(() => {
    setUser(props.data);
  }, [props.data])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  const handleAddress = (e) => {
    user.address[e.target.name] = e.target.value
    setUser({ ...user })
  }
  const handleAddressGeo = (e) => {
    user.address.geo[e.target.name] = e.target.value
    setUser({ ...user })
  }
  const handleCompany = (e) => {
    user.company[e.target.name] = e.target.value
    setUser({ ...user });

  }

  const updateChanges = () => {
    const items = { ...user };
    const userId = items.id;
    // axios.put('https://jsonplaceholder.typicode.com/users/{userId}', items)
    //   .then(res => {
    //     console.log(res.data);
    //     // setData(res.data);
    //     setLoading(false);
    //   }).catch(error => {
    //     setLoading(false);
    //     console.log(error);
    //   });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    }).then((result) => {
      result.json()
        .then((resp) => {
          setUserDetails({ resp });
          console.warn(resp);
        })
    });
    props.closeButton();
  }
  return (
    <div>
      <BootstrapDialog
        onClose={props.closeButton}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.closeButton}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-uncontrolled"
              label="id"
              name="id"
              disabled
              value={user.id}
              onChange={(e) => handleChange(e)}

            />
            <TextField
              id="outlined-uncontrolled"
              label="name"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-uncontrolled"
              label="UserName"
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Phone"
              name="phone"
              value={user.phone}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Website"
              name="website"
              value={user.website}
              onChange={(e) => handleChange(e)}
            />
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="Address Street"
              name="street"
              value={user.address.street}
              onChange={(e) => handleAddress(e)}
            />
            }
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="Address Suite"
              name="suite"
              value={user.address.suite}
              onChange={(e) => handleAddress(e)}
            />
            }
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="Address city"
              name="city"
              value={user.address.city}
              onChange={(e) => handleAddress(e)}
            />
            }
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="Address zipcode"
              name="zipcode"
              value={user.address.zipcode}
              onChange={(e) => handleAddress(e)}
            />
            }
            {user.company && <TextField
              id="outlined-uncontrolled"
              label="Company Name"
              name="name"
              value={user.company.name}
              onChange={(e) => handleCompany(e)}
            />
            }
            {user.company && <TextField
              id="outlined-uncontrolled"
              label="company catchPhrase"
              name="catchPhrase"
              value={user.company.catchPhrase}
              onChange={(e) => handleCompany(e)}
            />
            }
            {user.company && <TextField
              id="outlined-uncontrolled"
              label="company bs"
              name="bs"
              value={user.company.bs}
              onChange={(e) => handleCompany(e)}
            />
            }
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="geo lat"
              name="lat"
              value={user.address.geo.lat}
              onChange={(e) => handleAddressGeo(e)}
            />
            }
            {user.address && <TextField
              id="outlined-uncontrolled"
              label="geo lag"
              name="lng"
              value={user.address.geo.lng}
              onChange={(e) => handleAddressGeo(e)}
            />
            }
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={updateChanges} onClose={props.closeButton}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

