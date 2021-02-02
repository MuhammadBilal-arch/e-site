import "./App.css";
import Nav from "./component/nav/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Bags } from "./container/pages/bags/bags";
import { Bakery } from "./container/pages/bakery/bakery";
import { Book } from "./container/pages/book/book";
import { Medicine } from "./container/pages/medicine/medicine";
import { Makeup } from "./container/pages/makeup/makeup";
import { Clothing } from "./container/pages/clothing/clothing";
import { Furniture } from "./container/pages/furniture/furniture";
import { Furniture_two } from "./container/pages/furniture-two";
import { Grocery } from "./container/pages/grocery/grocery";
import { Grocery_two } from "./container/pages/grocery-two";
import { Page404 } from "./container/pages/404";
import { Offer } from "./container/pages/offer/offer";

import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Grocery} />
            <Route exact path="/grocery" component={Grocery} />
            <Route exact path="/grocery-two" component={Grocery_two} />
            <Route exact path="/bakery" component={Bakery} />
            <Route exact path="/makeup" component={Makeup} />
            <Route exact path="/bags" component={Bags} />
            <Route exact path="/clothing" component={Clothing} />
            <Route exact path="/furniture" component={Furniture} />
            <Route exact path="/furniture-two" component={Furniture_two} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/medicine" component={Medicine} />
            <Route exact path="/offer" component={Offer} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
