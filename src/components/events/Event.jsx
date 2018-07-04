import React from 'react'

export default function event(props){
  return (
    <div className="gridCell">

      <div className="event">
        <a href={props.eventData.eventUrl}>
          <div>
            <h3>{props.eventData.eventTitle}</h3>
            <img src={props.eventData.imgUrl}/>
            <p>{props.eventData.eventTime.trim()}</p>
            <p>{props.eventData.eventLocation}</p>
          </div>
        </a>
      </div>


      <style jsx>
      {`
        img {
          display: block;
          margin-right: auto;
          margin-left: auto;
          width: 90%;
          height: auto;
          border: 1px solid grey;
          border-radius: 5px;
          box-shadow: 0 0 5px grey inset;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .event {
          height: 95%;
          padding: 10px;
          border: 1px solid grey;
          border-radius: 5px;
          background-color: #bcc6b1;
          y-overflow: hidden;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;

          -webkit-animation: fadein 2s;
          -moz-animation: fadein 2s;
          -ms-animation: fadein 2s;
          -o-animation: fadein 2s;
            animation: fadein 2s;
        }

        .event:hover {
          box-shadow: 0 0 3px grey inset;
          transform: translate(0, -10px);
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .gridCell {
          padding: 10px;
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
