import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./styles/main.css";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import { Provider, connect } from "unistore/react";
import { store } from "./components/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const mainRouting = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/category/:kat_id" component={Kategori} />
                <Route path="/profile" component={Profile} />
                <Route path="/signin" component={SignIn} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

// import createStore from "unistore";
// // import { Provider, connect } from "unistore/preact";
// import { Provider, connect } from "unistore/react";

// let storee = createStore({ count: 0 });

// let actions = storee => ({
//     increment(state) {
//         console.log("ya", state.count + 1);
//         return { count: state.count + 1 };
//     },
//     incrementAndLog({ count }, event) {
//         console.log(event);
//         return { count: count + 1 };
//     }
// });

// const App = connect(
//     "count",
//     actions
// )(({ count, increment }) => (
//     <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>ADD</button>
//     </div>
// ));

// const mainRouting = (
//     <Provider store={storee}>
//         <App />
//     </Provider>
// );
ReactDOM.render(mainRouting, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
