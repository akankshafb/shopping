import React, { useState, useEffect } from 'react';
import './searchItem.css';
import Header from './Header';
import { connect } from 'react-redux';
import { getItemDetail } from '../actions/actionFunction';
import ColorType from './colorType';

function ItemDetail(props) {
  var dataList = JSON.parse(localStorage.getItem('dataList'));
  var setItem1 = {};
  var totalCount = 0;

  if (dataList === null) {
    totalCount = 0;
  } else {
    dataList.map((item) => {
      totalCount = totalCount + item.qty;
      return totalCount;
    });
  }

  const [initialCount] = useState(totalCount);

  if (props.itemDetail === undefined) {
  } else {
    setItem1 = props.itemDetail;
  }

  useEffect(() => {
    
    if(props.location.itemId!==undefined){
      props.getItemDetail(props.location.itemId);
      localStorage.setItem('itemId', JSON.stringify(props.location.itemId));
      console.log(props.location.itemId);
    }else{
      
     let itemId = JSON.parse(localStorage.getItem('itemId'));
      props.getItemDetail(itemId);
    }

  },[]);

  return (
    <>
      <Header count={initialCount}></Header>
      {
        setItem1.length && setItem1.map((item,index) =>
          <div className="container d-flex mt-5" key={index}>
            <div className="col-sm-6">
              <img alt="detailPageImg" width="100%" height="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vivo_V7.jpg/220px-Vivo_V7.jpg" />
            </div>
            <div className="col-sm-6">
              <h3 className="font-weight-bold text-left">{item.name}</h3>
              <p>Amazon.com, Inc., is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four tech companies, along with Google, Apple, and Facebook.</p>
              <ColorType></ColorType>
            </div>
          </div>
        )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { itemDetail: state.data.itemDetail,itemIdFromStore:state.data.itemIdFromStore};
}

export default connect(mapStateToProps, { getItemDetail })(ItemDetail);