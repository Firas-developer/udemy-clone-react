import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping,faBell,faUser,faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h1 className="navbar__left__title">Udemy</h1>
            </div>
            <div className="navbar__middle">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search for anything like Business, Courses,Topics..."></input>
            </div>
            <div className="navbar__right">
                <p>Courses</p>
                <div className="navbar__right__mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>There is no course you are currently learning</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="navbar__menu">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default Navbar