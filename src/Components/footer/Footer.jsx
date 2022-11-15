import React from 'react'
import './footer.css'
import reactIcon from '../../assets/reactIcon.webp'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sarfraz</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://twitter.com/SarfrazMohsin2" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>  
      
                <a href="https://www.linkedin.com/in/sarfraz-mohsin-301bb41a0/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>  
                
                <a href="https://github.com/sarfraz-mohsin" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>  
            </div>

            <div className="footer__react">
                <i class='bx bxl-react react-icon'></i>
            </div>
            <div className="footer__reactjs">Powered by REACT JS</div>

            <span className='footer__copy'>&#169; Sarfraz Mohsin. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer
