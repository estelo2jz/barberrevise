import React, { Component } from 'react'

export default class Visit extends Component {
  render() {
    return (
      <div className="visit-container">
        <div className="visit-address">
          <div className="visit-header">
            <h1>COME VISIT US</h1>
          </div>
          <div className="visit-address">
            <h4>We're located at 1154 E Lake St, Hanover Park, IL 60133</h4>
          </div>
        </div>
        <div className="visit-hours-container">
          <Hours day="MON" time="10am - 8pm" />
          <Hours day="TUE" time="10am - 8pm" />
          <Hours day="WED" time="10am - 8pm" />
          <Hours day="THU" time="10am - 8pm" />
          <Hours day="FRI" time="10am - 8pm" />
          <Hours day="SAT" time="10am - 8pm" />
          <Hours day="SUN" time="10am - 8pm" />
        </div>
      </div>
    )
  }
}

function Hours(props) {
  return (
    <div className="hour-container">
      <div className="hour-inner">
        <p>{props.day}</p>
        <p>{props.time}</p>
      </div>
    </div>
  )
}