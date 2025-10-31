import React from 'react'
import Employee from './Employee'

const Array3 = () => {
    const Employee=[
        {
            eid:1002,
            ename:"Rohan Patil",
            salary:50000
        },
        {
            eid:1003,
            ename:"Vedikaa Patil",
            salary:50000
        },
        {
            eid:1004,
            ename:"Laxmi Patil",
            salary:50000
        }

    ]
//     const EmployeeListData = Employee.map(Employee=>
//     <h2>My name ia {Employee.ename} and salary is {Employee.salary}</h2>
//     )
//   return (
//     <div>
//       {EmployeeListData}
//     </div>
//   )

const Emplist=Employee.map(employee=>
    <Employee key={employee.eid} emp={employee} />
)
return (
    <>
        {Emplist}
    </>
)
}

export default Array3
