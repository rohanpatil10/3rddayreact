import React from 'react'


const Employee = ({emp}) => {
  return (
    <div>
      <h2>name-{emp.ename} </h2>
      <h2>salary-{emp.salary} </h2>
      <p>my name is RR</p>
    </div>
  )
}

export default Employee
