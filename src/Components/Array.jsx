import React from 'react'

const Array = () => {
    const courses=["data analytics","data science","python fullstack","advance Graphics"]
  return (
    // that is simple method
    <div>
      <h2>{courses[0]}</h2>
      <h2>{courses[1]}</h2>
      <h2>{courses[2]}</h2>
      <h2>{courses[3]}</h2>
    </div>
  )
}

export default Array
