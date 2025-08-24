import Header from '../Header/Header'
import './Login.css'


const Login = () => {
  return (
    <>
    <Header />
     <div className="loginBg">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" alt="background" />

    <div className="loginForm">
      <div className="loginBox">
        <form action="">
          <input type="text" placeholder='Enter your name'/>
        </form>
      </div>
    </div>
    </div>



    </>
  )
}

export default Login