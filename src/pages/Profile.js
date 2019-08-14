import React from "react";
import Header from "../components/Header";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";

const Profile = props => {
    const username = props.username;
    const email = props.email;
    const status = props.status;
    console.log(status);
    if (!status) {
        return <Redirect to={{ pathname: "/signin" }} />;
    } else {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <Header />
                    </div>
                </div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h4>Username : {username}</h4>
                            <h4>Email : {email}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(
    "username, email, status",
    actions
)(Profile);
