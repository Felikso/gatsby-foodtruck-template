import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
import ProgressBar from './ProgressBar';
import SvgVentusTradeLogo from './SvgVentusTradeLogo'
import './ProgressBar.css'
import './MenuBurger.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav>
      <div className='navbar'>
        <div className='navbar-container'>
      <div className="logo-box">
        <Link exact to='/' className='navbar-logo ventus-trade' activeClassName='logo-active'>
                     VentusTrade  <SvgVentusTradeLogo />  
                 </Link>  
                     <button onClick={handleClick} className={click ? 'burger-menu burger-menu-opened' : 'burger-menu '} aria-label="Main Menu">
                          <svg width="70" height="70" viewBox="0 0 100 100">
                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className="line line2" d="M 20,50 H 80" />
                                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                          </svg>
                      </button>
      </div>
      <div className="nav-item-box">                          
      <ul className={click ? 'nav-menu active ' : 'nav-menu '}>
                            <li className='nav-item'>
                              <Link exact to='/' 
                              className='nav-links '
                              activeClassName='active'
                              onClick={closeMobileMenu}>
                                Strona główna
                              </Link>
                            </li>
                            <li className='nav-item'>
                              <Link
                                to='/pojazdy-i-urzadzenia'
                                className='nav-links'
                                activeClassName='active'
                                onClick={closeMobileMenu}
                              >
                                Pojazdy i urządzenia
                              </Link>
                            </li>
                            <li className='nav-item'>
                              <Link
                                to='/o-nas'
                                className='nav-links'
                                activeClassName='active'
                                onClick={closeMobileMenu}
                              >
                                O nas
                              </Link>
                            </li>

                            <li className='nav-item'>
                              <Link
                                to='/oferta'
                                className='nav-links'
                                activeClassName='active'
                                onClick={closeMobileMenu}
                              >
                                Oferta
                              </Link>
                            </li>

                            <li className='nav-item'>
                              <Link
                                to='/kontakt'
                                className='nav-links'
                                activeClassName='active'
                                onClick={closeMobileMenu}
                              >
                                Kontakt
                              </Link>
                              
                            </li>
                          </ul></div>


        </div>
        <div className="social-box social-box-nav">
          <div className="social-icon-box">
          <a href="https://www.facebook.com/ventustradepolska" target="_blank" className='ventus-trade'>
                     <span className='vt-facebook social-icon'></span>  
          </a>
          </div>{/* .social-icon-box */}
          <div className="social-icon-box">
          <a href="https://www.youtube.com/channel/UC00nGHGamXqBvqiLHc4TI1w/" target="_blank" className='ventus-trade'>
                     <span className='vt-youtube social-icon'></span>  
          </a>
          </div>{/* .social-icon-box */}
          <div className="social-icon-box">
          <a href="https://g.page/vt?gt" target="_blank" className='ventus-trade'>
                     <span className='vt-google social-icon'></span>  
          </a>
          </div>{/* .social-icon-box */}
          <div className="social-icon-box">
          <a href="https://www.instagram.com/ventus_trade/" target="_blank" className='ventus-trade'>
                     <span className='vt-instagram social-icon'></span>  
          </a>
          </div>{/* .social-icon-box */}
          </div>
          
      </div>
      <ProgressBar />
      </nav>
    </>
  );
}

export default Navbar;
