import React, { useRef, useEffect,useState } from 'react';
import './searchItem.css';
import imageLogo from '../images/flipcart-primary-logo.png'
import flipCartLogo from '../images/Flipkart-Logo.png';
import BrandsData from './brandsData';
import Noify from './notify';


const ShoppingBrands = () => {
    const [flag, setFlag] = useState(false);
    const [iniNotify,getNotifyFun] = useState(false);
    const notifyRef = useRef(null);
    const emailTxtRef = useRef(null);
    var userObj= {};
    userObj.name="Akanksha";
    userObj.email = "akanksha.b.akanksha@capgemini.com";

    useEffect(() => {
        console.log("Hi");
    })

    return (

        <div>
            <button onClick={()=>setFlag(!flag)}>Click</button>
            <input type="text" />
            <div className="container">
                <Noify user={userObj}></Noify>
                <div ref={notifyRef} >
                    Hi.. I am notify Div box
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="checkBox" />
                        <label>Indian Brands</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="checkBox" />
                        <label>Other Country Brands</label>
                    </div>
                </div>
                <div className="row">
                    {
                        BrandsData.map((c, index) =>
                            <div className="col-sm-4">
                                <img src={c.logoImg} width="300px" height="300px" />
                                <p><b>CEO : </b>{c.ceo}</p>
                                <p><b>Founder : </b>{c.founder}</p>
                                <p>{c.des}</p>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ShoppingBrands;