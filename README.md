# caps
## Getting Started
### Requirements
For development, you will only need Node installed in your environment. Please use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Install
```
git clone git@github.com:Makster_04/caps.git
cd PROJECT
npm install
```
### Configure app
Any environment configuration steps.

### Start & watch
```
npm run dev
npm start
```
## Architecture 
![image](https://github.com/Makster04/caps/assets/86382359/0e6d01c5-cc18-4cf0-81e0-c4bc1523ca0b)

### Proposed File Structure
```
├── .github
│   ├── workflows
│   │   └── node.yml
├── driver
│   ├── handler.js
│   ├── index.js
│   └── driver-handler.test.js
├── vendor
│   ├── handler.js
│   ├── index.js
│   └── vendor-handler.test.js
├── .eslintrc.json
├── .gitignore
├── eventPool.js.
├── hub.js.
├── package.json
└── README.md
```
### Languages & tools
* JavaScript
* Jest
* Node
* Chance
  
## Change Log
0.0.1 - Initial release
