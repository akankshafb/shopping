import React,{useRef} from 'react';
import './searchItem.css';
import imageLogo from '../images/flipcart-primary-logo.png'
import flipCartLogo from '../images/Flipkart-Logo.png';


function SiteLogo(props) {
    const imageRef = useRef(null);
    return (
        
      <div className="">
          {/* src={imageLogo} */}
          <img alt="siteLogo" src={imageLogo} onMouseOver={()=>{imageRef.current.src = flipCartLogo;}} onMouseOut={()=>{imageRef.current.src = imageLogo;}} className="logoImage" ref={imageRef} />
      </div>
    );
  }

export default SiteLogo;