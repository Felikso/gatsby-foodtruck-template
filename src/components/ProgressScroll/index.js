import React from 'react'

import './ProgressScroll.css'

export default function ProgressScroll() {

    
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-scroll-bar").style.width = scrolled + "%";
  }

    return (
    <div className="progress-scroll-container">
        <div className="progress-scroll-bar" id="progress-scroll-bar"></div>
      </div>  
    )
}
