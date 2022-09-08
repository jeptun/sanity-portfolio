import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";
import colorChanger from "./func/colorChanger.js";

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
            githublink,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="container">
      <article className="singlepost-article padding-block-800 padding-lr-600">
        <header className="singlepost-head">
          <h1 className="singlepost-title">{singlePost.title}</h1>
          <div className="flex gap-1">
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

          <div className="stacked">
            <div className="singlepost-subhead">
              <div className="flex gap-1 align-itm-center">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="author-img"
                  style={{ background: colorChanger() }}
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
            <img
              src={singlePost.postImage.asset.url}
              alt={singlePost.title}
              className="media"
              style={{ background: colorChanger() }}
            />
          </div>
        </header>
        <div className="singlepost-blockcontent">
          <BlockContent
            blocks={singlePost.body}
            projectId="f14mtbcp"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
