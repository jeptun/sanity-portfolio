import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="about-article ">
      <div className="">
        <section className="flex">
          <img
            src={urlFor(author.authorImage).url()}
            className=""
            alt={author.name}
          />
          <div className="">
            <h1 className="">
              Hey there. I'm <span className="">{author.name}</span>
            </h1>
            <p className="">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
