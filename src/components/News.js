import React from "react";
import newsimage from "../images/news.jpg";
import dislikeimage from "../images/dislike.png";
import heartimage from "../images/heart.png";
import shareimage from "../images/share.png";

function News(props) {
    return (
        <div class="container news">
            <div class="row border">
                <div class="col-12 p-0">
                    <img
                        class="logo w-100"
                        src={props.news.urlToImage}
                        alt="logo"
                    />{" "}
                </div>
                <div class="col-12 text-left py-3">
                    <h3 class="font-weight-bold">
                        <a href={props.news.url}>{props.news.title}</a>
                    </h3>
                </div>
                <div class="col-12 text-left">
                    <p>{props.news.description}</p>
                </div>
                <div class="col-12 text-left">
                    <p class="text-secondary">
                        Publish : {props.news.publishedAt}
                    </p>
                </div>

                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={heartimage}
                            alt="logo"
                        />
                    </a>
                </div>
                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={shareimage}
                            alt="logo"
                        />
                    </a>
                </div>
                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={dislikeimage}
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default News;
