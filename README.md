# :wave: Gather

## Description

Gather is an event planning app that allows users to create and track different types of events. The home page displays a list of events, and each event has its own page with further details. On an individual event's page, there is a suggested city and additional activity for further planning inspiration. 

## Contributors
[Jamera McNeil](https://github.com/JameraMcNeil)
[Molly Carroll](https://github.com/mollycarroll)
[Jessica Gallagher](http://iamjessg.com/)

## :woman_technologist: Ingredients
***Please refer to the ``RESOURCES.md`` file for credit and citation information.***

-   Languages:

    -   HTML5
    -   CSS3
    -   JavaScript
    -   React.js

-   Design:

    -   Twitter Bootstrap
    -   Google Fonts

-   Build:

    -   Visual Studio Code Text Editor
    -   MongoDB / Mongoose ODM
    -   Express
    -   Node.js
    -   Postman
    -   Heroku

## :rocket: Features

-   Mobile-friendly, responsive design

-   MVC file structure

-   Multiple models

## :world_map: RESTful Routes

|#|Action|URL|HTTP|Mongoose Method|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1| Index |  | GET | Event.find() |
|2| Show | /:id | GET | Event.findById |
|3| New | /create | GET | none |
|4| Create | / | POST | Event.create(req.body) |
|5| Edit | /:id | GET | Event.findById |
|6| Update | /:id/edit | PUT | Event.findByIdAndUpdate |
|7| Destroy | /:id | DELETE | Event.findByIdAndRemove |