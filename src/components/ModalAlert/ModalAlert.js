import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalAlert.css";

const ModalAlert = ({ message, show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onClick={() => handleClose()}>
        <Modal.Body id="modal-body">{message}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalAlert;
