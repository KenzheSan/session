import logo from '../../../assets/images/logo1.jpg'
import './Logo.css'
import LogoLayout from '../../../UI/Logo/LogoLayout'

function Logos() {
	return (
		<LogoLayout>
			<img className='Logo' src={logo} alt='logo' />
			<div className='Logo__name'>JavaScript</div>
			<div className='Logo__link'>
				<span>•</span>
				<button className='Logo__btn'>
					<div className='Logo__name'>Подписки</div>
				</button>
			</div>
		</LogoLayout>
	)
}

export default Logos
