import React from 'react'
import Link from 'next/link';
export default function page() {
    const employees = [
        { id: 1, name: 'David', age: 20 },
        { id: 2, name: 'Linda', age: 22 },
        { id: 3, name: 'Kavin', age: 18 },
    ];
  return (
    <div>
        <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <p>Id: {employee.id}</p>
                        <p>Name: {employee.name}</p>
                        <p>Age: {employee.age}</p>
                        <Link href={`/employees/${employee.id}`}>Employee detail</Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}
