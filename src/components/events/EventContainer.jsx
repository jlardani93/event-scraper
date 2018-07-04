import React from 'react'
import Event from './Event'
import EventFilter from './EventFilter'

class eventContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      stanfordEvents: [],
      eventBriteEvents: [],
      meetUpEvents: [],
      showStanford: true,
      showEventBrite: true,
      showMeetUp: true,
      activeButtons: [true, true, true]
    }
    this.onSelectFilter = this.onSelectFilter.bind(this)
  }

  componentWillMount(){
    fetch('/scrape')
      .then( res => res.json())
      .then( res => {
        //Converts nested array into a single, flat array
        const newEventsArray = res.reduce((sum, siteArray) => sum.concat(siteArray), [])
        this.setState({
          events: newEventsArray,
          stanfordEvents: res[0],
          eventBriteEvents: res[1],
          meetUpEvents: res[2],
        })
      })
      .catch( err => {
        // console.log(err)
      })
  }

  updateEvents(){
    let newEvents = [];
    if (this.state.showStanford) newEvents = newEvents.concat(this.state.stanfordEvents)
    if (this.state.showEventBrite) newEvents = newEvents.concat(this.state.eventBriteEvents)
    if (this.state.showMeetUp) newEvents = newEvents.concat(this.state.meetUpEvents)
    this.setState({events: newEvents})
  }

  updateButtons(){
    const newActiveButtons = [
      (this.state.showStanford == true),
      (this.state.showEventBrite == true),
      (this.state.showMeetUp == true)
    ]
    this.setState({activeButtons: newActiveButtons})
  }

  onSelectFilter(property){
    const newValue = !this.state[property]
    const onUpdate = (function(){
      this.updateEvents();
      this.updateButtons();
    }).bind(this)
    this.setState({[property]: newValue}, onUpdate)
  }

  render(){
    return (
      <div>
        <EventFilter handleSelectFilter={this.onSelectFilter} activeButtons={this.state.activeButtons} />
        <div id="eventContainer">
          {this.state.events.map( (event, i) =>
            <Event key={i} eventData={event} />
          )}
        </div>


        <style jsx>
          {`
            #eventContainer {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              padding-top: 10px;
            }
          `}
        </style>


      </div>
    )
  }
}

export default eventContainer;
