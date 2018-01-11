import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import ButtonMap from '../ButtonMap/ButtonMap';

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
          fullWidth
          maxWidth={false}
        >
          <DialogTitle>{"Please select a room?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <ButtonMap/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MapDialog;
