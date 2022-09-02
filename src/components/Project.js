import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
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
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="">
      <section className="">
        <h1 className="">My Projects</h1>
        <h2 className="">
          Welcome to my projects page!
        </h2>
        <section className="">
          {projectData &&
            projectData.map((project, index) => (
              <article className="">
                <h3 className="">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="">
                  <span>
                    <strong className="">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                  <span>{project.tags}</span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
