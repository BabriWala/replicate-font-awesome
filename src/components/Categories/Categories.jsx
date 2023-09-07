/* eslint-disable react/prop-types */
import './Categories.css'

const Categories = ({
  handleFreeIcon,
  handlePaidIcon,
  handleOthersIcon,
  handleDcendant,
  handleAccending,
}) => {
  return (
    <div className="categories__container">
      <div className="categories__left-side">
        <h2 className="categories__title">Categories:</h2>
        <div className="categories__buttons">
          <button onClick={handleFreeIcon}>Free</button>
          <button onClick={handlePaidIcon}>Paid</button>
          <button onClick={handleOthersIcon}>Others</button>
        </div>
      </div>
      <div className="categories__right-side">
        <h2 className="categories__title">Sorting</h2>
        <div className="categories__buttons">
          <button onClick={handleAccending}>Short By Accending Order</button>
          <button onClick={handleDcendant}>Short By Decendant Order</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
