import './Image.css'

function ImageLayout (props) {
    return <div className = 'Image_wrapper'>
        {props.children}
    </div>
}

export default ImageLayout