import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./app.css";
import Header from "./Header/Header";
import MainIcon from "./components/MainIcon/MainIcon";

function App() {
  // Header Component State & Logic

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toggleShort, setToggleShort] = useState("accending");
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
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = ["Accending", "Decending"];

  // Icons Object To Array Convert
  const iconsArray = Object.entries(Icons);

  // Add New Property add in element
  const transformedArrayIcons = iconsArray.map((icon) => {
    if (icon[0].length < 5) {
      icon["status"] = "classic";
      icon["style"] = "solid";
      icon["featured"] = "new";
      return icon;
    } else if (icon[0].length < 7) {
      icon["status"] = "sharp";
      icon["style"] = "regular";
      icon["featured"] = "sponsered";

      return icon;
    } else if (icon[0].length < 10) {
      icon["status"] = "brand";
      icon["style"] = "light";
      icon["featured"] = "accesibility";

      return icon;
    } else {
      icon["status"] = "free";
      icon["style"] = "thin";
      icon["featured"] = "alert";

      return icon;
    }
  });

  // Initializing New Added Property Array into useState
  const [transformedIcons, setTransformedIcons] = useState(
    transformedArrayIcons
  );

  // Handle Select
  const handleSelected = (value) => {
    if (value === "accending" || value === "decending") {
      if (value === "accending") {
        setToggleShort("accending");
        const accendentIcons = transformedIcons.sort(
          (a, b) => a[1].iconName - b[1].iconName
        );

        setTransformedIcons(accendentIcons);
      } else if (value === "decending") {
        setToggleShort("decending");

        const dcendentIcons = transformedIcons.sort(
          (a, b) => b[1].iconName - a[1].iconName
        );
        setTransformedIcons(dcendentIcons);
      }
    } else {
      setFilteredVaue((prev) => ({
        ...prev,
        [value]: prev[value] ? false : true,
      }));
      setSelectedItem(null)
    }
  };


  // Filtering Selected Items
  useEffect(() => {
    const selectedItem = {};

    for (const key in filteredValue) {
      if (filteredValue[key] === true) {
        selectedItem[key] = true;
      }
    }

    if (Object.keys(selectedItem).length) {
      const selectedKeys = Object.keys(selectedItem);

      const filteredIcons = transformedArrayIcons.filter((icon) => {
        for (const key of selectedKeys) {
          if (
            icon.status.includes(key) ||
            icon.style.includes(key) ||
            icon.featured.includes(key)
          ) {
            return true; // Include the icon if any key is found
          }
        }
        return false; // Exclude the icon if none of the keys are found
      });

      setTransformedIcons(filteredIcons);
    } else {
      setTransformedIcons(transformedArrayIcons);
    }
  }, [filteredValue]);


  return (
    <>
      {/* Header Component */}
      <Header
        handleSelected={handleSelected}
        filteredValue={filteredValue}
        toggleDropdown={toggleDropdown}
        selectedItem={selectedItem}
        isOpen={isOpen}
        handleItemClick={handleItemClick}
        items={items}
      ></Header>

      {/* Main Component */}
      <MainIcon
        handleSelected={handleSelected}
        filteredValue={filteredValue}
        transformedIcons={transformedIcons}
      ></MainIcon>
    </>
  );
}

export default App;
