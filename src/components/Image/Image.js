import post from '../../assets/images/post1.jpg'
import ImageLayout from '../../UI/Image/ImageLayout'
import './Image.css'

function Image () {
    return <ImageLayout>
        <img className='Image' src={post} alt={'pg'}/>
    </ImageLayout>
}
export default Image