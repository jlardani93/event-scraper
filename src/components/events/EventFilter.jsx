import React from 'react'

export default function EventFilter(props){

  const buttonClasses = props.activeButtons.map( bool => (bool) ? 'active' : 'inactive')

  return(
    <div>
      <div id="filtersContainer">
        <div className="filterButtonContainer">
          <div className={`filterButton ${buttonClasses[0]}`} onClick={() => props.handleSelectFilter('showStanford')}>
            <p>Stanford</p>
          </div>
        </div>
        <div className="filterButtonContainer">
          <div className={`filterButton ${buttonClasses[1]}`} onClick={() => props.handleSelectFilter('showEventBrite')}>
            <p>EventBrite</p>
          </div>
        </div>
        <div className="filterButtonContainer">
          <div className={`filterButton ${buttonClasses[2]}`} onClick={() => props.handleSelectFilter('showMeetUp')}>
            <p>MeetUp</p>
          </div>
        </div>
      </div>
      <style jsx>
      {`
        #filtersContainer {
          margin-top: 15px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .filterButtonContainer {
          padding: 10px;
        }

        .filterButton {
          text-align: center;
          position: relative;
          background-color: #99840f;
          height: 50px;
          border: 1px solid grey;
          border-radius: 5px;
          font-size: 28px;
          color: white;
          transition: transform 0.1s;
          cursor: pointer;

          -webkit-animation: fadein 2s;
          -moz-animation: fadein 2s;
          -ms-animation: fadein 2s;
          -o-animation: fadein 2s;
            animation: fadein 2s;
        }

        .filterButton.inactive {
          opacity: 0.5;
        }

        .filterButton:hover {
          transform: translate(0, 10px);
          transition: transform 0.1s;
        }

        .filterButton p {
          margin-top: 10px;
        }

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

      `}
      </style>
    </div>
  )
}
