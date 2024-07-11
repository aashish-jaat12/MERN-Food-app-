// import React from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Storecontext'
import { useNavigate } from 'react-router-dom'

function Navbar({ setLoginpap }) {

  const { token, settoken } = useContext(StoreContext)
  const Navigate = useNavigate()
  const logout= ()=>{

    localStorage.removeItem('token')
    settoken('')
    Navigate('/')

  }
  return (
    <div className='sticky-top '>
      <nav className="navbar navbar-expand-lg navbar-light  bg-light ">

        <div className="container-fluid  mx-5">

          <Link className="navbar-brand" to="/"><img src={assets.logo} style={{ width: "130px"}} alt='' /> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">menu</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#contact-Us">contact us</a>
              </li>

            </ul>

            <button className="btn mx-2" > <img src={assets.search_icon} alt="" /> </button>
            <button className="btn  mx-3" ><Link to={"/card"}> <img src={assets.basket_icon} alt="" /></Link></button>
            {!token ? <button onClick={() => setLoginpap(true)} className="btn btn-outline-success  mx-2" >Sign Up</button> :
              <div className=' profilr ' ><img style={{ width: '24px' }} src={assets.profile_icon} alt="" />
                <ul className='dropdown' >
                  <li onClick={()=>Navigate('/myorder')} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul> </div>}



          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
