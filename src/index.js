// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { DataProvider } from 'components/Context'

// Internals
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

// Apps
import Login from 'components/Login-Page'
import BaseLayout from 'components/Base-Layout'
import Home from 'components/Home-Page'
import Product from 'components/Product-Page'
import Men from 'components/Product-Page/ListMen-Page'
import Women from 'components/Product-Page/ListWomen-Page'
import Accessories from 'components/Product-Page/ListAccessories-Page'
import AddProduct from 'components/Product-Page/Form-Page'
import OrderList from 'components/ListOrder-Page'
import OrderDetail from 'components/DetailOrder-Page'
import UserList from 'components/ListUser-Page'
import UserDetail from 'components/DetailUser-Page'
import AdminList from 'components/ListAdmin-Page'
import AdminDetail from 'components/DetailAdmin-Page'

ReactDOM.render(
  <Router>
    <DataProvider>
      <Switch>
          <Route exact path="/" component={Login} />
          <BaseLayout>
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/order" component={OrderList} />
            <Route path="/dOrder" component={OrderDetail} />
            <Route path="/user" component={UserList} />
            <Route path="/dUser" component={UserDetail} />
            <Route path="/admin" component={AdminList} />
            <Route path="/dAdmin" component={AdminDetail} />
          </BaseLayout>
      </Switch>
    </DataProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
