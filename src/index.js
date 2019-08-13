import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./styles/main.css";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const mainRouting = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:kat_id" component={Kategori} />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(mainRouting, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
