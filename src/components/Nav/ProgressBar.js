import React from 'react'

import './ProgressBar.css'

export default function ProgressBar() {

    
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  }

    return (
    <div className="progress-container">
        <div className="progress-bar" id="progress-bar"></div>
      </div>  
    )
}
