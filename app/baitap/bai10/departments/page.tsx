import Link from 'next/link';
import { departments } from '../data';

export default function DepartmentList() {
  return (
    <div>
      <h1>Department List</h1>
      <ul>
        {departments.map(dept => (
          <li key={dept.id}>
            <Link href={`/departments/${dept.id}`}>
              {dept.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}