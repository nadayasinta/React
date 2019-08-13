import React from "react";
import Header from "../components/Header";
import { Redirect } from "react-router-dom";

const Profile = () => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const status = localStorage.getItem("status");
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

export default Profile;
