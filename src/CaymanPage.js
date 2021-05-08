import React, { useEffect, useState } from "react";
import text2Html from "html-react-parser";

import "./style.css";

import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import Header from "./Header";
import MainContent from "./MainContent";

const md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      console.log(hljs.getLanguage(lang));
      try {
        console.log(hljs.highlight(str, { language: lang }).value);
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
});

function CaymanPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        setText(text);
      });
  }, []);

  console.log(md.render(text));

  return (
    <>
      <Header
        repoName={"How React hooks work"}
        repoUrl="https://github.com/Eliav2/how-react-hooks-work"
        repoDescription={
          "Understand how React-hook really behaves, once and for all!"
        }
      />
      <MainContent
        repoName={"How React hooks work"}
        repoUrl="https://github.com/Eliav2/how-react-hooks-work"
        repoOwner="https://github.com/Eliav2"
        content={text2Html(md.render(text))}
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css"
      />
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
    </>
  );
}

export default CaymanPage;
