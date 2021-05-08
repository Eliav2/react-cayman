import React from "react";

const MainContent = ({ repoName, repoUrl, repoOwner, content }) => {
  return (
    <main id="content" className="main-content" role="main">
      {content}

      <footer className="site-footer">
        <span className="site-footer-owner">
          <a href={repoUrl}>{repoName}</a> is maintained by{" "}
          <a href={repoUrl}>{repoOwner}</a>.
        </span>
        <span className="site-footer-credits">
          This page was generated by{" "}
          <a href="https://pages.github.com">GitHub Pages</a>.
        </span>
      </footer>
    </main>
  );
};

export default MainContent;
