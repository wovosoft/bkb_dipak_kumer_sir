<p align="center"><a href="http://krishibank.org.bd" target="_blank"><img src="./logo.png" width="400"></a></p>

# Development Environment Configuration

## Dependencies
1. php
2. composer
3. apache/nginx
4. MySQL / Maria DB /SQLite
4. NodeJS

## Step-by-step instructions
1. Install PHP executables in your Operating System. Or Install Laragon from https://laragon.org.
   
2. The php version of this project is 7.4 and above. Download and install php >=7.4 .

3. Add php executable in path variable. 

4. First Download and install composer from https://getcomposer.org/download/. 
To install on specific OS, please follow instructions described in https://getcomposer.org/download/. 
    - Don't forget add to add the composers executables in path variables. 
    Most of the time it will be done automatically during installation. 

5. Install nodejs from https://nodejs.org/en/download/
6. Install yarn
```shell
npm install -g yarn
```
7. If you are using Laragon, then set, 
    - `apache` version to `2.4`.
    - `php` version to `>=7.4`
    - MySQL version at least `>=5.7` or MariaDB version `>=10`
    
8. To write code, you can use Microsoft `Visual Studio Code` or `phpstorm`


## Tips for Visual Studio Code
1. Extensions
    - https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client
    - https://marketplace.visualstudio.com/items?itemName=octref.vetur
    - https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
    - https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
    - https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense
    
    
