import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icons.css'
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return (
        <div className='icons'>
            <div className="icons__title-area">
                <div className='icon__title-area-left'>
                    <h2 style={{fontFamily: 'Plus Jakarta Sans'}}>2,025 Icons</h2>
                </div>
                <div className='icon__title-are-right'>
                <span>
                    Total Icons: 5000
                </span>
                </div>
            </div>
            <div className="icons__container">
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
                <div className="icons__item">
                    <h2 className='icons__item-icon'><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></h2>
                    <h4 className='icons__item-title'>Icon Name</h4>
                </div>
            </div>
        </div>
    );
};

export default Icons;