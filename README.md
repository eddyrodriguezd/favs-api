# Favs API
Favs is a way to organize your favorite things: music, clothes, courses, etc., all in one place.

## Technologies used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="70" height="70" /> &nbsp; &nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="70" height="70" /> &nbsp; &nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="70" height="70" /> &nbsp; &nbsp;

## How does it work

It exposes 7 endpoints. 

2 of them belong to the authentication process. They have "/auth/local" as base path.
| Method | Endpoint | Action | Body
| --- | --- | --- | --- |
| POST | /register | Register a user | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }
| POST | /login | Log in | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }

The remaining 5 endpoints of them belong to the CRUD operations. They have "/api/favs" as base path.
| Method | Endpoint | Action | Query Param | Body
| --- | --- | --- | --- | --- |
| POST | / | Create a new list of favorites | | { <br> &nbsp; &nbsp; "name": String, <br> &nbsp; &nbsp; "favs" : [], <br> }
| GET | / | Get all your lists of favorites | | { <br> &nbsp; &nbsp; "title": String, <br> &nbsp; &nbsp; "description" : String, <br> &nbsp; &nbsp; "link" : String <br> }
| GET | /:id | Get one of your lists of favorites | id: String |
| POST | /:id | Add item to a list of favorites | id: String |
| DELETE | /:id | Delete one of your list of favorites | id: String |