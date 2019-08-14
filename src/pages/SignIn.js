import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { connect } from "unistore/react";
import { actions } from "../components/store";

class SignIn extends React.Component {
    clickLogin = event => {
        const self = this;
        axios
            .post("https://nadadong.free.beeceptor.com/login")
            .then(function(response) {
                console.log(response.data);
                self.props.setUsername(response.data.username);
                self.props.setEmail(response.data.email);
                self.props.setStatus(response.data.status);
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

export default connect(
    "username, email, status",
    actions
)(SignIn);
