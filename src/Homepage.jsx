import React, { Component } from 'react'
import Profile from './Profile'

export default class Homepage extends Component {
    

  render() {
    return (
      <div>
        <Profile userName="Albert" color="blue"/>
        <Profile userName="Vanessa" color="green"/>
      </div>
    )
  }
}
