import '../../styles/sidebar.css';
import SidebarItem from './SidebarItem';
// ICONS 
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SendIcon from '@material-ui/icons/Send';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';

const Sidebar = () => {
    return <div className="Sidebar">
        <div className="Sidebar__logo">
            <BarChartIcon style={{ fontSize: 40 }} />
            <div className="Sidebar__logo__title">CadenceIQ</div>
        </div>
        <hr />
        <div className="Sidebar__components">
            <SidebarItem text="Home" Icon={HomeIcon} />
            <SidebarItem text="Tasks" Icon={FormatListBulletedIcon} />
            <SidebarItem text="Sequences" Icon={SendIcon} />
            <SidebarItem text="Prospects" Icon={PermIdentityIcon} />
            <SidebarItem text="Accounts" Icon={AccountBoxIcon} />
            <SidebarItem text="Phone" Icon={PhoneIcon} />
        </div>
        <hr className="Sidebar__hr" />
    </div>
}
export default Sidebar;