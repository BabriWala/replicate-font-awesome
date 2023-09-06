import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Categories from "./components/Categories/Categories";
import SingleIcon from "./components/SingleIcon/SingleIcon";

function App() {
  // Icons Object To Array Convert
  let iconsArray = Object.entries(Icons);

  // Search Input Reference For Searches
  const ref = useRef();

  // Add New Property add in element
  let transformedArrayIcons = iconsArray.map((icon) => {
    if (icon[0].length < 5) {
      icon["status"] = "free";
      return icon;
    } else if (icon[0].length < 10) {
      icon["status"] = "paid";
      return icon;
    } else {
      icon["status"] = "others";
      return icon;
    }
  });

  // Initializing New Added Property Array into useState
  const [transformedIcons, setTransformedIcons] = useState(
    transformedArrayIcons
  );

  // Free, Paid & Others Icon Filtering Handler
  const handleFreeIcon = () => {
    const freeIcon = transformedArrayIcons.filter(
      (icon) => icon.status === "free"
    );
    setTransformedIcons(freeIcon);
  };
  const handlePaidIcon = () => {
    const paidIcon = transformedArrayIcons.filter(
      (icon) => icon.status === "paid"
    );
    setTransformedIcons(paidIcon);
  };
  const handleOthersIcon = () => {
    const othersIcon = transformedArrayIcons.filter(
      (icon) => icon.status === "others"
    );
    setTransformedIcons(othersIcon);
  };

  // Accending & Decending Functions
  function compare(a, b) {
    if (a[1].iconName < b[1].iconName) {
      return 1;
    }
    if (a[1].iconName > b[1].iconName) {
      return -1;
    }
    return 0;
  }

  function compare2(a, b) {
    if (a[1].iconName < b[1].iconName) {
      return -1;
    }
    if (a[1].iconName > b[1].iconName) {
      return 1;
    }
    return 0;
  }

  // Accending & Decending Sort Handler
  const handleAccending = () => {
    const accendingIcon = transformedIcons.slice().sort(compare2);
    setTransformedIcons(accendingIcon);
  };

  const handleDcendant = () => {
    const decendantIcon = transformedIcons.slice().sort(compare);
    setTransformedIcons(decendantIcon);
  };

  // Search Icon Handler
  const handleSearchIcon = () => {
    const searchValue = ref.current.value;
    const searchIcons = transformedArrayIcons.filter(
      (icon) => icon[1]?.iconName?.includes(searchValue) === true
    );
    setTransformedIcons(searchIcons);
  };

  return (
    <>
      <h1>
        Welcome To Font Awesome <br /> Replica Site
      </h1>

      <div>
        <input ref={ref} type="text" placeholder="search-icon" />
        <button onClick={handleSearchIcon}>Search</button>
      </div>

      <Categories
        handleAccending={handleAccending}
        handleDcendant={handleDcendant}
        handleFreeIcon={handleFreeIcon}
        handlePaidIcon={handlePaidIcon}
        handleOthersIcon={handleOthersIcon}
      ></Categories>

      <div>
        {transformedIcons.map((singleIcon) => {
          return (
            <SingleIcon key={singleIcon[0]} icon={singleIcon}></SingleIcon>
          );
        })}
      </div>
    </>
  );
}

export default App;
