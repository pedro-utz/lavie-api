# La vie Mental Health - Medical appointments API

## Challenge

<p>
To help with their schedules, fictional company La vie needed an API that allows them to create records of psychologists, patients and medical records. In a conversation with front end developers and PO, it was raised the need of a group of endpoints. 
</p>

<table>
  <tr>
    <td valign="top"; style="border:none"><img src="https://github.com/pedro-utz/dindin/blob/master/img/banner-dindin.jpg"/></td>
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
    <td valign="top"; style="border:none"><img src=""/></td>
  </tr>
</table>

- [NodeJS](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://https://jwt.io/)

## Database 

<table>
  <tr>
    <td valign="top"; style="border:none"><img src=""/></td>
  </tr>
</table>

<h2> Running </2>

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
$ npm run dev 
```

<p> After cloning the project you might reveal "index.html" in File Explorer and open with your browser or launch a local development server with <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server extension</a>.</p>

