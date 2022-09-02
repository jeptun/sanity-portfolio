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
                description,
                tags,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt,                  
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="padding-block-600">
      <section className="padding-block-900 padding-lr-600">
        <div className="cards-wrapper">
          <h1 className="">Blog Posts Page</h1>
          <h2 className="padding-block-600">
            Welcome to my page of blog posts
          </h2>
          <div className="cards">
            {postData &&
              postData.map((post, index) => (
                <article className="card-post" key={index}>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <figure className="flow" key={index}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className=""
                        loading="lazy"
                      />
                      <figcaption>
                        <h3 className="">{post.title}</h3>
                        <p className="post-tags">{post.tags}</p>
                        <p>{post.description}</p>
                      </figcaption>
                    </figure>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
