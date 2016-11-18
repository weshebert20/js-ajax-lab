<!---
title: Practicing AJAX
type: Lab
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
competencies: Front-end intro
--->

# Practicing AJAX

## Introduction

<!--Differentiate by fist-to-five -->

> ***Note:*** _This will be a pair programming activity._

You're about to write a lot of AJAX-backed JavaScript – using jQuery – that will complete our little Cat Rescue app.

Make use of the fantastic and altruistic https://ga-cat-rescue.herokuapp.com/api/cats.  Your task is to use your JS skills to list out all the cats in our database and get our form working so we can add more.

## Exercise

#### Requirements

- Implement a jQuery AJAX client for a simple REST service
- Build an application that uses AJAX to update a client
- Update an existing API resource from your client with new data
- Destroy an existing API resource from your client

#### Starter Code

You'll find the same starter code you had in the last lesson in the `starter-code` folder. It's a basic index and some styling, along with an empty `js/app.js`.

#### Deliverable

1. Make a list of existing cats appear underneath the form.
2. Make the form work (i.e. it will add a cat, and you can verify the cat was added by refreshing).
3. Build your app to add to the list of cats - using the information from newly created cats - without refreshing the page.

<img width="752" src="https://cloud.githubusercontent.com/assets/25366/9149279/bc93cd02-3d57-11e5-9f03-1e19d0097fd2.png">

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
- [The Official Cat API](https://ga-cat-rescue.herokuapp.com/api/cats)
