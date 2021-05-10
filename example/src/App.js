import React, { useEffect, useState } from 'react';
import CaymanPage from 'react-cayman';
import readmePath from './testReadme.md';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div className="App">
      <CaymanPage
        repoName={'How React hooks work'}
        repoUrl="https://github.com/Eliav2/how-react-hooks-work"
        repoDescription={'Understand how React-hook really behaves, once and for all!'}
        repoOwner="https://github.com/Eliav2">
        {text}
      </CaymanPage>
    </div>
  );
}

export default App;
