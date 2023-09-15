import Categories from "../Categories/Categories";
import Icons from "../Icons/Icons";
import './MainIcon.css';

const MainIcon = () => {
    return (
        <div className="main__icons-area">
            <div className="main__container">
                <Categories></Categories>  
                <Icons></Icons>
            </div>         
        </div>
    );
};

export default MainIcon;