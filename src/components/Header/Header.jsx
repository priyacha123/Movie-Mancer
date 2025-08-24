import './Header.css'
import logo from '../../assets/logo.jpg'


const Header = () => {
  return (
    <>
    <div className="navbar">
       <img className='logo' src={logo} alt="NETFLIX" />
       </div>
    </>
  )
}

export default Header