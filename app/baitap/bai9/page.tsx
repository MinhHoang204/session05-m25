import React from 'react'
import { useRouter } from 'next/router';

export default function page() {
    const router = useRouter();
    const { id } = router.query;

    const projects = id === '2' ? ['Facebook', 'Lazada'] : ['No projects found'];
  return (
    <div>
        <h1>The employee project list has id = {id}</h1>
        <ul>
            {projects.map((project, index) => (
                <li key={index}>{project}</li>
            ))}
        </ul>
    </div>
  )
}
