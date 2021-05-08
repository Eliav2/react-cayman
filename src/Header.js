import React from "react";

const Header = ({ repoName, repoUrl, repoDescription }) => {
  return (
    <header className="page-header" role="banner">
      <h1 className="project-name">{repoName}</h1>
      <h2 className="project-tagline">{repoDescription}</h2>
      <a href={repoUrl} className="btn">
        View on GitHub
      </a>
    </header>
  );
};

export default Header;
