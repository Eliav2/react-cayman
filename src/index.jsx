import React from 'react';
import text2Html from 'html-react-parser';
import './style.css';

import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import Header from './Header';
import MainContent from './MainContent';

const md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
});

const CaymanPage = ({
  children = '',
  repoName = '',
  repoDescription = '',
  repoUrl = '',
  repoOwner = '',
  markdown = true,
  showHeader = true,
  showFooter = true,
}) => {
  const content = markdown ? text2Html(md.render(children)) : children;
  return (
    <React.Fragment>
      {showHeader ? <Header {...{ repoName, repoDescription, repoUrl }} /> : null}
      <MainContent {...{ repoName, repoOwner, repoUrl, content, showFooter }} />
      <link rel="stylesheet" href="default.min.css" />
      <script src="highlight.min.js" />
    </React.Fragment>
  );
};

export default CaymanPage;
