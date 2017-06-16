# E2E test

### Install Docker

* [Mac](https://www.docker.com/docker-mac)
* [Win](https://www.docker.com/docker-windows)
* [Other OS](https://www.docker.com)


### Install

## Standalone chrome
To debug local you can use standalone chrome

[Download here](https://sites.google.com/a/chromium.org/chromedriver/getting-started)

add line in `.hermione.conf.js`

```js
gridUrl: 'http://localhost:9515'
```


## Clone project
```bash
git clone git@github.com:frontend-science/e2e-hermione.git
cd e2e-hermione
npm install
```

### To run standalone chrome
```bash
./docker-chrome.sh
```
### To change environment
Type in console
For OSX:
```bash
export NODE_ENV=development
```
For Windows:
```bash
SET NODE_ENV=development
```


### To run all tests
```bash
npm test
```

### To run in specified env (macOs)

```bash
NODE_ENV=production npm test
```

### To run by sets
```bash
npm run admin
npm run client
```
### To run separate tests
```bash
npm run admin tests/admin/mytest.js
npm run client tests/client/mytest.js
NODE_ENV=production hermione -c hermione.conf.js tests/admin/mytest.js
```

## Project structure
```
    ┌ configs              // configuration for different envs
    │  ├ default.json      // applied always
    │  ├ development.json  // merging with default
    │  └ production.json
    │
    ├ debug                // tpm folder for debug screenshots (in .gitignore)
    │  ├ admin
    │  └ client
    │
    ├ pages                // PageObjects - selectors for different elems on pages
    │  ├ admin
    │  │  ├ adminPage1.js
    │  │  ├ adminPage2.js
    │  │  └ adminPage3.js
    │  └ client
    │
    ├ tests                // tests js files
    │  ├ admin
    │  │  ├ adminPage1.js
    │  │  ├ adminPage2.js
    │  │  └ adminPage3.js
    │  └ client
    │
    ├ .hermione.conf.js    // main test config
    ├ docker-***.sh        // sh files for quick run of dockerized browsers
    ├ package.json         // project deps, and npm run scripts
    └ README.md            // This documentation file
```

## Docs
* [WebdriverIO](http://webdriver.io/api.html)
* [Hermione test framework](https://github.com/gemini-testing/hermione)
* [Mocha test framework](http://mochajs.org)
* [Chai](http://chaijs.com/api/)
