import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import mePhoto from "../img/ja.png";
import meCompres from "../img/jacompr.png";
import colorChanger from "../func/colorChanger.js";
import Loader from "../components/Loader.js";

export default function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <Loader />;

  return (
    <main className="home-container  padding-lr-600">
      <section className="container hero">
        <div className="hero-info">
          <h1>
            Ahoj, jmenuji se <span className="halfcolor">{author.name}.</span>{" "}
            <br />A jsem junior
            <span className="halfcolor"> front-end</span> developer!
          </h1>
          <p>{author.bio}</p>
          <NavLink
            to="/post"
            className="btn"
            style={{ borderColor: colorChanger() }}
          >
            Projekty
          </NavLink>
        </div>
        <LazyLoadImage
          src={mePhoto}
          alt={author.name}
          placeholderSrc={meCompres}
          className="hero-img"
          style={{
            background: colorChanger(),
          }}
        />
      </section>
    </main>
  );
}
