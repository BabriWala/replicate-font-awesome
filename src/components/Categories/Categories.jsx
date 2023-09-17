/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categories.css";
/* eslint-disable react/prop-types */
import { faCircle, faCircleHalfStroke, faDollarSign, faSquare, faStar, faWheelchairMove, faBell } from "@fortawesome/free-solid-svg-icons";

const Categories = ({handleSelected, filteredValue}) => {
  return (
    <>
      <div className="categries">
        <div className="categories__container">
          <h2 className="categories__title">Style</h2>
          <div className={`categories__icon-container ${filteredValue.solid ? "selected" : ""}`} onClick={() => handleSelected("solid")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.regular ? "selected" : ""}`} onClick={() => handleSelected("regular")}>   
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircleHalfStroke} /></h3>
              <h3 className="categories__icon-title">Regular</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.light ? "selected" : ""}`} onClick={() => handleSelected("light")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faStar} /></h3>
              <h3 className="categories__icon-title">Light</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.thin ? "selected" : ""}`} onClick={() => handleSelected("thin")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faSquare} /></h3>
              <h3 className="categories__icon-title">Thin</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
        </div>
        <div className="categories__container">
          <h2 className="categories__title">Featured</h2>
          <div className={`categories__icon-container ${filteredValue.new ? "selected" : ""}`} onClick={() => handleSelected("new")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faStar} /></h3>
              <h3 className="categories__icon-title">New In V6</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.sponsered ? "selected" : ""}`} onClick={() => handleSelected("sponsered")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faDollarSign} /></h3>
              <h3 className="categories__icon-title">sponsered</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.accesibility ? "selected" : ""}`} onClick={() => handleSelected("accesibility")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faWheelchairMove.accesibility} /></h3>
              <h3 className="categories__icon-title">Accesibility</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className={`categories__icon-container ${filteredValue.alert ? "selected" : ""}`} onClick={() => handleSelected("alert")}>
            <div className="categories__icon-left" >
              <h3 className="categories__icon"><FontAwesomeIcon icon={faBell} /></h3>
              <h3 className="categories__icon-title">Alert</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
