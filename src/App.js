import React, { Component } from 'react';
import EventContainer from './components/events/EventContainer'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showEventContainer: false
    }
    this.handleShowEventContainer = this.handleShowEventContainer.bind(this);
  }

  handleShowEventContainer(){
    this.setState({showEventContainer: true})
    const button = document.getElementById('button');
    button.style['transition'] = 'opacity 1s';
    button.style['opacity'] = '0';
    setTimeout(() => button.style['display'] = 'none', 1000)
  }

  render() {
    return (
      <div>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Transparent Classroom Coding Challenge</h1>
          </header>
          <button id="button" onClick={this.handleShowEventContainer}>Show Events</button>
          {(this.state.showEventContainer) ? <EventContainer /> : <span></span>}
        </div>


        <style jsx>
        {`
          .App-header {
            height: 100px;
            width: 100%;
            padding-top: 15px;
            background-color: #2c5066;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid grey;
            color: white;
            text-shadow: 0 0 5px grey;
          }

          button {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 200px;
            background-color: #50662c;
            border: 1px solid grey;
            border-radius: 5px;
            font-size: 24px;
            text-shadow: 0 0 5px grey;
            color: white;
            width: 250px;
            height: 80px;
            cursor: pointer;
            transition: transform 0.1s, box-shadow 0.1s;
          }

          button:hover {
            transform: scale(0.95);
            box-shadow: 0 0 10px grey;
            transition: transform 0.1s, box-shadow 0.1s;
          }
        `}
        </style>

      </div>
    );
  }
}

export default App;
