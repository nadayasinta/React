import createStore from "unistore";
// import { Provider, connect } from "unistore/preact";
// import { Provider, connect } from "unistore/react";
import axios from "axios";

const intialState = {
    username: "",
    email: "",
    status: "",
    listNews: [],
    topNews: []
};

export const store = createStore(intialState);

export const actions = store => ({
    setUsername(state, newusername) {
        return { username: newusername };
    },
    setEmail(state, newemail) {
        return { email: newemail };
    },
    setStatus(state, newstatus) {
        return { status: newstatus };
    },
    setListNews(state, newnews) {
        return { listNews: newnews };
    },
    setTopNews(state, newnews) {
        return { topNews: newnews };
    }
});
