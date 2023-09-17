import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Categories from "./components/Categories/Categories";
import SingleIcon from "./components/SingleIcon/SingleIcon";
import "./app.css";
import Modal from "./components/Modal/Modal";
import NotFound from "./components/NotFound/NotFound";
import Header from "./Header/Header";
import MainIcon from "./components/MainIcon/MainIcon";

function App() {

  // Header Component State & Logic

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredValue, setFilteredVaue] = useState({
    classic: false,
    sharp: false,
    brands: false,
    free: false,
    accending: false,
    decending: false,
    solid: false,
    regular: false,
    light: false,
    thin: false,
    alert: false,
    sponsered: false,
    new: false,
    accesibility: false,

  })

  // Handle Select
  const handleSelected = value =>{
    setFilteredVaue(prev =>({
      ...prev,
      [value] : prev[value] ? false : true
    }))
  }

  console.log(filteredValue)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = ['Accending', 'Decending'];


  // Icons Object To Array Convert
  const iconsArray = Object.entries(Icons);
  const [loading, setLoading] = useState(false);


  // Add New Property add in element
  const transformedArrayIcons = iconsArray.map((icon) => {
    if (icon[0].length < 5) {
      icon["status"] = "classic";
      icon["style"] = "solid";
      icon["featured"] = "new"
      return icon;
    } else if (icon[0].length < 7) {
      icon["status"] = "sharp";
      icon["style"] = "regular";
      icon["featured"] = "sponsered"

      return icon;
    } else if (icon[0].length < 10){
      icon["status"] = "brand";
      icon["style"] = "light";
      icon["featured"] = "accesibility"

      return icon;
    }else {
      icon["status"] = "free";
      icon["style"] = "thin";
      icon["featured"] = "alert"

      return icon;
    }
  });

  // Initializing New Added Property Array into useState
  const [transformedIcons, setTransformedIcons] = useState(
    transformedArrayIcons
  );


  
  // // Free, Paid & Others Icon Filtering Handler
  // const handleFreeIcon = () => {
  //   setLoading(true);
  //   const freeIcon = transformedArrayIcons.filter(
  //     (icon) => icon.status === "free"
  //   );
  //   setTransformedIcons(freeIcon);
  //   setLoading(false);
  // };
  // const handlePaidIcon = () => {
  //   setLoading(true);
  //   const paidIcon = transformedArrayIcons.filter(
  //     (icon) => icon.status === "paid"
  //   );
  //   setTransformedIcons(paidIcon);
  //   setLoading(false);
  // };
  // const handleOthersIcon = () => {
  //   setLoading(true);
  //   const othersIcon = transformedArrayIcons.filter(
  //     (icon) => icon.status === "others"
  //   );
  //   setTransformedIcons(othersIcon);
  //   setLoading(false);
  // };

  // // Accending & Decending Functions
  // function compare(a, b) {
  //   if (a[1].iconName < b[1].iconName) {
  //     return 1;
  //   }
  //   if (a[1].iconName > b[1].iconName) {
  //     return -1;
  //   }
  //   return 0;
  // }

  // function compare2(a, b) {
  //   if (a[1].iconName < b[1].iconName) {
  //     return -1;
  //   }
  //   if (a[1].iconName > b[1].iconName) {
  //     return 1;
  //   }
  //   return 0;
  // }

  // // Accending & Decending Sort Handler
  // const handleAccending = () => {
  //   setLoading(true);
  //   const accendingIcon = transformedIcons.slice().sort(compare2);
  //   setTransformedIcons(accendingIcon);
  //   setLoading(false);
  // };

  // const handleDcendant = () => {
  //   setLoading(true);
  //   const decendantIcon = transformedIcons.slice().sort(compare);
  //   setTransformedIcons(decendantIcon);
  //   setLoading(false);
  // };

  // // Search Icon Handler
  // const handleSearchIcon = () => {
  //   setLoading(true);
  //   const searchValue = ref.current.value;
  //   const searchIcons = transformedArrayIcons.filter(
  //     (icon) => icon[1]?.iconName?.includes(searchValue) === true
  //   );
  //   setTransformedIcons(searchIcons);
  //   setLoading(false);
  // };

  // // handle Modal
  // const handleModal = (icon) => {
  //   // console.log(icon)
  //   setModalOpen(true);
  //   setModalIcon(icon);
  // };

  const closeModal = () => [setModalOpen(false)];

  return (
    <>

      {/* Header Component */}
      <Header handleSelected={handleSelected} filteredValue={filteredValue} toggleDropdown={toggleDropdown} filteredValue={filteredValue} selectedItem={selectedItem} isOpen={isOpen} handleItemClick={handleItemClick} items={items}></Header>

      <MainIcon handleSelected={handleSelected} filteredValue={filteredValue} transformedIcons={transformedIcons}></MainIcon>


      {/* <h1 className="replica__title">Welcome To Font Awesome Replica</h1>

      <div className="replica__search-container">
        <input
          className="replica__search-input"
          ref={ref}
          type="text"
          placeholder="search-icon"
        />
        <button onClick={handleSearchIcon} className="replica__search-btn">
          Search
        </button>
      </div>

      <Categories
        handleAccending={handleAccending}
        handleDcendant={handleDcendant}
        handleFreeIcon={handleFreeIcon}
        handlePaidIcon={handlePaidIcon}
        handleOthersIcon={handleOthersIcon}
      ></Categories>

      {loading ? (
        <h2>Loading......</h2>
      ) : transformedIcons.length === 0 ? (
        <NotFound></NotFound>
      ) : (
        <div className="replica__icons-container">
          {transformedIcons.map((singleIcon) => {
            return (
              <SingleIcon
                handleModal={handleModal}
                key={singleIcon[0]}
                icon={singleIcon}
              ></SingleIcon>
            );
          })}
        </div>
      )}


      {/* Modal */}
      {/* {modalOpen && (
        <div className="modal__background">
          <Modal closeModal={closeModal} icon={modalIcon}></Modal>
        </div>
      )} */} 
    </>
  );
}

export default App;
