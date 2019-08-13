import React from "react";
import axios from "axios";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import News from "../components/News";

const apiKey = "4dce99fded1c454895c9d9c01b2264d8";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
    baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;
const urlTopNews =
    baseUrl +
    "everything?" +
    "q=apple&" +
    "from=2019-08-12&" +
    "to=2019-08-12&" +
    "sortBy=popularity&" +
    "apiKey=" +
    apiKey;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews: [],
            topNews: []
        };
    }

    componentDidMount() {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        axios
            .get(urlTopNews)
            .then(function(response) {
                self.setState({ topNews: response.data.articles[0] });
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        console.log("here");
        // const { listNews } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <Header />
                    </div>
                </div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-4">
                            <SideBar news={this.state.listNews.slice(0, 5)} />
                        </div>
                        <div class="col-8">
                            <News news={this.state.topNews} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
