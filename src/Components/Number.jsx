import React, { Component } from 'react'

export default class Number extends Component {
    constructor (props){
        super(props)

        this.state={
            number:15
        }
    }
//   render() {
//     let message
//     if (this.state.number %2==0) {
//         message=<h1>The given number is even</h1>
        
//     } else {
//         message=<h1>The given no is odd</h1>
//     }
//     return <div>{message}</div>
//   }



// using tarnary operator
render(){
    return(this.state.number%2==0)?
    (
        <h1>The given number is even</h1>
    ):(
        <h1>The given number is odd</h1>
    )

}
}
