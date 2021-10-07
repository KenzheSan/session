import './LogoLayout.css'

function LogoLayout(props) {
    return <div className = 'Logo_wrapper'>
        {props.children}
    </div>
}

export default LogoLayout