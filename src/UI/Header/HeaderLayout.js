import './Header.css';

function HeaderLayout (props) {
    return <div className="Header__wrapper">
        {props.children}
    </div>
}

export default HeaderLayout;