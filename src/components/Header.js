import React,{useRef} from 'react';
import SiteLogo from './siteLogo';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
const Header = (props) => {
    const searchInput = useRef();
        
   return(
        <div className="row HeaderStyle">
        <div className="col-sm-4 left-align col-2">
           <SiteLogo secondImg="../images/Plain_Yellow_Star.png"></SiteLogo>
        </div>
        <div className="col-sm-4 col-8">
            <div className="input-group">
                <input type="text" className="form-control" onChange={(e)=>props.handleChange(e)} onKeyPress={(e)=>props.handleChange(e)} ref={searchInput} placeholder="Search Item" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" onClick={(e)=>props.handleClick(e)} type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
        <div className="col-sm-4 col-2 menuDiv">
        <div className="col-sm-10 col-2">
        <ul className="menuItem">
                <li>Home</li>
                <li><Link to={
                {
                    pathname: '/ShoppingBrands',
                }
            }>Shopping Brands</Link></li>
            </ul>
            </div>
            <div className="col-sm-2 col-2">
            <CartIcon totalCount={props.count}></CartIcon>
            </div>
        </div>
    </div>
   )
}

export default Header;
