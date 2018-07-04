let request = require('supertest')
request = request('http://localhost:8080')
const express = require('express');

const app = express();

describe('server', () => {
  it('is running', done => {
    request
      .get('/ping')
      .expect(200)
      .then(response => {
        expect(response.text).toBe('pong');
        done();
      })
  })
})

describe('GET /scrape', () => {
  it('returns an array of events', done => {
    request
      .get('/scrape')
      .expect(200)
      .then(response => {
        expect(response.body.length > 0).toEqual(true);
        expect(response.body[0][0].hasOwnProperty('eventTime')).toEqual(true);
        expect(response.body[0].hasOwnProperty('unscrapable')).toEqual(false);
        done();
      })
  })
})
