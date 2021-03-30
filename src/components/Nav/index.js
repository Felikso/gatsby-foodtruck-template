import React, { useState } from 'react'
import { Link } from 'gatsby'

import SvgVentusTradeLogo from "./SvgVentusTradeLogo"
import ProgressBar from "./ProgressBar"
import NavData from "./navData"
import './Nav.scss'

const brandName = "Ventus Trade"

export default function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [clickCurrent, setClickCurrent] = useState(false);
    const handleClickCurrent = () => setClickCurrent(!clickCurrent);

    return (
        <>
        <div className={click ? 'menu-body nav-active' : 'menu-body'}>
            <div className="menu-icon__box"><div onClick={handleClick} className="menu-icon"  aria-label="Main Menu">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div></div>
            <div className="brand-box">
                <div className="brand-box__name">
                    <h2>{brandName}</h2>
                </div>
                <div className="brand-box__logo">
                    <SvgVentusTradeLogo />
                </div>
            </div>
            <div className="nav">
            <div className="nav__content">
                <ul className="nav__list">
                {
                    NavData.map((attr, i) => (
                        <Link to={attr.path} className="link-item" activeClassName="active"><li className="nav__list-item" key={i}>{attr.name}</li></Link>
                    ))
                }
                </ul>
            </div>
            </div>
            <ProgressBar/>              
        </div>


        </>
    )
}
