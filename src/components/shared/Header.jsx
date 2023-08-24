import { Link } from "react-router-dom"
import './stiles/Header.css'


const Header = () => {
  return (
    <div className="header_container">
    <header className="header">
        <h1 ><Link className="h1_ecommerce" to='/'>e-commerce</Link></h1>
        <nav className="header_nav" >
            <ul className="header_ul">
                <li className="header_li">
                    <Link  className="link_header" to='/register'>Register</Link>
                </li>
                <li className="header_li">
                    <Link  className="link_header user_header"  to='/login'><i className='bx bx-user'></i></Link>
                </li>
                <li className="header_li">
                    <Link className="link_header"  to='/cart'><i className='bx bx-cart'></i></Link>

                </li>
                <li className="header_li">
                    <Link className="link_header"  to='/purchases'><i className='bx bx-box'></i></Link>
                    
                </li>
            </ul>
        </nav>
    </header>

    </div>
  )
}

export default Header