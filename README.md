# Templates

Simple back (express) and front (react) project templates. Created with custom folder hierarchy to quickstart development.

## Start a new project

Clone this repository and delete both, the `.git` as well as the `README.md` files, you won't need them any longer.  
  
These instrucctios are valid for both folders:  
Create a git repository on github (if you're planing on setting one up). Readme files are not included in the templates for obvious reasons.  
Once everything is set, init the local repository, connect with the remote one and pull all possible changes. 

    git init  
    git remote add origin https://github.com/username/new_repo  
    git pull origin main  
    
Now only thing left is to make the commits. Commit the `.gitignore` file rigth away to avoid future problems, then the rest of the files.  
Finally, install all dependecies. Do it in this order unsless you want to wait till the installation process ends to link the repositories.  

    git add .gitignore  
    git commit -m "Add gitignore"  
    git add -A
    git commit -m "Initial commit"
    git push -u origin main  
    npm install  

## Next Steps

(1) Implement sequelize manager  
(2) Implement mongo manager  
(3) Front & Back user register  
(4) Fully integrated login functionality with token   
(5) CRUD implementation in all managers  
