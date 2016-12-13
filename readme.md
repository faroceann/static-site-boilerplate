Static Site Boilerplate
======
Static site boilerplate with all the gulp tasks. Easy SASS compilation, JS minification and concatenation, EJS view engine, and one click build.  

This is my starting point for building simple static sites. The project offers an EJS view engine, Gulp SASS compiler, JS/CSS minifiers, and autoprefixer. 

# Folder structure: 

    ├── ...
    ├── app                     # Development files
    │   ├── views               # EJS template files
    │   │ ├──── pages           # Pages, e.g. index.ejs
    │   │ └──── partials        # Partials, e.g. header.ejs 
    │   ├── assets              # Media assets such as images, videos, and fonts
    │   ├── js                  # Javascript things
    │   ├── sass                # Uncompiled SASS 
    │   └── css                 # Compiled CSS
    ├── dist                    # Static host-ready production files, including all .html pages
    │   ├── css
    │   ├── js 
    │   └── assets              # automatically copied from ./app      
    └── ...

# Getting started: 
```
# Clone the repo
git clone https://github.com/maxhammad/react-ruleminer.git
cd ruleminer
npm install

# Development 
gulp watch 
 
# Build
gulp build 

# Test production build using Node.js static server
npm start production
``` 


