import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="container">
      <section className=" padding-block-700 padding-lr-800">
        <h1 className="">
          Blog Posts Page
        </h1>
        <h2 className="">
          Welcome to my page of blog posts
        </h2>
        <div className="cards">
          {postData &&
            postData.map((post, index) => (
              <article className="card-post">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className=""
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className=""
                    />
                    <span className="">
                      <h3 className="">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
