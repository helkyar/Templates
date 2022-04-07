# Templates

Simple back (express) and front (react) project templates. Created with custom folder hierarchy to quickstart development.

## Start a new project

Clone this repository and delete both, the `.git` as well as the `README.md` files, you won't need them any longer.

These instrucctios are valid for both folders:  
Create a git repository on github (if you're planing on setting one up). Readme files are not included in the templates for obvious reasons.  
Once everything is set, init the local repository and connect with the remote one. Commit the `.gitignore` file rigth away to avoid future problems.

    git init
    git remote add origin https://github.com/username/new_repo
    git pull origin main
    git add .gitignore
    git commit -m "Add gitignore"

Before the inital commit of the project edit the `package.json` files as you see fit (in the `back` folder take into account that there are no database dependencies specified)

    git add -A
    git commit -m "Initial commit"
    git push -u origin main

Now only thing left is to install all dependecies.

    npm install

## Functionality

> · Login/Register  
> · Token validation  
> · 4 Managers (sequelize, mongoose, postgres, mongodb)  
> · Boilerplate code as protocol example

## Next Steps

> · Validation
