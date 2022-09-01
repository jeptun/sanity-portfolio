import React from "react";
import image from "../monstera-leaf.jpg";

export default function Home() {
  return (
    <main className="container">
      <img
        src={image}
        alt="Monstera Leaves"
        className=""
      />
      <section className="">
        <h1 className="">
          Ahoj Text
        </h1>
      </section>
    </main>
  );
}
