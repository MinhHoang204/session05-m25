import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function page() {
    const router = useRouter();
    const { id } = router.query;

    const employee = {
        id,
        name: id === '1' ? 'David' : id === '2' ? 'Linda' : 'Kavin',
        age: id === '1' ? 20 : id === '2' ? 22 : 18,
    };
  return (
    <div>
        <h1>Employee Detail</h1>
        <p>Id: {employee.id}</p>
        <p>Name: {employee.name}</p>
        <p>Age: {employee.age}</p>
        <nav>
            <Link href={`/employees/${id}`}>Employee detail</Link>
            {' | '}
            <Link href={`/employees/${id}/projects`}>Employee's project</Link>
        </nav>
    </div>
  )
}
