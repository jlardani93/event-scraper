const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio')

app.use(express.static(path.join(__dirname, 'build')));

console.log('==========STARTING SERVER==========');

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('/scrape', (req, res) => {
  Promise.all([
    scrapeStanford(),
    scrapeEventBrite(),
    scrapeMeetUp()
  ]).then((responses) => {
    res.send(responses);
  })
})

function scrapeStanford(){
  return new Promise((resolve, reject) => {
    loadHTMLToScrape('http://events.stanford.edu')
      .then((cheerioHTML) => {
        $ = cheerioHTML;
        const eventsArray = $('.postcard-left').map((i, event) => {
          return {
            eventTitle: $(event).find('.postcard-text h3').text(),
            eventTime: $(event).find('.postcard-text strong').text(),
            imgUrl: 'http://events.stanford.edu' + $(event).find('.postcard-image img').attr('src'),
            eventUrl: 'http://events.stanford.edu' + $(event).parent().attr('href')
          }
        }).toArray();
        resolve(eventsArray);
      })
  })
}

function scrapeEventBrite(){
  return new Promise((resolve, reject) => {
    loadHTMLToScrape('https://www.eventbrite.com/')
      .then((cheerioHTML) => {
        $ = cheerioHTML;
        const eventsArray = $('.poster-card').map((i, event) => {
          return {
            eventTitle: $(event).find('.poster-card__title').text(),
            eventTime: $(event).find('.poster-card__titledate').text(),
            eventLocation: $(event).find('.poster-card__venue').text(),
            imgUrl: $(event).find('img').attr('src')
          }
        }).toArray();
        resolve(eventsArray);
      });
  })
}

function scrapeMeetUp(){
  return new Promise((resolve, reject) => {
    loadHTMLToScrape('https://www.meetup.com/find/events/?allMeetups=true&radius=5&userFreeform=Seattle%2C+Washington%2C+USA&mcId=c98101&change=yes&eventFilter=mysugg')
      .then((cheerioHTML) => {
        $ = cheerioHTML;
        const eventsArray = $('.event-listing').map((i, event) => {
          return {
            eventTime: $(event).find('time').text(),
            eventTitle: $(event).find('.resetLink.big.event span').text(),
            eventUrl: $(event).find('.resetLink.big.event').attr('href')
          }
        }).toArray();
        resolve(eventsArray);
      })
  })
}

function loadHTMLToScrape(url){
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(cheerio.load(response.data));
      })
      .catch(error => {
        console.log(error);
      })
  })
}

app.listen(process.env.PORT || 8080);
