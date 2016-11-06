# Time Stamp API

## Introduction

This API was built as part of a FreeCodeCamp project: https://www.freecodecamp.com/challenges/timestamp-microservice

Give it a date in unix or natural form. The api returns json with the date in both unix and natural form.

## Get /date

### Date as a number

- https://fcctimestampmicroserver.herokuapp.com/1

Response:

`{"unix":1,"natural":"January 1, 1970"}`

### Date in Month Date Year format

- https://fcctimestampmicroserver.herokuapp.com/October%2011%202014

Response:

'{"unix":1412985600000,"natural":"October 11, 2014"}`
