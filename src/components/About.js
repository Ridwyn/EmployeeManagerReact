import React from "react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <h5>
        Welcome to the Employe manager app. Built with React Front-end and Flask
        with MongoDB Back-end. Feel free to add, manage and delete employees to
        this open source project.
      </h5>
      <div className="center-text">
        <h6>
          <span>Portfolio:</span>{" "}
          <a href="https://ridwynidriss.com" target="_blank">
            ridwynidriss.com
          </a>
        </h6>
        <h6>Code and Design by Ridwyn Idrissou</h6>
      </div>
    </div>
  );
}
