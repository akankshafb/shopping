import React, { Component} from 'react';
import './ItemList.css';
import { Link } from 'react-router-dom';
import { addToCart, getItemList } from '../actions/actionFunction';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import AddToCartBtn from './AddToCartBtn';
import SortBy from './SortBy';
import PriceFilter from './PriceFilter';
import Model from './FilterModel';
import ModelSort from './SortModel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sliderTwo from '../images/3.jpeg';

class ItemList extends Component {
    constructor(props) {
        super();
        this.state = {
            itemList: [],
            isOpen: false,
            isOpenSort: false,
            internalHeight:''
        }

        

        
    }

    static getDerivedStateFromProps(nextProps,prevState){
       
      //console.log("getDrivedStateFromProps__",prevState);
     // this.setState();

    }

    
    componentDidMount() {
        this.props.getItemList();
        //alert("componentDidMount");
        
    }

   componentDidUpdate(prevProps) {
        if (prevProps.itemList !== this.props.itemList) {
            console.log(this.props.itemList);
            this.setState({
                itemList: this.props.itemList
            })
        }
    }
    sortHightoLow = () => {
        const { itemList } = this.state;

        this.setState({
            itemList: itemList.sort(function (a, b) {
                return b.price - a.price
            })
        })
    }

    sortLowtoHigh = () => {
        const { itemList } = this.state;
        this.setState({
            itemList: itemList.sort(function (a, b) {
                return a.price - b.price
            })
        })
    }

    filterItemList = (value) => {
        const itemList = JSON.parse(localStorage.getItem('JsonData'));
        this.setState({
            itemList: itemList.filter(item => ((value.min <= item.price) &&
                (item.price <= value.max)))
        })
    }

    addTocartFunc = (c) => {
        this.props.addToCart(c);

    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModalSort = () => {
        this.setState({
            isOpenSort: !this.state.isOpenSort
        });
    }
   

    render() {
        var { itemList } = this.state;
        return (
            <>
                <div className="col-sm-2 float-left">
                    <PriceFilter filterDataList={(e) => { this.filterItemList(e) }}></PriceFilter>
                </div>
                <div className="col-sm-10 float-left">
                <Carousel showThumbs="true" showIndicators="false">
              
              <div>
                  <img alt="productImg" src="https://www.shoppingspree.pk/catalog/view/theme/pav_styleshop/image/slider_images/shoppingspree-banner.png" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src={sliderTwo} alt={sliderTwo}/>
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
                    <div className="col-sm-12 d-block d-sm-none mobileSection">
                        <div className="col-6 float-left text-right"><button onClick={this.toggleModalSort} className="sortBtn"> <FontAwesomeIcon icon={faSort} /> Sort</button></div>
                        <div className="col-6 float-right text-left"><button onClick={this.toggleModal} className="filterBtn"> <FontAwesomeIcon icon={faFilter} />Filter</button></div>
                    </div>
                    <SortBy sortHightoLow={() => { this.sortHightoLow() }} sortLowtoHigh={() => { this.sortLowtoHigh() }} />
                    <div className="row margin-top20">
                        {
                            itemList.length && itemList.map((c, index) =>
                                <div className="col-sm-3 col-6" key={index}>
                                    <div className="itemBox">
                                        <div className="imageDiv">
                                            <Link to={
                                                {
                                                    pathname: `/ItemDetail/`+c.id,
                                                    itemId:c.id
                                                }}
                                                ><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vivo_V7.jpg/220px-Vivo_V7.jpg" className="productImage" alt="myimage"  /></Link>
                                        </div>
                                        <div className="itemDetail">
                                            <p>{c.name} </p>
                                            <span className="Regularprice">${c.price}</span>
                                            <span className="Saleprice">{c.price - (c.price * c.discount / 100)}</span>
                                            <span className="discountRate"><b>{c.discount}% off</b></span>
                                            <br />
                                            <p className="text-center">
                                                <AddToCartBtn addTocartFunc={() => this.addTocartFunc(c)}></AddToCartBtn>
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                <Model filterDataList={(e) => { this.filterItemList(e) }} show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Here's some content for the modal
                 </Model>
                <ModelSort sortHightoLow={() => { this.sortHightoLow() }} sortLowtoHigh={() => { this.sortLowtoHigh() }} show={this.state.isOpenSort}
                    onClose={this.toggleModalSort}>
                    Here's some content for the modal
                    </ModelSort>

            </>
        );
    }
}


const mapStateToProps = (state) => {
    return { itemList: state.data.itemList, cartData: state.data.cartData,getSearchList:state.data.itemList};
}
export default connect(mapStateToProps, { addToCart, getItemList })(ItemList);
