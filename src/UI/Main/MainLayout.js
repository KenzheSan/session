import './Main.css'

function MianLayout (props) {
    return <div className = 'Main_wrapper'>
        {props.children}
    </div>
}

export default MianLayout