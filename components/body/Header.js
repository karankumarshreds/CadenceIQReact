import '../../styles/header.css';
// ICONS
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ListIcon from '@material-ui/icons/List';
import DialpadIcon from '@material-ui/icons/Dialpad';

const Header = () => {

    return (

        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for prospects..." />
            </div>
            <div className="header__right">
                <ListIcon className="header__right__icon" />
                <NotificationsNoneIcon className="header__right__icon" />
                <DialpadIcon className="header__right__icon" />
                <Avatar src={"/face.png"} alt="Karan" />
            </div>
        </div>
    )
};

export default Header;