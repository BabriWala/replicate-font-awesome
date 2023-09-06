/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleIcon = ({ icon }) => {
  return (
    <div>
      <button style={{ display: "inline-block", fontSize: "40px" }}>
        <FontAwesomeIcon icon={icon[1]} />
      </button>
      <p>Font Name: {icon[1].iconName}</p>
      <p>{icon.status}</p>
    </div>
  );
};

export default SingleIcon;
