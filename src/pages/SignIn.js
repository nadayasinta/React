import React from "react";
import axios from "axios";
import Header from "../components/Header";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews: [],
            token: []
        };
    }

    clickLogin = event => {
        const self = this;
        axios
            .post("https://nadaaa.free.beeceptor.com/login")
            .then(function(response) {
                console.log(response.data);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("status", response.data.status);
                self.props.history.push("/profile");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <Header />
                    </div>
                </div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label for="usr">Name:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="usr"
                                />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="pwd"
                                />
                            </div>
                            <button
                                type="button"
                                class="btn btn-info"
                                onClick={this.clickLogin}
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
