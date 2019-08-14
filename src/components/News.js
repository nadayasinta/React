import React from "react";
import dislikeimage from "../images/dislike.png";
import heartimage from "../images/heart.png";
import shareimage from "../images/share.png";

function News(props) {
    return (
        <div class="container news">
            {props.news.map(function(berita, index) {
                return (
                    <div class="row border mb-5">
                        <div class="col-12 p-0">
                            <img
                                class="logo w-100"
                                src={berita.urlToImage}
                                alt="logo"
                            />{" "}
                        </div>
                        <div class="col-12 text-left py-3">
                            <h3 class="font-weight-bold">
                                <a href={berita.url}>{berita.title}</a>
                            </h3>
                        </div>
                        <div class="col-12 text-left">
                            <p>{berita.description}</p>
                        </div>
                        <div class="col-12 text-left">
                            <p class="text-secondary">
                                Publish : {berita.publishedAt}
                            </p>
                        </div>

                        <div class="col-4 border bg-light py-2 text-center">
                            <a href="/#">
                                <img
                                    class="logo logososmed"
                                    src={heartimage}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div class="col-4 border bg-light py-2 text-center">
                            <a href="/#">
                                <img
                                    class="logo logososmed"
                                    src={shareimage}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div class="col-4 border bg-light py-2 text-center">
                            <a href="/#">
                                <img
                                    class="logo logososmed"
                                    src={dislikeimage}
                                    alt="logo"
                                />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default News;
