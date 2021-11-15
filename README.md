# gdsc-backend
## How start a node project in your system
```bash
   mkdir <your-project-name>
   npm init
   npm install
```

### Alternatives : you can use npm init-y initialise your app with default details
To install multiple dependencies in one go use npm i package-name1 package-name2

### Note - before pushing your code to GitHub remember to add . gitignore file and mention node_modules folder to be ignored, of not done it'll be difficult to remove in the later stages of development.
### In order to include your static files like css add them in public folder and use express to serve them by adding
```bash
 app.use(express.static("public"));
```
