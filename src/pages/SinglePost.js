import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";


import colorChanger from "../func/colorChanger.js";
import Loader from "../components/Loader.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            postImage{
              asset->{
                  _id,
                  url
              }
            },
            tags,
            date,
            body,
            prewlink,
            slider{
              asset->{
                _id,
                url
              }
            },
            githublink,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <Loader />;

//  console.log(singlePost.postImage.asset.url);

  return (
    <main className="container">
      <article className="singlepost-article padding-block-900 padding-lr-600">
        <aside className="singlepost-aside">
          <h1 className="singlepost-title">{singlePost.title}</h1>
          <div className="singlepost-tags-wrapper">
            {singlePost.tags ? (
              singlePost.tags.map((item, index) => (
                <div
                  key={index}
                  className="singlepost-tags"
                  style={{ color: colorChanger() }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div>No tags found!</div>
            )}
          </div>

          <div className="singlepost-container">
            <LazyLoadImage
              src={singlePost.postImage.asset.url}
              alt={singlePost.title}
              className="singlepost-container-image"
            />
            <div className="singlepost-subhead">
              <div className="flex gap-1 align-itm-center">
                <LazyLoadImage
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="author-img"
                  style={{
                    background: colorChanger(),
                  }}
                />
                <p className="author-name">{singlePost.name}</p>
                <span className="singlepost-date">
                  {new Date(singlePost.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex gap-1 align-itm-center ">
                <SocialIcon
                  url={singlePost.prewlink}
                  target="_blank"
                  fgColor="#fff"
                  bgColor="#3ba55d"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url={singlePost.githublink}
                  target="_blank"
                  fgColor="#fff"
                  bgColor="#5661f2"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
        </aside>
        <section className="singlepost-blockcontent">
          <BlockContent
            blocks={singlePost.body}
            projectId="f14mtbcp"
            dataset="production"
          />
        </section>
      </article>
    </main>
  );
}
