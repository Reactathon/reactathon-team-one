import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class MapDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Choose Room</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>{"Please select a room?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              place image here
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Atrium
            </Button>
            <Button onClick={this.handleClose}>
              Bazar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MapDialog;