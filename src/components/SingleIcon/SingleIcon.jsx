/* eslint-disable react/prop-types */
import './SingleIcon.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleIcon = ({ icon, handleModal }) => {
  const status = icon.status;
  return (
    <div className="icon__item">
      <button className="icon__btn">
        <FontAwesomeIcon icon={icon[1]} />
      </button>
      <p className="icon__name">Font - {(icon[1]?.iconName)?.toUpperCase()}</p>
      <p className={status == "free" ? "free" : status == 'paid' ? "paid" : "others"}>{icon.status}</p>
      <button className="icon__show-details" onClick={() => handleModal(icon)}>Details</button>
    </div>
  );
};

export default SingleIcon;
