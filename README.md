<p align="center"><a href="http://krishibank.org.bd" target="_blank"><img src="./logo.png" width="400"></a></p>

# BKB Loan Information Management

## About Laravel

Loan Information Management System (LIMS) of Bangladesh Krishi Bank (BKB). This software is primarily developed to
manage and record loan information of Bangladesh Krishi Bank.

## Dependencies

- [Laravel Framework 8](https://laravel.com)
    - Laravel is accessible, powerful, and provides tools required for large, robust applications.
- [Vue 2](https://vuejs.org/)
    - Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other
      monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is
      focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On
      the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in
      combination with modern tooling and supporting libraries.
- [bootstrap-vue](https://bootstrap-vue.org/)
    - With BootstrapVue you can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and
      the world's most popular front-end CSS library — Bootstrap v4.

## Development Environment Configuration

Visit here for more details : [DEVELOPMENT INFORMATION](./DEVELOPMENT.md)

## Project Installation

1. First Download / Clone this repo to your server's root directory.

```shell
git clone https://github.com/wovosoft/bkb_loaninfo.git projectname
```

2. Navigate to project folder

```shell
cd projectfolder
```

3. Install PHP dependencies

```shell
composer install
```

4. Install JavaScript Dependencies

```shell
yarn install
```

or

```shell
npm install
```

5. Copy Environment File from .env.example to .env file

```shell
cp .env.example .env
```

6. Generate Application Key, which will be used by Laravel Framework Internally

```shell
php artisan key:generate
```

7. Link File System as Laravel Framework's storage disk

```shell
php artisan storage:link
```

8. Create Database by using your favorite Database Browser or by CLI/Terminal

```shell
mysql -u root -p
```

- Enter Database Username
- Enter Database Password

Now Run,

```mysql
CREATE DATABASE database_name;
```

9. Update `.env` File, included in project root

```dotenv
DB_DATABASE=bkbloaninfo
DB_USERNAME=root
DB_PASSWORD=
```

10. Migrate all migration files to created necessary tables

```shell
php artisan migrate
```

Seed initial data

```shell
php artisan db:seed
```

Or, You can run both commands at same time by

```shell
php artisan migrate --seed
```

If any error occours , please first fix the issues and then run

```shell
php artisan migrate:fresh --seed
```

## Contributing

- [Narayan Adhikary, Senior Officer (ICT), BKB](https://github.com/wovosoft/)
- [https://narayanadhikary.netlify.app](https://narayanadhikary.netlify.app)

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Narayan Adhikary
via [narayanadhikary24@gmail.com](mailto:narayanadhikary24@gmail.com).

## License

This Project is Owned by [Bangladesh Krishi Bank](http://www.krishibank.org.bd/). Narayan Adhikary is no more
responsible for this project. He transferred from Head Office to Divisional Office, Khulna. So, all the responsibilities
will be hand-overed to BKB ICT Operation Department, Head Office from 03/02/2021. 
