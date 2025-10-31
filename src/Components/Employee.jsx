import React from 'react'


const Employee = ({emp}) => {
  return (
    <div>
      <h2>name-{emp.ename} </h2>
      <h2>salary-{emp.salary} </h2>
    </div>
  )
}

export default Employee
