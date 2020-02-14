import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchItem from './components/SearchItem';
import OrderSummary from './components/OrderSummary';
import ShoppingBrands from './components/ShoppingBrands';
import ItemDetail from './components/ItemDetail';
//import ItemList from './components/ItemList'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={SearchItem} />
            <Route path="/ordersummary" component={OrderSummary} />
            <Route path="/ShoppingBrands" component={ShoppingBrands} />
            <Route path="/ItemDetail" component={ItemDetail}/>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
