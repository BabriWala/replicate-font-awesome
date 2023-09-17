import Categories from "../Categories/Categories";
import Icons from "../Icons/Icons";
import './MainIcon.css';

const MainIcon = ({transformedIcons, handleSelected, filteredValue}) => {
    return (
        <div className="main__icons-area">
            <div className="main__container">
                <Categories handleSelected={handleSelected} filteredValue={filteredValue}></Categories>  
                <Icons transformedIcons={transformedIcons}></Icons>
            </div>         
        </div>
    );
};

export default MainIcon;