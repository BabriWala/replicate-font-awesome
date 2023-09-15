/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({toggleDropdown, selectedItem, isOpen, handleItemClick, items}) => {
    return (
        <div>
            <div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-icons" />
                    <h3>Classic</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-icons" />
                    <h3>Sharp</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-bolt" />
                    <h3>Brands</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-regular fa-flag" />
                    <h3>Free</h3>
                </div>
            </div>    
            <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem || 'Select an option'}
                <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                    {item}
                    </li>
                ))}
                </ul>
            )}
            </div>
        </div>
    );
};

export default Header;