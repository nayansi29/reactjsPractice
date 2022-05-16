import * as React from 'react';
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
  console.log(props.data);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
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
              value={props.data.id}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Name"
              value={props.data.name}
            />
            <TextField
              id="outlined-uncontrolled"
              label="UserName"
              value={props.data.username}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Email"
              value={props.data.email}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Phone"
              value={props.data.phone}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Website"
              value={props.data.website}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address Street"
            // value={props.data.address.street}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address Suite"
            // value={props.data.address.suite}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address city"
            // value={props.data.address.city}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address zipcode"
            // value={props.data.address.zipcode}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Company Name"
            // value={props.data.company.name}
            />
            <TextField
              id="outlined-uncontrolled"
              label="company catchPhrase"
            // value={props.data.company.catchPhrase}
            />
            <TextField
              id="outlined-uncontrolled"
              label="company bs"
            // value={props.data.company.bs}
            />
            <TextField
              id="outlined-uncontrolled"
              label="geo lat"
            // value={props.data.address.geo.lat}
            />
            <TextField
              id="outlined-uncontrolled"
              label="geo lag"
            // value={props.data.address.geo.lat}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
