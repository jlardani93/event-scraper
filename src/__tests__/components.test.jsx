import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EventContainer from './../components/events/EventContainer'
import Event from './../components/events/event'

describe('EventContainer', () => {
  it ('renders without throwing error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventContainer />, div);
  })

  it ('renders correctly', () => {
    function componentToTest(){
      return <EventContainer />
    }
    const tree = renderer
      .create(<componentToTest />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('Event', () => {
  it ('renders without throwing error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventContainer />, div);
  })

  it ('renders correctly', () => {
    const mockData = {
      eventTitle: 'title',
      eventTime: 'time',
      imgUrl: 'https://media.istockphoto.com/photos/red-apple-picture-id495878092?k=6&m=495878092&s=612x612&w=0&h=q9k5jN-1giBGZgTM6QhyKkPqtGf6vRpkgDzAwEz9DkY=',
      eventUrl: 'https://www.transparentclassroom.com/'
    }

    function componentToTest(props){
      return <Event eventData={props.mockData}/>
    }
    const tree = renderer
      .create(<componentToTest mockData={mockData}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
