# react-cayman

[![npm version](https://badge.fury.io/js/react-cayman.svg)](https://github.com/Eliav2/react-cayman)
[![downloads](https://img.shields.io/npm/dw/react-cayman)](https://www.npmjs.com/package/react-cayman)
[![issues](https://img.shields.io/github/issues/Eliav2/react-cayman)](https://github.com/Eliav2/react-cayman/issues)
[![licence](https://img.shields.io/npm/l/react-cayman)](https://github.com/Eliav2/react-cayman/blob/master/LICENSE)

![image](https://user-images.githubusercontent.com/47307889/117636186-415a3980-b189-11eb-84c8-d273e92bd3f1.png)

The popular [cayman theme](https://github.com/jasonlong/cayman-theme) implemented as a React component!

## installation

with npm `npm react-cayman`.  
or `yarn add react-cayman`.

## Usage

### With markdown file

This component support markdown out of the box using [markdown-it](https://github.com/markdown-it/markdown-it). In this
example the `testReadme.md` file is loaded and rendered on the screen. In this case `CaymanPage` is expected to have a
single child which is the loaded markdown as text(string!).

```jsx
import React, {useEffect, useState} from 'react';
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
                repoName={'your repo name - main header'}
                repoUrl="https://github.com/<username>/<repo-name>"
                repoDescription={'one line description'}
                repoOwner="https://github.com/<username>">
                {text}
            </CaymanPage>
        </div>
    );
}

export default App;
```

### With custom html

in case you want to use your own markdown or in case you don't want the content page to be markdown use this component
like this:

```jsx
import React, {useEffect, useState} from 'react';
import CaymanPage from 'react-cayman';
import readmePath from './testReadme.md';

function App() {
    return (
        <div className="App">
            <CaymanPage
                repoName={'your repo name - main header'}
                repoUrl="https://github.com/<username>/<repo-name>"
                repoDescription={'one line description'}
                repoOwner="https://github.com/<username>"
                markdown={false} //notice !
            >
                <div>
                    hello world!
                </div>
                <p>Your custom html here</p>
            </CaymanPage>
        </div>
    );
}

export default App;
```

### Demos

this demo (at this repo at [./example](./example)) will create cayman page
for [this repo](https://github.com/Eliav2/how-react-hooks-work). note that this is a React component. code
sandbox: <https://codesandbox.io/s/github/Eliav2/react-cayman/tree/master/example>

# Why

Cayman theme for GitHub Pages is implemented with Jekyll which uses Liquid and other dependencies which rely on Ruby
on rails, so you can't just simply import it into React project. this component is refactored, so you could simply
import it into React project, and it uses the original cayman theme styles.

# Props

- **repoName**[string] - the main header.
- **repoDescription**[string] - description under the main header.
- **repoUrl**[string] - url to the button under the header.
- **repoOwner**[string] - url for owner used in the footer.
- **markdown**[boolean] - markdown mode or plain html mode?
- **showHeader**[boolean] - show the header?
- **showFooter**[boolean] - show the footer?

if any other usage is needed fork this repo and edit it for your needs.

### differences from the original

- The Markdown processor of this component is [markdown-it](https://github.com/markdown-it/markdown-it) instead
  of [kramdown](https://github.com/gettalong/kramdown), which for my option is much better.
- The highlighter of the Markdown processor is [highlight.js](https://highlightjs.org/) instead
  of [Rouge](https://github.com/rouge-ruby/rouge)

## Versions

See [CHANGELOG.md](CHANGELOG.md) in this repo.
