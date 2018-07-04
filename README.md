# Event Scraper Coding Challenge

#### By **Justin Lardani**

## Description

This is a project built with React.js and Node.js that scrapes events from Stanford.edu, MeetUp, and EventBrite

## Setup Instructions

* run $ npm install from the root of the project directory
* run $ npm start
* navigate to localhost:3000
* run * npm test if you would like to start the test runner

### How far did you get?

_I was able to meet the baseline conditions for the project. There are definitely still many thing that could be improved upon, though! If I were to spend more time on this project, I would work on the following features:_

* A set of formatters to ensure that dates and locations are uniform in presentation
* Delayed loading of event cards that are not on the screen to improve performance
* Keyword search capability

### Talk about performance concerns on the frontend

_As it stands right now, the number of events being scraped from the provided websites are manageable in terms of the browser's ability to render them quickly. This would definitely become a problem, though, if far more events were to be scraped. The delay between requesting events and receiving events back from the server is also noticeable. A loading animation would greatly improve the user experience here._

### Talk about scaling the backend

_In this case, I would first look to mitigate the number of requests my server would have to make for the HTML from the three websites I'm scraping from. Because it seems pretty infrequent that events are updated, I would only request new HTML from these sites to scrape from intermittently. In between new scrapings, the response to the /scrape GET request would be cached and sent to those requesting this resource. This would greatly reduce the duration of most request-response cycles.

## Support and contact details

_Email me @ jlardani93@gmail.com with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{WeDOW}_**
