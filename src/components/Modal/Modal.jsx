/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";
const Modal = ({ closeModal, icon }) => {
  const status = icon.status;
  return (
    <div className="modal">
      <div className="icon__modal-item">
        <button className="icon__btn">
          <FontAwesomeIcon icon={icon[1]} />
        </button>
        <p className="icon__name">Font - {icon[1]?.iconName?.toUpperCase()}</p>
        <p
          className={
            status == "free" ? "free" : status == "paid" ? "paid" : "others"
          }
        >
          {icon.status}
        </p>
        <button onClick={closeModal} className="icon__close-modal">
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
