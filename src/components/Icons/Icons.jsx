/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icons.css'
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Icons = ({transformedIcons}) => {
    // console.log(transformedIcons)
    return (
        <div className='icons'>
            <div className="icons__title-area">
                <div className='icon__title-area-left'>
                    <h2 style={{fontFamily: 'Plus Jakarta Sans'}}>{transformedIcons.length} Icons</h2>
                </div>
                <div className='icon__title-are-right'>
                <span>
                    Total Pages: 01
                </span>
                </div>
            </div>
            <div className="icons__container">
                {
                    transformedIcons.map((transformIcon, index) => <div  key={index} className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={transformIcon[1]}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Icons;