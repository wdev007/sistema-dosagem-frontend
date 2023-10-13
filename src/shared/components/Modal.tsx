import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface IModalProps {
  open: boolean;
  title: string;
  content: string;
  closeText: string;
  confirmText: string;
  handleClose: () => void;
  handleConfirm: () => void;
}

const Modal = ({
  open,
  title,
  content,
  closeText,
  confirmText,
  handleClose,
  handleConfirm,
}: IModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          {closeText}
        </Button>
        <Button onClick={handleConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
