import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import meCompres from "../img/jacompr.png";
import colorChanger from "../func/colorChanger.js";
import Loader from "../components/Loader.jsx";

export default function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url,
          "description": description[0].children[0].text,
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <Loader />;

  return (
    <main className="home-container padding-lr-600">
      <section className="hero">
        <div className="hero-info">
          <h1>
            Ahoj, jmenuji se <span className="halfcolor">{author.name}.</span>{" "}
            <br />A jsem junior
            <span className="halfcolor"> front-end</span> developer!
          </h1>
          <p>{author.bio}</p>
          <p>{author.description}</p>
          <NavLink
            to="/post"
            className="btn"
            style={{ borderColor: colorChanger() }}
          >
            Projekty
          </NavLink>
        </div>
        <LazyLoadImage
          src={author.authorImage}
          alt={author.name}
          placeholderSrc={meCompres}
          className="hero-img"
         
        />
      </section>
  
    </main>
  );
}
