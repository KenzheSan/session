import HeaderLayout  from "../../UI/Header/HeaderLayout";
import Logos from "./Logo/Logo";
function Header () {
    return <HeaderLayout>
        <Logos/>
        <div className = 'nav'>
            <button className = 'btn'>
            <svg aria-label="Дополнительно" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <circle cx="12" cy="12" r="1.5">
                    </circle><circle cx="6.5" cy="12" r="1.5"></circle>
                    <circle cx="17.5" cy="12" r="1.5"></circle>
                </svg>
            </button>
        </div>
    </HeaderLayout>
}

export default Header