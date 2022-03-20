# Templates

Simple back (express) and front (react) project templates. Created with custom folder hierarchy to quicktart development.

## Start a new project

Clone this repository and delete both, the .git file as well as the README.md file, you won't need them any longer.  
These instrucctios are valid for both folders:  
Create a git repository on github (if you're planing on setting one up). Readme files are not included in the templates for obvious reasons.  
Once everything is set init the local repository. Add the .gitignore file rigth away to avoid future problems.  
´´´
git init  
git add .gitignore  
git commit -m "Add .gitignore"
´´´
Now only thing left is to connect with the remote repository. And install all dependecies. Do it in this order unsless you want to wait till the installation process ends to link the repositories.

´´´
git remote add origin https://github.com/username/new_repo  
git push -u origin main  
npm install
´´´