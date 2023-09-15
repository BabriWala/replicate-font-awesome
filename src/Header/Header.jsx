/* eslint-disable react/prop-types */
import {
  faIcons,
  faFlag,
  faBolt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  toggleDropdown,
  selectedItem,
  isOpen,
  handleItemClick,
  items,
}) => {
  return (
    <>
      <div className="header">
        <div className="header__topSearch-container">
          <div className="header__topSearch-item">
            <h1 className="header__icon">
              <FontAwesomeIcon icon={faIcons} />
            </h1>
            <h3 className="header__topSearch-title">Classic</h3>
          </div>
          <div className="header__topSearch-item">
            <h1 className="header__icon">
              <FontAwesomeIcon icon={faIcons} />
            </h1>
            <h3 className="header__topSearch-title">Sharp</h3>
          </div>
          <div className="header__topSearch-item">
            <h1 className="header__icon">
              <FontAwesomeIcon icon={faBolt} />
            </h1>
            <h3 className="header__topSearch-title">Brands</h3>
          </div>
          <div className="header__topSearch-item">
            <h1 className="header__icon">
              <FontAwesomeIcon icon={faFlag} />
            </h1>
            <h3 className="header__topSearch-title">Free</h3>
          </div>
        </div>

        {/* Header DropDown Filter */}
        <div className="header__dropdown">
          <div className="header__dropdown-header" onClick={toggleDropdown}>
            <h5 className="header__dropdown-title">{selectedItem || "Featured"}</h5>
            <h5 className="header__dropdown-title">
            {isOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
            </h5>
          </div>
          {isOpen && (
            <ul className="header__dropdown-list">
              {items.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
