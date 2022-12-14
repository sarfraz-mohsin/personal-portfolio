// import React, { useState } from 'react';
// import './header.css';

// const Header = ({setMode, mode}) => {
//     /*======================== Toggle Menu ================== */
//     const [Toggle, showMenu] = useState(false);
    


//   return (
//     <header className={mode ? "header" : "header header-dark"}>
//         <nav className="nav container">
//             <a href="index.html" className={mode ? "nav__logo" : "nav__logo-dark"}>Sarfraz</a>

//             <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
//                 <ul className="nav__list grid">
//                     <li className="nav__item">
//                         <a href="#home" className={mode ? "active-link nav__link" : "active-link nav__link  nav__link-dark"}>
//                             <i className="uil uil-estate nav__icon"></i>Home
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#about" className="nav__link">
//                             <i className="uil uil-user nav__icon"></i>About
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#skills" className="nav__link">
//                             <i className="uil uil-file-alt nav__icon"></i>Skills
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#services" className="nav__link">
//                             <i className="uil uil-briefcase-alt nav__icon"></i>Services
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#portfolio" className="nav__link">
//                             <i className="uil uil-scenery nav__icon"></i>Portfolio
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#contact" className="nav__link">
//                             <i className="uil uil-message nav__icon"></i>Contact
//                         </a>
//                     </li>
//                 </ul>

//                 <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
//             </div>

//             <div className="nav__item">
//                         <button onClick={() => setMode(!mode)} className="nav__mode-button">
//                             <i class={mode ? 'bx bx-moon' : 'bx bx-sun' }></i>
//                         </button>
//             </div>

//             <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//                 <i className="uil uil-apps"></i>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Header




import React, { useState } from 'react';
import './header.css';

const Header = () => {
    /*======================== Toggle Menu ================== */
    const [Toggle, showMenu] = useState(false);

    /*======================== Change Background Header ================== */
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header')
        //when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the scroll-top class
        if(this.scrollY >=80) header.classList.add("scroll-header");
        else header.classList.remove('scroll-header')
    })


    const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Sarfraz</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
