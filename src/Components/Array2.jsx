import React from 'react'

const Array2 = () => {
        const courses=["data analytics","data science","python fullstack","advance Graphics"]
        const courseList= courses.map(courses=> <h3>{courses}</h3>)

        
  return (
    <div>
      {courseList}
    </div>
  )
}

export default Array2
