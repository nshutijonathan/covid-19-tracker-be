# Covid-19-tracker-be

Demonstration of COVID-19 cases based on countries .

# Project-Nile-be

Back-end repository of the Covid Tracker API

## API ENDPOINTS

| Ressource URL | Methods | Description    |
| ------------- | ------- | -------------- |
| /             | GET     | The index page |
| /api/v1/cases | GET     | Cases List     |

### GET api/v1/cases

```
{
    "message": "Cases fetched successfully",
    "status": 200,
    "data": []
}
```

### GET api/v1/logs

```
{
    "message": "Logs retrieved successfully",
    "logs": "{\"message\":\"GET /api/v1/logs 200 51 - 4.626 ms\\n\",\"level\":\"info\"}\n{\"message\":\"GET /api/v1/logs 200 127 - 1.379 ms\\n\",\"level\":\"info\"}\n{\"message\":\"GET /api/v1/logs 200 204 - 1.362 ms\\n\",\"level\":\"info\"}\n"
}
```

## Clone the repository

[Github](https://github.com/nshutijonathan/covid-19-tracker-be)

## Tools Used

### Language

[Javascript](https://devdocs.io/javascript/)

### Server Environment

[NodeJS](https://nodejs.org/en/download/)

### Framework

[Express](https://expressjs.com/)

### Deployment

[Heroku](https://id.heroku.com/login)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
 [Node Package Installer - NPM] this usually comes with Node.
```

## SET NODE

TO setup the project on your local machine do the following
Install Node or download it .

```
npm install node
```

## Install PostgresSql

```
[PostgresSql](https://www.postgresql.org/download/)
```

## Installation

The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
npm install
```

## Database

```Creata a .env file

Copy and Paste the DATABASE_URL

DATABASE_URL=postgres://[USERNAME]:[PASSWORD]@localhost/[DATABASE_NAME]
```

## Run the server

```
npm run start

```

## .env.sample

NODE_ENV=development
DEV_USERNAME=your_username
DEV_PASSWORD=your_password
DEV_DATABASE=your_development_data_base
DEV_HOST=your_host

## Contributors

Jonathan Nshuti <nshutijonathan130@gmail.com>

## License & Copyright

Copyright (c) Jonathan Nshuti , Software developer
