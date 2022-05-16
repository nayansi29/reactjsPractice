import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
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
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
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
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
export default function BasicModal({ data }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  // const handleClose = () => {
  //     setOpen(false);
  // };

  return (
    <div>
      <BootstrapDialog
        // onClose={handleClose}
        onClick={handleClickOpen}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title">
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
              value={data.id}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Name"
              value={data.name}
            />
            <TextField
              id="outlined-uncontrolled"
              label="UserName"
              value={data.username}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Email"
              value={data.email}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Phone"
              value={data.phone}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Website"
              value={data.website}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address Street"
              value={data.address.street}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address Suite"
              value={data.address.suite}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address city"
              value={data.address.city}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Address zipcode"
              value={data.address.zipcode}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Company Name"
              value={data.company.name}
            />
            <TextField
              id="outlined-uncontrolled"
              label="company catchPhrase"
              value={data.company.catchPhrase}
            />
            <TextField
              id="outlined-uncontrolled"
              label="company bs"
              value={data.company.bs}
            />
            <TextField
              id="outlined-uncontrolled"
              label="geo lat"
              value={data.address.geo.lat}
            />
            <TextField
              id="outlined-uncontrolled"
              label="geo lag"
              value={data.address.geo.lat}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
