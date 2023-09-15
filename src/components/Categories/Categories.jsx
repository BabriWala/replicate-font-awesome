/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categories.css";
/* eslint-disable react/prop-types */
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <>
      <div className="categries">
        <div className="categories__container">
          <h2 className="categories__title">Style</h2>
          <div className="categories__icon-container selected">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
        </div>
        <div className="categories__container">
          <h2 className="categories__title">Style</h2>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
        </div>
        <div className="categories__container">
          <h2 className="categories__title">Style</h2>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
          <div className="categories__icon-container">
            <div className="categories__icon-left">
              <h3 className="categories__icon"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h3>
              <h3 className="categories__icon-title">Solid</h3>
            </div>
            <div className="categories__icon-right">
              <h2 className="categories__icon-amount">6400</h2>
            </div>
          </div>
        </div>
      </div>

      {/* // <div className="categories__container">
    //   <div className="categories__left-side">
    //     <h2 className="categories__title">Categories:</h2>
    //     <div className="categories__buttons">
    //       <button onClick={handleFreeIcon}>Free</button>
    //       <button onClick={handlePaidIcon}>Paid</button>
    //       <button onClick={handleOthersIcon}>Others</button>
    //     </div>
    //   </div>
    //   <div className="categories__right-side">
    //     <h2 className="categories__title">Sorting</h2>
    //     <div className="categories__buttons">
    //       <button onClick={handleAccending}>Short By Accending Order</button>
    //       <button onClick={handleDcendant}>Short By Decendant Order</button>
    //     </div>
    //   </div>
    // </div> */}
    </>
  );
};

export default Categories;
