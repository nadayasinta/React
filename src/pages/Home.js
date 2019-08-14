import React from "react";
import axios from "axios";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import News from "../components/News";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";

const apiKey = "4dce99fded1c454895c9d9c01b2264d8";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
    baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;
const urlTopNews =
    baseUrl +
    "everything?" +
    "q=apple&" +
    "from=2019-08-12&" +
    "sortBy=popularity&" +
    "apiKey=" +
    apiKey;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response) {
                self.props.setListNews(response.data.articles);
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        axios
            .get(urlTopNews)
            .then(function(response) {
                self.props.setTopNews(response.data.articles);
                console.log("to news", response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    handleChange = event => {
        const self = this;
        if (event.target.value.length > 0) {
            self.setState({ value: event.target.value }, () => {
                axios
                    .get(
                        baseUrl +
                            "everything?" +
                            "q=" +
                            self.state.value +
                            "&" +
                            "from=2019-08-12&" +
                            "sortBy=popularity&" +
                            "apiKey=" +
                            apiKey
                    )
                    .then(function(response) {
                        self.props.setTopNews(response.data.articles);
                        console.log("search", response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            });
        }
    };

    render() {
        if (!this.props.status) {
            return <Redirect to={{ pathname: "/signin" }} />;
        } else {
            return (
                <div>
                    <div class="container-fluid">
                        <div class="row">
                            <Header doSearch={this.handleChange} />
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-4">
                                <SideBar
                                    news={this.props.listNews.slice(0, 5)}
                                />
                            </div>
                            <div class="col-8">
                                <News news={this.props.topNews.slice(0, 10)} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect(
    "username, email, status,listNews,topNews",
    actions
)(Home);
