# La vie Mental Health - Medical appointments API

## Challenge


Fictional company La vie needed an API that allows them to create records of psychologists, patients and medical records. Endpoints and requests details are documented on [La Vie API Doc](https://www.postman.com/gold-desert-487027/workspace/handson3-grupo12-lavie/documentation/20804775-fd9e0316-2c15-4e5e-abee-1b98c8a618ed)!


<table>
  <tr>
    <td valign="top"; style="border:none"><img src="https://github.com/pedro-utz/lavie-api/blob/master/src/img/lavie-banner.jpg"/></td>
  </tr>
</table>


## Features
<p>
1. Login - Authentication of psychologists to access the platform. <br>
2. CRUD Psychologists <br>
3. CRUD Patients <br>
4. CRUD Medical Records <br>
</p>


## Technologies

<table>
  <tr>
    <td valign="top"; style="border:none"><img src="https://github.com/pedro-utz/lavie-api/blob/master/src/img/lavie-api-arc.jpg"/></td>
  </tr>
</table>

- [NodeJS](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://https://jwt.io/)

## Database 

<table>
  <tr>
    <td valign="top"; style="border:none"><img src="https://github.com/pedro-utz/lavie-api/blob/master/src/img/database.jpg"/></td>
  </tr>
</table>

## Running La Vie locally

#### Cloning Project
```sh
$ git clone git@github.com:pedro-utz/lavie-api.git
$ cd lavie-api
```
#### Creating Local database
On MySQL Workbench, execute [MySQL File](https://github.com/pedro-utz/lavie-api/blob/master/src/database/Untitled.sql)

#### Changing localhost username, password
On lavie-api/src/database/index.js, edit database information to match your localhost.

#### Installing dependencies
```sh
$ npm install
```
#### Run API
```sh
$ npm run start
```

## You are ready to go! 
Start using API by sending requests to the endpoints documented on: [La Vie API Doc](https://www.postman.com/gold-desert-487027/workspace/handson3-grupo12-lavie/documentation/20804775-fd9e0316-2c15-4e5e-abee-1b98c8a618ed)

