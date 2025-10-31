import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:true
            
        }
       
    }

  render() {
    if(this.state.isLoggedIn)
    {

    return (
        <h1>The User LoggedIn Successfully</h1>
    )

    }
    else{
        return(
            <h1>Invalid Creadentails</h1>
        )
    }
      
  }
}