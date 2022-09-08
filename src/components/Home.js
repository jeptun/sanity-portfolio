import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";
import meOldPhoto from "../jaold-uprava.jpg";
import colorChanger from "./func/colorChanger.js";

export default function Home() {
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
    <main className="home-container padding-block-xl padding-lr-600">
      <section className="hero">
        {/* <img
          src={urlFor(author.authorImage).url()}
          className="home-img"
          alt={author.name}
        /> */}
        <img src={meOldPhoto} alt={author.name} />
        <div>
          <h1>{`Ahoj, jsem ${author.name}. Junior developer!`}</h1>
          <p>{author.bio}</p>
          <NavLink to="/post" className="btn" style={{ borderColor: colorChanger() }}>
            Projekty
          </NavLink>
        </div>
      </section>
    </main>
  );
}
