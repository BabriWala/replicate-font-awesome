/* eslint-disable react/prop-types */

const Categories = ({handleFreeIcon, handlePaidIcon, handleOthersIcon, handleDcendant, handleAccending}) => {
    return (
        <div>
        <div>
          <h2>Categories:</h2>
          <div>
            <button onClick={handleFreeIcon}>Free</button>
            <button onClick={handlePaidIcon}>Paid</button>
            <button onClick={handleOthersIcon}>Others</button>
          </div>
        </div>
        <div>
          <h2>Sorting</h2>
          <div>
          <button onClick={handleDcendant}>Short By Decendant Order</button>
          <button onClick={handleAccending}>Short By Accending Order</button>
          </div>
        </div>
      </div>
    );
};

export default Categories;