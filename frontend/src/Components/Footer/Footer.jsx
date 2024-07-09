import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (<>
    <div className='continear text-center my-5' id='mobileapp'>
      <h1 className='my-4'>For Better Experience Download <br /> Tomato App</h1>
      <span  style={{ cursor: "pointer" }}> <img className='m-3 ' src={assets.app_store} alt="" />
        <img className='m-3 ' src={assets.play_store} alt="" />
      </span>
    </div>
    <footer id='contact-Us' className="text-center text-lg-start bg-body-tertiary bg-dark  text-muted">

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-github"></i>
          </a>
        </div>

      </section>

      <section className="">
        <div className="container  text-md-start mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa fa-gem me-3"></i>My-cafe
              </h6>
              <p>
            
The process consists of a customer choosing the restaurant of their choice, scanning the menu items, choosing an item, and finally choosing for pick-up or delivery....... 
               
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  d-none d-lg-block mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
              Company
              </h6>
              <p>
                <a href="#!" className="text-reset">Home</a>
              </p>
              <p>
                <a href="#!" className="text-reset">About</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Deliery</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Privacy policy</a>
              </p>
            </div>




            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                ashishjat126@gmail.com
              </p>
              <p><i className="fa fa-phone me-3"></i> + 91 7232816781</p>
              <p><i className="fa fa-print me-3"></i> + 91 6367321255</p>
            </div>
          </div>
        </div>
      </section>



      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">my-cafe.com</a>
        </div>


    </footer>
  </>
  )
}

export default Footer
