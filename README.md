# beer-recipe

blaze, run 

`npm install` 

then run 

`browserify --extension=.jsx -t [ reactify ] App.jsx > bundle.js` from `/scripts` dir.

You have to do this after every save to compile the code into modules. Gulp is a good tool to automate this command after every save. Now you can `npm install anyModule` and use: `var anyModule = require('anyModule')` only in the files you need that module. Pretty nice. For files in this repo is is `var myScript = require('../scripts/myScript.js`)

