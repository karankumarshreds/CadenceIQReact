const SidebarItem = ({ text, Icon }) => {
    return (
        <div className="SidebarItem">
            {Icon && <Icon className="SidebarItem__icon" style={{ fontSize: 22 }} />}
            {Icon ? <p className="SidebarItem__text">{text}</p> : <p className="SidebarItem__text">{text}</p>}
        </div>
    )
}

export default SidebarItem;