import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import colorChanger from "../func/colorChanger.js";
import { SocialIcon } from "react-social-icons";
import Loader from "../components/Loader.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function UsefulLinks() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          logoLink,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return <Loader />;
  return (
    <main className="padding-block-600">
      <section className="cards-wrapper padding-block-900 padding-lr-600">
        <h1 className="">Užitečné odkazy</h1>
        <h2 className="padding-block-600">
          Veškeré odkazy a texty jsou třetích stran ©.
        </h2>
        <div className="cards">
          {projectData &&
            projectData.map((project, index) => (
              <article className="card-post flow padding-lr-200" key={index}>
                <h3>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="flex gap-1 padding-lr-200">
                  <div>
                    <LazyLoadImage
                      src={project.logoLink}
                      alt={index}
                      className=""
                      style={{
                        background: colorChanger(),
                        height: 50,
                        width: 50,
                        borderRadius: "50%",
                      }}
                    />
                    <SocialIcon
                      url={project.link}
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 30, width: 30, marginLeft: 10 }}
                    />
                  </div>
                  <div>
                    <div>{new Date(project.date).toLocaleDateString()}</div>
                    <div>Zdroj: {project.place}</div>
                    <div>Typ: {project.projectType}</div>
                    <div>#: {project.tags}</div>
                  </div>
                </div>
                <p className="padding-lr-200 padding-block-200">{project.description}</p>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
