import React, { Component } from 'react';
import './searchItem.css';
import ItemList from './ItemList';
import { addToCart, getItemList, getSearchList } from '../actions/actionFunction';
import { connect } from 'react-redux';
import Header from './Header';


class SearchItem extends Component {
    constructor(props) {
        super(props);
        var dataList = JSON.parse(localStorage.getItem('dataList'));
        var totalCount = 0;
        if (dataList === null) {
            totalCount = 0;
        } else {
            dataList.map((item) => {
                totalCount = totalCount + item.qty;
                return totalCount;
            });
        }

        this.state = {
            count: totalCount,
            dataList: [],
            orderListNew: [],
            totalCountNew: [],
            isOpen: false,
            isOpenSort: false,
            searchData: [],
            searchFlag: false,
            searchInput: ''
        }
        this.searchInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (e) => {
        if (e.target.value === '') {
            this.props.getSearchList(this.state.searchInput);
        } else {
            this.setState({ searchInput: e.target.value });
        }

    }
    handleClick = (e) => {
        this.props.getSearchList(this.state.searchInput);
    }
    componentDidUpdate() {
        var dataList = JSON.parse(localStorage.getItem('dataList'));
        var totalCount = 0;
        if (dataList === null) {
            totalCount = 0;
        } else {
            dataList.map((item) => {
                totalCount = totalCount + item.qty;
                return totalCount;
            });
        }
        this.getCount(totalCount);
    }
    getCount(totalCount) {
        setTimeout(() => {
            this.setState({
                count: totalCount
            })
        }, 1000)
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <Header count={count} handleClick={(e) => this.handleClick(e)} handleChange={(e) => this.handleChange(e)}></Header>
                <ItemList childHandler={(e) => { this.childHandlerFunc(e) }} searchData={this.state.searchData} searchFlag={this.state.searchFlag} />
                <div className="">
                    <div className="container">
                        <p className="copyright">@Copyright</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    addToCart,
    getItemList,
    getSearchList
}
const mapStateToProps = (state) => {
    return { getSearchList: state.data.itemList, state };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
